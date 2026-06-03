import * as animePkg from 'animejs';
const anime = (animePkg as any).default || animePkg;

export const staggerReveal = (targets: string, delay = 0) => {
  const elements = document.querySelectorAll(targets);
  if (!elements.length) return;

  elements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    if (!htmlEl.style.transition) {
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(20px)';
      htmlEl.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  });

  const observer = new IntersectionObserver((entries) => {
    const intersecting = entries.filter(entry => entry.isIntersecting);
    const leaving = entries.filter(entry => !entry.isIntersecting);
    
    leaving.forEach((entry) => {
      const el = entry.target as HTMLElement;
      const activeTimeout = el.getAttribute('data-timeout-id');
      if (activeTimeout) {
        clearTimeout(Number(activeTimeout));
        el.removeAttribute('data-timeout-id');
      }
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    });

    intersecting.forEach((entry, index) => {
      const el = entry.target as HTMLElement;
      const activeTimeout = el.getAttribute('data-timeout-id');
      if (activeTimeout) {
        clearTimeout(Number(activeTimeout));
      }
      
      const itemDelay = delay + index * 60;
      const timeoutId = window.setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.removeAttribute('data-timeout-id');
      }, itemDelay);
      
      el.setAttribute('data-timeout-id', String(timeoutId));
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el) => observer.observe(el));
};

/**
 * Floating animation for decorative elements
 * @param {string} targets - CSS Selector 
 */
export const floatAnimation = (targets: string) => {
    anime({
        targets,
        translateY: [0, -20],
        translateX: [0, 10],
        duration: 3000 + Math.random() * 2000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        delay: Math.random() * 1000
    });
};

/**
 * Drawing line animation (for SVG paths or decorative borders)
 * @param {string} targets - CSS Selector
 */
export const drawLineAnimation = (targets: string) => {
    anime({
        targets,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(_el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
};
