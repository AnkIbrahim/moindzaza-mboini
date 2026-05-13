# 🌊 Moindzaza Mboini — Site Vitrine v1.0

> Site web vitrine officiel du village de Moindzaza Mboini, Ngazidja, Union des Comores.

---

## 📁 Structure des fichiers

```
moindzaza-mboini/
│
├── index.html          ← Page d'accueil
├── histoire.html       ← Histoire du village
├── comite.html         ← Comité Local
├── angelus.html        ← Angelus Club (football)
├── acm.html            ← ACM (éducation & culture)
├── twamaya.html        ← Twamaya No Urahafu (propreté)
├── plage.html          ← La Plage de Moindzaza Mboini
├── contact.html        ← Contact & FAQ
├── 404.html            ← Page d'erreur
│
├── shared.css          ← Design system commun (couleurs, typo, nav, footer)
├── shared.js           ← Scripts communs (canvas, navbar, révél, compteurs)
├── home.css            ← Styles spécifiques à l'accueil
├── home.js             ← Canvas héro & particules accueil
├── inner.css           ← Styles pages internes (grilles, timeline, cartes)
├── inner.js            ← Interactions pages internes (FAQ, formulaire, barres)
└── components.css      ← Composants UI réutilisables
```

---

## 🎨 Design System

| Variable          | Valeur       | Usage                        |
|-------------------|--------------|------------------------------|
| `--abyss`         | `#020f1a`    | Fond très sombre             |
| `--deep`          | `#041c2e`    | Fond sombre                  |
| `--ocean`         | `#073b5c`    | Bleu océan profond           |
| `--current`       | `#0b6b8a`    | Bleu courant                 |
| `--lagoon`        | `#13a8c4`    | Bleu lagon (accent principal)|
| `--aqua`          | `#2dd4e8`    | Bleu aqua vif                |
| `--foam`          | `#b8eaf2`    | Bleu mousse clair            |
| `--gold`          | `#d4a24c`    | Or sable                     |
| `--sand`          | `#e8c89a`    | Sable clair                  |
| `--cream`         | `#fdf8f0`    | Crème (fond pages)           |
| `--palm`          | `#3a8f5c`    | Vert palmier (Twamaya)       |
| `--coral`         | `#e06050`    | Corail (Angelus Club)        |

**Polices :**
- `Playfair Display` — Titres et affichage
- `DM Sans` — Corps de texte et UI
- `DM Serif Display` — Italiques décoratifs

---

## 📄 Pages du site

### 🏠 Accueil (`index.html`)
- Hero animé avec canvas océan
- Barre de statistiques avec compteurs
- Présentation du village
- Showcase des 4 associations
- Teaser de la plage
- Actualités récentes
- CTA de contact

### 📜 Histoire (`histoire.html`)
- Présentation historique
- Timeline interactive (1890 → aujourd'hui)
- Section Géographie & Culture

### 🏛️ Comité Local (`comite.html`)
- Présentation du comité
- 6 missions détaillées
- Bureau (Président + équipe)
- Projets récents (réalisés / en cours / planifiés)

### ⚽ Angelus Club (`angelus.html`)
- Présentation du club
- 3 catégories de formation
- Palmarès complet
- Résultats récents & agenda des matchs

### 📚 ACM (`acm.html`)
- Présentation de l'association
- **Journée de la Culture** (programme complet heure par heure)
- Cours de vacances (détails complets)
- Cours de soutien scolaire (détails complets)
- Équipe de l'ACM

### 🌿 Twamaya No Urahafu (`twamaya.html`)
- Présentation & signification du nom
- 6 types d'actions concrètes
- Barres d'impact animées
- Agenda bénévolat

### 🏖️ La Plage (`plage.html`)
- Présentation de la plage
- Galerie photos (illustrée)
- 6 caractéristiques uniques
- Activités & loisirs
- Tableau des marées
- Section protection environnementale

### ✉️ Contact (`contact.html`)
- Coordonnées complètes
- Liens vers chaque association
- Formulaire de contact complet (13 sujets)
- FAQ avec accordéon (5 questions)

---

## ✨ Fonctionnalités techniques

| Fonctionnalité              | Détail                                        |
|-----------------------------|-----------------------------------------------|
| Canvas océan animé          | Arrière-plan en waves sur toutes les pages    |
| Loader par page             | Animation de chargement personnalisée         |
| Barre de progression        | Scroll progress en haut de page               |
| Navbar sticky               | Transparente → opaque au scroll               |
| Menu dropdown               | Sous-menu Associations                        |
| Menu mobile hamburger       | Navigation responsive                         |
| Scroll reveal               | Animations d'entrée au scroll                 |
| Compteurs animés            | Chiffres qui comptent à l'entrée en vue       |
| Tilt 3D                     | Effet perspective sur les cartes              |
| Ripple effect               | Ondulation sur les boutons                    |
| FAQ accordéon               | Questions/réponses sur contact.html           |
| Barres d'impact             | Twamaya — barres animées                      |
| Formulaire simulé           | Message de succès après soumission            |
| Bouton back-to-top          | Retour en haut de page                        |
| Cookie banner               | Bandeau RGPD                                  |
| Page 404 personnalisée      | Design océan cohérent                         |
| Responsive design           | Mobile, tablette, desktop                     |
| Prefers-reduced-motion      | Respect des préférences d'accessibilité       |

---

## 🚀 Comment utiliser

1. **Télécharger** tous les fichiers dans le même dossier
2. **Ouvrir** `index.html` dans un navigateur moderne
3. **Navigation** : tous les liens inter-pages fonctionnent localement

> ⚠️ Les polices Google Fonts nécessitent une connexion internet.
> Pour une utilisation hors-ligne, télécharger les polices et les référencer localement.

---

## 📸 Pour ajouter de vraies photos

Remplacer les éléments visuels emoji/gradient par de vraies images :

```html
<!-- Remplacer -->
<div class="bf-visual" style="background:linear-gradient(...)">🌊</div>

<!-- Par -->
<div class="bf-visual" style="background:url('images/plage-01.jpg') center/cover"></div>
```

---

## 🌐 Déploiement

Le site est entièrement statique (HTML/CSS/JS) — compatible avec :
- **GitHub Pages** (gratuit)
- **Netlify** (gratuit)
- **Vercel** (gratuit)
- N'importe quel hébergeur web

---

## 📞 Contact projet

Village de Moindzaza Mboini · Ngazidja · Union des Comores  
contact.moindzaza@gmail.com

---

*© 2026 Moindzaza Mboini · Site vitrine Version 1.0*
