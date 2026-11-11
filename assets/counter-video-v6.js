/* Our Love Story — Shantik / Stage 6: accessible, viewport-aware video hug. */
(function () {
  'use strict';
  const scene = document.getElementById('counterMotion');
  const stage = document.getElementById('counterVideoStage');
  const button = document.getElementById('counterMotionTap');
  const intro = document.getElementById('counterVideoIntro');
  const idle = document.getElementById('counterVideoIdle');
  const still = document.getElementById('counterVideoStill');
  const caption = document.getElementById('counterMotionCaption');
  if (!scene || !stage || !button || !intro || !idle || !still || !caption) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const hugPoster = 'assets/videos/shantik-pelukan-hug-v6.webp';
  const startPoster = 'assets/videos/shantik-pelukan-start-v6.webp';
  let visible = false;
  let started = false;
  let phase = 'poster';
  let generation = 0;
  let failed = false;

  // Safari/iOS autoplay requires both properties, even for silent video files.
  [intro, idle].forEach(function (video) {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.addEventListener('error', function () {
      if (!failed) {
        failed = true;
        pauseBoth();
        stage.dataset.phase = 'poster';
        still.src = hugPoster;
        caption.textContent = 'Pelukan kita, selamanya ♡';
        button.disabled = true;
      }
    });
  });

  function pauseBoth() {
    intro.pause();
    idle.pause();
  }

  function setReducedMode() {
    if (reduced.matches) {
      generation++;
      pauseBoth();
      stage.dataset.phase = 'poster';
      still.src = hugPoster;
      caption.textContent = 'Pelukan kita, selamanya ♡';
      button.disabled = true;
      button.setAttribute('aria-label', 'Gambar pasangan chibi berpelukan; animasi dinonaktifkan sesuai pengaturan gerakan');
    } else {
      still.src = startPoster;
      button.disabled = failed;
      button.setAttribute('aria-label', 'Putar ulang animasi Shantik berlari lalu berpelukan');
      caption.textContent = 'Ketuk untuk peluk lagi ♡';
      if (!failed && visible && !document.hidden) {
        if (!started) beginIntro();
        else resume();
      }
    }
  }

  function prepareVideo() {
    [intro, idle].forEach(function (video) {
      if (video.preload === 'none') {
        video.preload = 'auto';
        video.load();
      }
    });
  }

  function beginIntro() {
    if (reduced.matches || failed) return;
    const token = ++generation;
    started = true;
    phase = 'intro';
    pauseBoth();
    stage.dataset.phase = 'poster';
    still.src = startPoster;
    try { intro.currentTime = 0; } catch (_) { /* no seekable media yet */ }
    try { idle.currentTime = 0; } catch (_) { /* no seekable media yet */ }
    prepareVideo();
    const playback = intro.play();
    if (playback && typeof playback.then === 'function') {
      playback.then(function () {
        if (token === generation && phase === 'intro' && !reduced.matches && !document.hidden && visible) {
          stage.dataset.phase = 'intro';
        }
      }).catch(function () {
        // Muted autoplay may be blocked: keep a usable poster and retry on tap.
        if (token === generation) stage.dataset.phase = 'poster';
      });
    } else {
      stage.dataset.phase = 'intro';
    }
  }

  function beginIdle() {
    if (reduced.matches || failed || phase !== 'intro') return;
    phase = 'idle';
    const token = generation;
    if (!visible || document.hidden) return;
    try { idle.currentTime = 0; } catch (_) { /* retry on playback */ }
    const playback = idle.play();
    if (playback && typeof playback.then === 'function') {
      playback.then(function () {
        if (token === generation && phase === 'idle' && visible && !document.hidden) {
          stage.dataset.phase = 'idle';
          intro.pause();
        }
      }).catch(function () {
        // If the second clip fails, hold the warm final frame of the intro.
        if (token === generation) {
          phase = 'poster';
          stage.dataset.phase = 'poster';
          still.src = hugPoster;
        }
      });
    } else {
      stage.dataset.phase = 'idle';
      intro.pause();
    }
  }

  // Begin the idle clip just before the intro ends for a very short crossfade.
  intro.addEventListener('timeupdate', function () {
    if (phase !== 'intro' || !Number.isFinite(intro.duration)) return;
    if (intro.currentTime >= intro.duration - 0.16) beginIdle();
  });
  intro.addEventListener('ended', beginIdle);

  function resume() {
    if (reduced.matches || failed || !visible || document.hidden) return;
    const video = phase === 'idle' ? idle : phase === 'intro' ? intro : null;
    if (!video) return;
    const token = generation;
    const playback = video.play();
    if (playback && typeof playback.then === 'function') {
      playback.then(function () {
        if (token === generation && visible && !document.hidden) {
          stage.dataset.phase = phase;
        }
      }).catch(function () { /* Leave poster available on playback restrictions. */ });
    }
  }

  button.addEventListener('click', function () {
    if (reduced.matches || failed) return;
    visible = true; // A user-initiated tap is always an explicit replay request.
    beginIntro();
  });

  const observer = new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;
    if (!visible) {
      pauseBoth();
    } else if (!reduced.matches && !failed && !document.hidden) {
      if (!started) beginIntro();
      else resume();
    }
  }, { threshold: 0.08 });
  observer.observe(scene);

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) pauseBoth();
    else resume();
  });

  if (typeof reduced.addEventListener === 'function') {
    reduced.addEventListener('change', setReducedMode);
  } else if (typeof reduced.addListener === 'function') {
    reduced.addListener(setReducedMode);
  }
  setReducedMode();
})();
