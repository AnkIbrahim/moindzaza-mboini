/* ── AJOUT : rendu du résumé officiel (summary) ─────────────
   À ajouter dans js/resultats.js, juste avant la fonction loadExam(). */

const renderSummary = () => {
  const container = document.getElementById('summary-block');
  if (!container) return;

  const summary = state.examMeta?.summary;
  if (!summary) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = `
    <div class="summary-card">
      <h3>Résumé officiel — ${state.examMeta.exam} ${state.examMeta.session}</h3>
      <div class="summary-totals">
        <div class="summary-total"><span class="st-num">${summary.total_candidats}</span><span class="st-lbl">Candidats</span></div>
        <div class="summary-total"><span class="st-num">${summary.total_admis}</span><span class="st-lbl">Admis</span></div>
        <div class="summary-total"><span class="st-num">${summary.total_non_admis}</span><span class="st-lbl">Non admis</span></div>
        <div class="summary-total"><span class="st-num">${summary.taux_reussite_global}%</span><span class="st-lbl">Taux de réussite global</span></div>
      </div>
      ${Array.isArray(summary.etablissements) ? `
        <p class="summary-note">Répartition des admis par établissement (part des admis, pas un taux de réussite par école — le détail des non-admis par établissement n'est pas disponible) :</p>
        <div class="summary-schools">
          ${summary.etablissements.map(e => `
            <div class="summary-school-row">
              <span class="ssr-name">${e.nom}</span>
              <div class="ssr-bar"><div class="ssr-bar-fill" style="width:${e.part_des_admis}%"></div></div>
              <span class="ssr-value">${e.admis} admis (${e.part_des_admis}%)</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
};

/* Dans loadExam(), juste après la ligne :
     renderStats();
     renderTable();
   ajouter :
     renderSummary();
*/
