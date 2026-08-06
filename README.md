# 🌊 Moindzaza Mboini — Site Vitrine Officiel

> **Site web vitrine professionnel du village côtier de Moindzaza Mboini**  
> Ngazidja, République de l'Union des Comores

![Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![Version](https://img.shields.io/badge/version-2.0-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 📖 Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Pages du site](#pages-du-site)
- [Design System](#design-system)
- [Développement](#développement)
- [Déploiement](#déploiement)
- [Bonnes pratiques](#bonnes-pratiques)
- [Licence](#licence)

---

## Description

**Moindzaza Mboini v2** est un site web vitrine moderne et responsive conçu pour présenter le village, ses associations, son patrimoine culturel et ses initiatives communautaires. 

Le site met en avant :
- L'histoire et la géographie du village
- Quatre associations clés (Comité Local, Angelus Club, ACM, Twamaya)
- La plage locale et ses attractions
- Un système de contact et coordination communautaire

### Objectifs du projet
- Présenter le village sur internet
- Coordonner les activités des associations locales
- Partager l'histoire et la culture locale
- Faciliter le contact et l'adhésion aux projets

---

## Fonctionnalités

### ✨ Expérience utilisateur
- **Hero animé** : Canvas avec ondes océan et particules flottantes
- **Navigation sticky** : Navbar qui change d'apparence au scroll
- **Menu mobile** : Hamburger menu responsive avec transitions fluides
- **Scroll reveal** : Animations progressives des éléments au scroll
- **Compteurs animés** : Statistiques qui se remplissent à l'entrée en vue
- **Page loader** : Animation de chargement personnalisée
- **Barre de progression** : Indicateur de scroll en haut de page
- **Formulaires interactifs** : Contact et feedback utilisateur
- **FAQ accordéon** : Questions/réponses dépliables
- **Barres d'impact animées** : Visualisation des actions (Twamaya)

### 🎯 Sécurité et qualité
- **Page 404 personnalisée** : Design cohérent avec le reste du site
- **Responsive design complet** : Mobile-first (320px → 2560px)
- **Accessibilité WCAG** : Respect des normes a11y
- **Réduction des animations** : Support prefers-reduced-motion
- **Web vitals optimisés** : Performance et UX

---

## Technologies

### Stack technologique
| Type | Technologie |
|------|-------------|
| **Markup** | HTML 5 |
| **Styling** | CSS 3 (variables, grid, flexbox) |
| **Interactions** | Vanilla JavaScript (ES6+) |
| **Polices** | Google Fonts (Playfair Display, DM Sans, DM Serif Display) |
| **Icônes** | SVG intégré |
| **Canvas** | API Canvas HTML5 native |
| **Versioning** | Git |

### Pas de dépendances externes
✅ Aucun npm, aucun build tool, aucune framework — **pur HTML/CSS/JS**

### Navigateurs supportés
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

---

## Architecture

### Structure des dossiers

```
moindzaza-mboini_v2/
│
├── 📄 index.html                    ← Page d'accueil
├── 📄 README.md                     ← This file
├── 📄 TODO.md                       ← Tâches en cours
│
├── 📁 pages/                        ← Pages internes
│   ├── 404.html                     ← Page erreur personnalisée
│   ├── contact.html                 ← Contact & FAQ
│   ├── comite.html                  ← Comité Local
│   ├── angelus.html                 ← Angelus Club (football)
│   ├── acm.html                     ← ACM (éducation & culture)
│   ├── plage.html                   ← La Plage
│   ├── twamaya.html                 ← Twamaya No Urahafu (propreté)
│   │
│   └── 📁 histoires/                ← Articles détaillés
│       ├── histoire.html            ← Page histoire principale
│       └── 📁 show/                 ← Histoires individuelles
│           ├── boina-lemoigne.html
│           ├── histoire-influence-politique.html
│           └── ngome-moindzaza.html
│
├── 📁 css/                          ← Feuilles de styles
│   ├── shared.css                   ← Design system global
│   ├── home.css                     ← Styles page d'accueil
│   ├── inner.css                    ← Styles pages internes
│   └── components.css               ← Composants UI réutilisables
│
├── 📁 js/                           ← Scripts JavaScript
│   ├── shared.js                    ← Logique commune (navbar, canvas, animations)
│   ├── home.js                      ← Hero canvas + particules (accueil)
│   └── inner.js                     ← Interactions pages internes (accordion, forms)
│
├── 📁 icons.svg                     ← Sprites SVG (réutilisables)
│
└── 📁 .git/                         ← Repository Git
```

### Flux des ressources

```
index.html
  ├── css/shared.css     (design tokens, reset, navbar, footer)
  ├── css/home.css       (accueil spécifique)
  ├── js/shared.js       (canvas bg, navbar, scroll reveal, compteurs)
  └── js/home.js         (hero canvas, particules)

pages/*.html
  ├── css/shared.css
  ├── css/inner.css      (grilles, timeline, cartes)
  ├── css/components.css
  ├── js/shared.js
  └── js/inner.js        (accordéon, formulaires, animations)
```

---

## Installation

### Prérequis
- ✅ Navigateur web moderne
- ✅ Connexion internet (pour Google Fonts)
- ✅ Éditeur texte ou IDE (VS Code recommandé)

### Étapes

1. **Cloner le repository**
   ```bash
   git clone https://github.com/AnkIbrahim/moindzaza-mboini.git
   cd moindzaza-mboini_v2
   ```

2. **Ouvrir en local**
   - Double-cliquer sur `index.html` dans le Finder/Explorateur
   - OU ouvrir dans VS Code et utiliser l'extension Live Server
   - OU lancer un serveur local :
   ```bash
   # Python 3.x
   python -m http.server 8000
   
   # Node.js (avec http-server)
   npx http-server
   ```

3. **Accéder au site**
   ```
   http://localhost:8000
   ```

---

## Utilisation

### Navigation
- **Accueil** (`index.html`) — Page de destination principale
- **Histoire** (`pages/histoires/histoire.html`) — Timeline du village
- **Associations** — Dropdown menu :
  - Comité Local
  - Angelus Club (football)
  - ACM (éducation & culture)
  - Twamaya No Urahafu (environnement)
- **La Plage** — Présentation de la plage locale
- **Contact** — Formulaire, FAQ, coordonnées

### Modification du contenu

#### Ajouter une page
1. Créer un nouveau fichier HTML dans `/pages`
2. Copier la structure de base d'une page existante
3. Importer les CSS requises :
   ```html
   <link rel="stylesheet" href="../css/shared.css"/>
   <link rel="stylesheet" href="../css/inner.css"/>
   <link rel="stylesheet" href="../css/components.css"/>
   ```
4. Ajouter le lien dans la navbar (`index.html`)

#### Modifier les couleurs
Éditer les variables CSS dans `css/shared.css` (`:root { ... }`)

```css
:root {
  --lagoon: #13a8c4;    /* Accent principal */
  --aqua: #2dd4e8;      /* Accent secondaire */
  --palm: #3a8f5c;      /* Vert Twamaya */
  --coral: #e06050;     /* Corail Angelus */
  /* ... */
}
```

#### Remplacer les images/émojis
```html
<!-- Avant -->
<span class="hero-emoji">🌊</span>

<!-- Après -->
<img src="images/ocean.jpg" alt="Ocean" class="hero-image"/>
```

---

## Pages du site

### 🏠 **Accueil** (`index.html`)
| Élément | Description |
|---------|-------------|
| Hero section | Canvas animé, tagline, CTA principal |
| Statistiques | Compteurs animés du village |
| Présentation | À propos du village et sa géographie |
| Associations | Showcase des 4 associations majeures |
| Plage | Teaser de la plage locale |
| Contact | Section de contact rapide |

### 📜 **Histoire** (`pages/histoires/histoire.html`)
- Timeline interactive (1890 → aujourd'hui)
- Sections Géographie, Culture, Traditions
- Lien vers articles détaillés (show/)

**Articles disponibles** :
- Boina Lemoigne (personnage historique)
- L'influence politique du village
- Ngome Moindzaza (signification du nom)

### 🏛️ **Comité Local** (`pages/comite.html`)
- Présentation et missions du comité
- 6 objectifs détaillés
- Bureau (Président + 5 membres)
- Projets en cours / réalisés / planifiés

### ⚽ **Angelus Club** (`pages/angelus.html`)
- Présentation du club de football
- 3 catégories de formation (U12, U15, Seniors)
- Palmarès complet
- Calendrier des matchs

### 📚 **ACM** (`pages/acm.html`)
- Association Culturelle et Éducative
- **Programme complet** :
  - Journée de la Culture (heure par heure)
  - Cours de vacances (langues, sport, arts)
  - Cours de soutien scolaire
- Équipe et bénévoles

### 🌿 **Twamaya No Urahafu** (`pages/twamaya.html`)
*« Gardiens de la propreté »*
- Présentation de l'association
- 6 domaines d'actions avec barres d'impact
- Agenda bénévolat
- Appel aux participants

### 🏖️ **La Plage** (`pages/plage.html`)
- Présentation de la plage
- 6 caractéristiques uniques
- Galerie photos (à illustrer)
- Tableau des marées
- Section protection environnementale

### 🎓 **Résultats des examens** (`pages/resultats.html`)
- Consultation des listes officielles des admis aux examens nationaux
- Examens pris en charge : CEPE, BEPC, BAC
- Recherche instantanée par nom et prénom
- Filtres par établissement, série (BAC) et mention
- Statistiques automatiques et pagination
- Impression, export PDF et téléchargement CSV

## Données des sessions
Les résultats sont stockés en JSON dans le dossier `data/`.
Les fichiers Excel sont uniquement des sources de génération. Le navigateur ne charge que les fichiers JSON.

### Ajouter une nouvelle session
1. Créer un nouveau fichier JSON dans `data/` au format `{exam}-{session}.json`.
   - Exemple : `cepe-2027.json`, `bepc-2027.json`, `bac-2027.json`
2. Conserver la structure suivante :
```json
{
  "exam": "BAC",
  "session": 2027,
  "entries": [
    {"rank": 1, "nom": "...", "prenom": "...", "sexe": "M/F", "etablissement": "...", "serie": "S1", "mention": "..."}
  ]
}
```
3. Mettre à jour `data/exams.json` si nécessaire pour inclure la nouvelle session.
4. Ouvrir `pages/resultats.html` et choisir le nouvel examen dans les cartes.

> Le chargement est dynamique : seule la session sélectionnée est demandée par le navigateur.


### ✉️ **Contact** (`pages/contact.html`)
- Adresse, téléphone, email
- Formulaire de contact (13 sujets)
- FAQ accordéon
- Liens vers les associations

### 🚫 **404** (`pages/404.html`)
- Page erreur personnalisée
- Design cohérent avec le site
- Lien retour à l'accueil

---

## Design System

### Palette de couleurs

| Token | Valeur | Usage |
|-------|--------|-------|
| `--abyss` | `#020f1a` | Fond très sombre (nav) |
| `--deep` | `#041c2e` | Fond sombre (hero) |
| `--ocean` | `#073b5c` | Bleu océan |
| `--current` | `#0b6b8a` | Bleu moyen |
| `--lagoon` | `#13a8c4` | **Accent principal** |
| `--aqua` | `#2dd4e8` | Accent vif |
| `--foam` | `#b8eaf2` | Bleu clair |
| `--sky` | `#e0f7fb` | Très clair |
| `--gold` | `#d4a24c` | Accent chaud |
| `--sand` | `#e8c89a` | Sable clair |
| `--cream` | `#fdf8f0` | Fond crème |
| `--palm` | `#3a8f5c` | Vert Twamaya |
| `--coral` | `#e06050` | Corail Angelus |
| `--text` | `#0d1f2d` | Texte principal |
| `--muted` | `#4d6474` | Texte secondaire |

### Typographie

| Font | Usage | Weights |
|------|-------|---------|
| **Playfair Display** | Titres, headings | 400, 600, 700 |
| **DM Sans** | Corps, UI | 300, 400, 500, 600 |
| **DM Serif Display** | Accents italiques | 400, 700 |

### Espacement (fluid)
- `--section-pad`: 48px → 120px (responsive)
- `--gutter`: 16px → 80px (responsive)

### Effets
- `--radius`: 14px (border-radius)
- `--radius-lg`: 28px (border-radius large)
- `--shadow`: Ombres progressives (sm, md, lg)
- `--glow`: Lueur océan 40px

---

## Développement

### Workflow local

**Avec Live Server (VS Code)**
1. Installer l'extension "Live Server"
2. Clic droit sur `index.html` → "Open with Live Server"
3. Le navigateur s'ouvre automatiquement
4. Les changements se rechargent en temps réel

**Avec HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Node
npx http-server -p 8000
```

### Ajouter des animations

Les animations scroll-reveal sont gérées par `js/shared.js` :

```html
<!-- Automatiquement animé au scroll -->
<div class="reveal">Mon contenu</div>
<div class="reveal-left">Depuis la gauche</div>
<div class="reveal-right">Depuis la droite</div>
```

Avec délai personnalisé :
```html
<div class="reveal" data-delay="200">Delai 200ms</div>
```

### Canvas et particules

**Hero canvas** (`js/home.js`) :
- Ondes océan animées
- Particules flottantes
- Responsive au resize de la fenêtre

**Background canvas** (`js/shared.js`) :
- 4 couches d'ondes
- 50 particules flottantes
- Gradient pour chaque couche

### Formulaires

Actuellement simulés (message de succès après 1s). Pour un vrai traitement :

```javascript
// Dans js/inner.js, remplacer la soumission par :
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: data
  });
  // Traiter la réponse
});
```

---

## Déploiement

### Pour GitHub Pages

1. Créer un repo GitHub `username/moindzaza-mboini`
2. Pousser le code
3. Aller dans **Settings → Pages**
4. Sélectionner la branche `main` comme source
5. Site live en 2 minutes ! 🚀

```bash
git remote add origin https://github.com/AnkIbrahim/moindzaza-mboini.git
git push -u origin main
```

### Avec Netlify

1. Connecter le repo GitHub
2. Build settings :
   - Build command: (laisser vide)
   - Publish directory: `/`
3. Deploy !

### Avec Vercel

```bash
npm i -g vercel
vercel
```

### Configuration DNS personnalisée

```dns
CNAME moindzaza.com → votre-domaine.netlify.app
```

---

## Bonnes pratiques

### 🎨 Avant d'ajouter du contenu

1. **Toujours passer par le design system** (couleurs, typo, spacing)
2. **Tester la responsivité** (mobile, tablette, desktop)
3. **Vérifier l'accessibilité** (contraste, labels, ARIA)
4. **Tester sans JavaScript** (progressive enhancement)
5. **Optimiser les images** (format WebP, compression)

### ♿ Accessibilité

✅ Utilisé :
- Sémantique HTML5 (nav, section, article)
- Balises ARIA (aria-label, aria-expanded)
- Couleurs avec bon contraste (WCAG AA)
- Focus visible sur les inputs
- Texte alt pour toutes les images

### 📊 Performance

✅ Optimisé :
- Google Fonts en display=swap
- Canvas au lieu d'images lourdes
- CSS minifié et organisé
- Pas de dépendances externes
- Load time < 2s sur connexion 3G

### 🔐 Sécurité

⚠️ À implémenter si besoin :
- HTTPS obligatoire en production
- Content Security Policy (CSP)
- Validation des formulaires côté serveur
- Rate limiting sur les endpoints

---

## Licence

**MIT License** — Libre d'utilisation, modification et distribution

```
Copyright (c) 2026 Moindzaza Mboini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## Ressources utiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Support et contribution

### Signaler un bug
Créer une issue GitHub avec :
- Description du problème
- Navigateur / OS
- Étapes pour reproduire
- Screenshots si applicable

### Proposer une amélioration
1. Fork le repo
2. Créer une branche (`git checkout -b feature/my-feature`)
3. Commit vos changements (`git commit -m 'feat: description'`)
4. Pousser (`git push origin feature/my-feature`)
5. Ouvrir une Pull Request

---

## Contact

**Village de Moindzaza Mboini**  
Ngazidja, République de l'Union des Comores

📧 Email: contact.moindzaza@gmail.com  
📱 Téléphone: À ajouter  
🌐 Site: https://moindzaza-mboini.com (TBD)

---

<div align="center">

**© 2026 Moindzaza Mboini · Site Vitrine Officiel**

*Fait avec ❤️ pour la communauté*

![Wave animation](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-blue?style=flat-square)

</div>
