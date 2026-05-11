(function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function(){
      const isOpen = navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.addEventListener('click', function(event){
      if (event.target.closest('a')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const modelSelect = document.querySelector('[data-model-select]');
  if (modelSelect) {
    const commandTargets = {
      unix: document.querySelector('[data-command="unix"]'),
      windows: document.querySelector('[data-command="windows"]'),
      pip: document.querySelector('[data-command="pip"]')
    };

    function setCommand(target, lines) {
      if (!target) return;
      target.innerHTML = lines.map(function(line){
        return line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }).join('<br>');
    }

    function updateInstallerCommands() {
      const model = modelSelect.value || 'gpt-5.5';
      setCommand(commandTargets.unix, [
        'curl -fsSL https://aiswmm.com/install.sh | AISWMM_MODEL=' + model + ' bash'
      ]);
      setCommand(commandTargets.windows, [
        '$env:AISWMM_MODEL = "' + model + '"',
        'irm https://aiswmm.com/install.ps1 | iex'
      ]);
      setCommand(commandTargets.pip, [
        'pip install aiswmm',
        'aiswmm setup --provider openai --model ' + model
      ]);
    }

    modelSelect.addEventListener('change', updateInstallerCommands);
    updateInstallerCommands();
  }

  const nav = document.querySelector('.top-nav');
  if (!nav) return;
  let last = window.scrollY || 0;
  let idleTimer = null;
  let hovering = false;

  function show(){ nav.classList.remove('is-hidden'); }
  function hide(){
    if (hovering) return;
    if ((window.scrollY || 0) <= 10) return;
    nav.classList.add('is-hidden');
  }
  function scheduleAutoHide(){ if (idleTimer) clearTimeout(idleTimer); idleTimer = setTimeout(hide, 3000); }
  function onScroll(){
    const y = window.scrollY || 0;
    if (y < 10) { show(); return; }
    if (y < last) { show(); } else if (y > last && y > 120) { hide(); }
    last = y;
    scheduleAutoHide();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('pointermove', function(e){ if (e.clientY <= 80) show(); scheduleAutoHide(); });

  nav.addEventListener('mouseenter', function(){ hovering = true; show(); if (idleTimer) clearTimeout(idleTimer); });
  nav.addEventListener('mouseleave', function(){ hovering = false; scheduleAutoHide(); });
  nav.addEventListener('focusin', function(){ hovering = true; show(); if (idleTimer) clearTimeout(idleTimer); });
  nav.addEventListener('focusout', function(){ hovering = false; scheduleAutoHide(); });

  // initial
  scheduleAutoHide();
})();
