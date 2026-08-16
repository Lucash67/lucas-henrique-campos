# Lucas Henrique Campos — portfólio

Portfólio pessoal. Produto, tecnologia e operação.

**No ar:** https://lucash67.github.io/lucas-henrique-campos/

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Zero dependências de runtime além do React — animação é CSS + IntersectionObserver

## Rodar local

```bash
npm install
npm run dev
```

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build para host em raiz de domínio |
| `npm run build:pages` | Build com base `/lucas-henrique-campos/` para GitHub Pages |
| `npm run preview` | Serve o build local |
| `npm run lint` | oxlint |

## Conteúdo

Todo o texto, projetos, timeline e stack vivem em `src/data/content.ts`.
Para adicionar um projeto, inclua um item em `projects` — cada um declara um
`preview` (`dashboard`, `ledger`, `mobile` ou `landing`) que escolhe a
composição visual renderizada em `src/components/Preview.tsx`. Nenhuma imagem
é necessária.

## Deploy

O build é publicado na branch `gh-pages`:

```bash
npm run build:pages
# publica o conteúdo de dist/ na branch gh-pages
```
