# modelviewer

## Desenvolvimento local

```sh
npm ci --legacy-peer-deps
npm run dev
```

Execute `npm test` para validar as regras dos dados dos projetos e `npm run build`
para gerar a versão de produção.

## Demonstração de submissão

A área de submissão aceita um ficheiro IFC para demonstrar o fluxo, mas não o
envia nem converte. Os dados submetidos ficam em `sessionStorage` no navegador
atual e desaparecem quando a sessão do separador termina. Para ver o projeto no
mapa, pode associar-lhe um dos modelos GLB de demonstração.

As rotas da aplicação usam hash para funcionarem diretamente no GitHub Pages:
`#/` (início), `#/explorar`, `#/submeter` e `#/ar/<id>-<modo>`.

## Publicação

Pull requests deste repositório dirigidos a `main` publicam uma pré-visualização
partilhada em <https://mrfcoelho.github.io/modelviewer/preview/>. Esta página é
atualizada quando um pull request é aberto, reaberto ou recebe novos commits.
Se houver vários pull requests abertos, é apresentado o que foi publicado mais
recentemente.

A aplicação principal está em <https://mrfcoelho.github.io/modelviewer/> e é
atualizada quando há alterações na branch `main`.
