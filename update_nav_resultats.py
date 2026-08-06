from pathlib import Path

page_files = [Path('index.html')] + list(Path('pages').glob('*.html')) + list(Path('pages/histoires').glob('*.html')) + list(Path('pages/histoires/show').glob('*.html'))

for path in page_files:
    text = path.read_text(encoding='utf-8')
    orig = text
    if path.name == 'index.html':
        rel = 'pages/resultats.html'
    elif path.parent == Path('pages'):
        rel = 'resultats.html'
    elif path.parent == Path('pages/histoires'):
        rel = '../resultats.html'
    else:
        rel = '../../resultats.html'

    text = text.replace(
        '<div class="nav-item" role="none">\n      <a href="pages/plage.html" class="nav-link" role="menuitem">La Plage</a>\n    </div>\n',
        f'<div class="nav-item" role="none">\n      <a href="pages/plage.html" class="nav-link" role="menuitem">La Plage</a>\n    </div>\n    <div class="nav-item" role="none">\n      <a href="{rel}" class="nav-link" role="menuitem">Résultats des examens</a>\n    </div>\n'
    )
    text = text.replace(
        '<a href="pages/plage.html">La Plage</a>\n  <a href="pages/contact.html">Contact</a>',
        f'<a href="pages/plage.html">La Plage</a>\n  <a href="{rel}">Résultats des examens</a>\n  <a href="pages/contact.html">Contact</a>'
    )
    text = text.replace(
        '<a href="../plage.html">La Plage</a><a href="../contact.html">Contact</a>',
        f'<a href="../plage.html">La Plage</a><a href="{rel}">Résultats des examens</a><a href="../contact.html">Contact</a>'
    )
    text = text.replace(
        '<a href="../plage.html">La Plage</a>\n  <a href="../contact.html">Contact</a>',
        f'<a href="../plage.html">La Plage</a>\n  <a href="{rel}">Résultats des examens</a>\n  <a href="../contact.html">Contact</a>'
    )
    text = text.replace(
        '<a href="../../plage.html">La Plage</a>\n  <a href="../../contact.html">Contact</a>',
        f'<a href="../../plage.html">La Plage</a>\n  <a href="{rel}">Résultats des examens</a>\n  <a href="../../contact.html">Contact</a>'
    )
    if text != orig:
        path.write_text(text, encoding='utf-8')
        print('Updated', path)
