import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.querySelector('main');

    if (!root) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('data-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    });

    const autoTargets = root.querySelectorAll(
      [
        'section h1',
        'section h2',
        'section h3',
        'section h4',
        'section p',
        'section span',
        'section li',
        'section article',
        'section blockquote',
        'section [data-animate]',
        'section .reveal',
      ].join(', ')
    );

    autoTargets.forEach((el) => {
      if (el.closest('[data-animate-ignore="true"]')) {
        return;
      }

      if (!el.dataset.animate && !el.classList.contains('reveal')) {
        const tag = el.tagName.toLowerCase();
        const direction = ['h1', 'h2', 'h3', 'h4', 'p', 'span'].includes(tag) ? 'up' : 'right';
        el.dataset.animate = direction;
      }

      observer.observe(el);

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add('active');
        el.classList.add('data-visible');
        observer.unobserve(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);
};
