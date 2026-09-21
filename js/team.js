/* ============================================================
   FILE: js/team.js
   Renders the team grid on team.html.
   ============================================================ */

(function () {
  'use strict';

  function renderTeam() {
    const mount = document.getElementById('jvaTeamGrid');
    if (!mount || !window.JVA_DATA) return;

    mount.innerHTML = JVA_DATA.team.map(member => `
      <div class="col-md-6 col-lg-3 reveal">
        <article class="jva-team-card">
          <img class="jva-team-card__img" src="${member.image}" alt="${member.name}">
          <div class="jva-team-card__body">
            <h3 class="jva-team-card__name">${member.name}</h3>
            <p class="jva-team-card__role">${member.role}</p>
            <p class="jva-team-card__bio">${member.bio}</p>
          </div>
        </article>
      </div>
    `).join('');

    document.dispatchEvent(new Event('jva:content-rendered'));
  }

  document.addEventListener('DOMContentLoaded', renderTeam);
})();