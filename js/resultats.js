'use strict';

const state = {
  exam: null,
  data: [],
  filtered: [],
  page: 1,
  pageSize: 8,
  examMeta: null,
  mentionField: 'mention',
  mentionLabel: 'Mention',
  filters: {
    search: '',
    etablissement: '',
    serie: '',
    groupe: '',
    mention: ''
  }
};

const elements = {
  examCards: document.getElementById('exam-cards'),
  loader: document.getElementById('exam-loader'),
  error: document.getElementById('exam-error'),
  tableHead: document.getElementById('table-head'),
  tableBody: document.getElementById('table-body'),
  tableSummary: document.getElementById('table-summary'),
  totalCount: document.getElementById('total-count'),
  pageCount: document.getElementById('page-count'),
  searchInput: document.getElementById('search-input'),
  filterEtablissement: document.getElementById('filter-etablissement'),
  filterSerie: document.getElementById('filter-serie'),
  filterGroupe: document.getElementById('filter-groupe'),
  filterMention: document.getElementById('filter-mention'),
  filterMentionLabel: document.getElementById('filter-mention-label'),
  serieGroup: document.getElementById('serie-filter-group'),
  groupeGroup: document.getElementById('groupe-filter-group'),
  noResults: document.getElementById('no-results'),
  pagination: document.getElementById('pagination-controls'),
  paginationInfo: document.getElementById('pagination-info'),
  prevPage: document.getElementById('prev-page'),
  nextPage: document.getElementById('next-page'),
  printBtn: document.getElementById('print-report'),
  exportPdfBtn: document.getElementById('export-pdf'),
  downloadCsvBtn: document.getElementById('download-csv')
};

const sanitize = str => String(str || '').normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const createExamCard = exam => {
  const card = document.createElement('article');
  card.className = 'exam-card';
  card.innerHTML = `
    <div class="exam-card-icon" aria-hidden="true">${exam.icon}</div>
    <span class="exam-card-label">${exam.label}</span>
    <h3 class="exam-card-title">Session ${exam.sessions[0]}</h3>
    <p class="exam-card-meta">Consultez la liste officielle des admis pour ${exam.label}.</p>
    <button type="button" class="btn btn-ocean" data-exam="${exam.code}" aria-label="Consulter les résultats ${exam.label}">Consulter</button>
  `;
  card.querySelector('button').addEventListener('click', () => loadExam(exam.code, exam.sessions[0]));
  return card;
};

const updateFilters = () => {
  const { search, etablissement, serie, groupe, mention } = state.filters;
  const normalizedSearch = sanitize(search);
  const mentionField = state.mentionField;

  state.filtered = state.data.filter(item => {
    const matchName = sanitize(item.nom).includes(normalizedSearch) || sanitize(item.prenom).includes(normalizedSearch);
    const matchEtab = !etablissement || item.etablissement === etablissement;
    const matchSerie = !serie || item.serie === serie;
    const matchGroupe = !groupe || item.groupe === groupe;
    const matchMention = !mention || item[mentionField] === mention;
    return matchName && matchEtab && matchSerie && matchGroupe && matchMention;
  });

  state.page = 1;
  renderTable();
  renderStats();
};

const buildOptions = (values, select, includeAll = true) => {
  const unique = Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b, 'fr'));
  select.innerHTML = `${includeAll ? '<option value="">Tous</option>' : ''}${unique.map(value => `<option value="${value}">${value}</option>`).join('')}`;
};

const renderStats = () => {
  const entries = state.filtered;
  const total = entries.length;
  const mentionField = state.mentionField;
  const etabs = entries.reduce((acc, item) => {
    acc[item.etablissement] = (acc[item.etablissement] || 0) + 1;
    return acc;
  }, {});
  const series = entries.reduce((acc, item) => {
    if (item.serie) acc[item.serie] = (acc[item.serie] || 0) + 1;
    return acc;
  }, {});
  const mentions = entries.reduce((acc, item) => {
    if (item[mentionField]) acc[item[mentionField]] = (acc[item[mentionField]] || 0) + 1;
    return acc;
  }, {});

  const statsGrid = document.getElementById('stats-grid');
  statsGrid.innerHTML = `
    <div class="stat-card"><h3>Total admis</h3><p>${total.toLocaleString('fr-FR')}</p></div>
    <div class="stat-card"><h3>Établissements</h3><p>${Object.keys(etabs).length}</p></div>
    ${state.examMeta?.exam === 'BAC' ? `<div class="stat-card"><h3>Séries</h3><p>${Object.keys(series).length}</p></div>` : ''}
    <div class="stat-card"><h3>${state.mentionLabel}</h3><p>${Object.keys(mentions).length}</p></div>
  `;
};

const renderTable = () => {
  const { filtered, page, pageSize, examMeta, mentionField, mentionLabel } = state;
  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);
  const isBac = examMeta?.exam === 'BAC';
  const headers = ['Rang', 'Nom', 'Prénom', 'Sexe', 'Établissement'];
  if (isBac) { headers.push('Série'); headers.push('Groupe'); }
  headers.push(mentionLabel);

  elements.tableHead.innerHTML = headers.map(text => `<th>${text}</th>`).join('');
  elements.tableBody.innerHTML = paged.map(item => `
    <tr>
      <td>${item.rank}</td>
      <td>${item.nom}</td>
      <td>${item.prenom}</td>
      <td>${item.sexe}</td>
      <td>${item.etablissement}</td>
      ${isBac ? `<td>${item.serie || '-'}</td><td>${item.groupe || '-'}</td>` : ''}
      <td>${item[mentionField] || '-'}</td>
    </tr>
  `).join('');

  elements.totalCount.textContent = `${filtered.length.toLocaleString('fr-FR')} résultat${filtered.length > 1 ? 's' : ''}`;
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  elements.pageCount.textContent = `Page ${page} / ${pages}`;
  elements.paginationInfo.textContent = `Page ${page} sur ${pages}`;
  elements.prevPage.disabled = page <= 1;
  elements.nextPage.disabled = page >= pages;
  elements.noResults.classList.toggle('hidden', filtered.length > 0);
  elements.tableBody.parentElement.parentElement.classList.toggle('hidden', filtered.length === 0);
};

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
  const hasPending = typeof summary.total_en_attente_oral === 'number';
  const nonAdmisDisplay = (summary.total_non_admis === null || summary.total_non_admis === undefined) ? '?' : summary.total_non_admis;
  const tauxDisplay = (summary.taux_reussite_global === null || summary.taux_reussite_global === undefined) ? 'À déterminer' : `${summary.taux_reussite_global}%`;
  container.innerHTML = `
    <div class="summary-card">
      <h3>Résumé officiel — ${state.examMeta.exam} ${state.examMeta.session}${summary.provisoire ? ' <span class="summary-badge">Provisoire</span>' : ''}</h3>
      ${summary.provisoire && summary.note ? `<p class="summary-warning">⚠️ ${summary.note}</p>` : ''}
      <div class="summary-totals">
        <div class="summary-total"><span class="st-num">${summary.total_candidats}</span><span class="st-lbl">Candidats</span></div>
        <div class="summary-total"><span class="st-num">${summary.total_admis}</span><span class="st-lbl">Admis${hasPending ? ' (1er groupe)' : ''}</span></div>
        ${hasPending ? `<div class="summary-total"><span class="st-num">${summary.total_en_attente_oral}</span><span class="st-lbl">En attente (oral 2ème groupe)</span></div>` : ''}
        <div class="summary-total"><span class="st-num">${nonAdmisDisplay}</span><span class="st-lbl">Non admis</span></div>
        <div class="summary-total"><span class="st-num">${tauxDisplay}</span><span class="st-lbl">Taux de réussite global</span></div>
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

const loadExam = async (code, session) => {
  state.exam = code;
  state.page = 1;
  state.filters = { search: '', etablissement: '', serie: '', groupe: '', mention: '' };
  state.mentionField = code === 'cepe' ? 'cepe' : 'mention';
  state.mentionLabel = code === 'cepe' ? 'CEPE' : 'Mention';

  elements.searchInput.value = '';
  elements.filterEtablissement.innerHTML = '<option value="">Tous les établissements</option>';
  elements.filterSerie.innerHTML = '<option value="">Toutes les séries</option>';
  elements.filterGroupe.innerHTML = '<option value="">Tous les groupes</option>';
  elements.filterMention.innerHTML = `<option value="">Tous — ${state.mentionLabel}</option>`;
  if (elements.filterMentionLabel) elements.filterMentionLabel.textContent = state.mentionLabel;
  elements.serieGroup.classList.toggle('hidden', code !== 'bac');
  elements.groupeGroup.classList.toggle('hidden', code !== 'bac');
  elements.loader.classList.remove('hidden');
  elements.error.classList.add('hidden');

  try {
    const path = `../data/${code}-${session}.json`;
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error('Fichier introuvable');
    const json = await response.json();
    state.examMeta = json;
    state.data = Array.isArray(json.entries) ? json.entries : [];
    state.filtered = state.data.slice();

    const establishments = state.data.map(item => item.etablissement);
    const mentions = state.data.map(item => item[state.mentionField]);
    const series = state.data.map(item => item.serie);
    const groupes = state.data.map(item => item.groupe);

    buildOptions(establishments, elements.filterEtablissement);
    buildOptions(mentions, elements.filterMention);
    buildOptions(series, elements.filterSerie);
    buildOptions(groupes, elements.filterGroupe);

    renderStats();
    renderTable();
    renderSummary();
    elements.tableSummary.textContent = `Résultats du ${json.exam} — session ${json.session}.`;
  } catch (err) {
    elements.error.textContent = `Impossible de charger les résultats : ${err.message}`;
    elements.error.classList.remove('hidden');
    state.data = [];
    state.filtered = [];
    renderTable();
  } finally {
    elements.loader.classList.add('hidden');
  }
};

const downloadCsv = () => {
  if (!state.filtered.length) return;
  const mentionField = state.mentionField;
  const isBac = state.examMeta?.exam === 'BAC';
  const headers = ['Rang', 'Nom', 'Prénom', 'Sexe', 'Établissement', ...(isBac ? ['Série', 'Groupe'] : []), state.mentionLabel];
  const rows = state.filtered.map(item => [item.rank, item.nom, item.prenom, item.sexe, item.etablissement, ...(isBac ? [item.serie || '', item.groupe || ''] : []), item[mentionField] || '']);
  const csv = [headers, ...rows].map(row => row.map(cell => `"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${state.examMeta?.exam || 'resultats'}-${state.examMeta?.session || ''}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const exportPdf = () => {
  window.print();
};

const init = async () => {
  try {
    const response = await fetch('../data/exams.json', { cache: 'no-store' });
    const exams = await response.json();
    elements.examCards.innerHTML = '';
    exams.forEach(exam => elements.examCards.appendChild(createExamCard(exam)));
  } catch (err) {
    elements.examCards.innerHTML = `<div class="error-block">Impossible de charger la liste des examens.</div>`;
  }

  elements.searchInput.addEventListener('input', e => {
    state.filters.search = e.target.value;
    updateFilters();
  });
  elements.filterEtablissement.addEventListener('change', e => {
    state.filters.etablissement = e.target.value;
    updateFilters();
  });
  elements.filterSerie.addEventListener('change', e => {
    state.filters.serie = e.target.value;
    updateFilters();
  });
  elements.filterGroupe.addEventListener('change', e => {
    state.filters.groupe = e.target.value;
    updateFilters();
  });
  elements.filterMention.addEventListener('change', e => {
    state.filters.mention = e.target.value;
    updateFilters();
  });
  elements.prevPage.addEventListener('click', () => {
    if (state.page > 1) { state.page -= 1; renderTable(); }
  });
  elements.nextPage.addEventListener('click', () => {
    const maxPage = Math.max(1, Math.ceil(state.filtered.length / state.pageSize));
    if (state.page < maxPage) { state.page += 1; renderTable(); }
  });
  elements.printBtn.addEventListener('click', () => window.print());
  elements.exportPdfBtn.addEventListener('click', exportPdf);
  elements.downloadCsvBtn.addEventListener('click', downloadCsv);
};

window.addEventListener('load', init);