/* main.js — comportamentos globais do site */

'use strict';

/* ─────────────────────────────────────────────────────────────────
   REVEAL — fade + translateY ao entrar na viewport
   Adiciona .is-visible quando o elemento cruza o threshold.
   O CSS em styles.css define a transição; basta o JS trocar a classe.
   ───────────────────────────────────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); /* anima só uma vez */
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
