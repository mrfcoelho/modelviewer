# modelviewer

## Desenvolvimento local

```sh
npm ci --legacy-peer-deps
npm run dev
```

Execute `npm test` para validar as regras dos dados dos projetos e `npm run build`
para gerar a versão de produção.

## Submissão e processamento IFC

A área de submissão processa os ficheiros IFC localmente com IFClite e converte
a geometria para GLB no navegador. O projeto, o modelo convertido e o IFC
original ficam guardados em IndexedDB neste navegador; não são enviados para um
backend nem sincronizados com outros dispositivos. O mapa continua a carregar
tiles do OpenStreetMap. Os modelos pré-carregados continuam a ser servidos a
partir de `public/models/`.

No visualizador, tocar num elemento de um modelo convertido mostra os nomes
originais dos atributos, conjuntos de propriedades e quantidades IFC. Geometria
da biblioteca de tipos (`IfcTypeProduct`) não é incluída no GLB. A primeira
consulta após recarregar a página volta a analisar o IFC original e pode demorar
alguns instantes. Apagar os dados do site no navegador também remove os projetos
locais. No Android, o Scene Viewer não consegue abrir modelos mantidos numa URL
`blob:`; para esses modelos, use WebXR (ou Quick Look em dispositivos
compatíveis).

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
