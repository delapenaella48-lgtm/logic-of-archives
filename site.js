document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pageDuration = 1500;
  let isNavigating = false;

  // Start each page behind the transition layer, then fade it into view.
  window.requestAnimationFrame(() => document.body.classList.add('page-ready'));
  window.addEventListener('pageshow', () => {
    document.body.classList.remove('page-leave');
    document.body.classList.add('page-ready');
  });

  const navLink = document.querySelector(`[data-nav="${page}"]`);
  if (navLink) {
    navLink.classList.add('is-active');
    navLink.setAttribute('aria-current', 'page');
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      siteNav.classList.toggle('is-open', !isOpen);
    });

    siteNav.addEventListener('click', (event) => {
      if (event.target.matches('a')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('is-open');
      }
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const internalLinks = document.querySelectorAll('a[href]');
  internalLinks.forEach((link) => {
    const url = new URL(link.href, window.location.href);
    const isSamePage = url.pathname === window.location.pathname && !url.hash;
    const isInternal = url.origin === window.location.origin;
    if (!isInternal || isSamePage || link.target === '_blank') return;
    link.addEventListener('click', (event) => {
      if (isNavigating) {
        event.preventDefault();
        return;
      }
      if (prefersReducedMotion) return;
      event.preventDefault();
      isNavigating = true;
      document.body.classList.add('page-leave');
      document.body.setAttribute('aria-busy', 'true');
      window.setTimeout(() => { window.location.href = link.href; }, pageDuration);
    });
  });
});
