# Biblioteca UI

Biblioteca de componentes reutilizáveis desenvolvida com React, Vite e Tailwind CSS.

## Componentes

- Button: variantes primary, danger e secondary.
- Badge: variantes success, warning, danger e info.
- Input: campo com label, type, placeholder, value e onChange.
- Card: container reutilizável com título e children.
- Alert: variantes success, error e warning.

## Tecnologias

- React
- Vite
- Tailwind CSS

## Executar

npm install
npm run dev

## Reflexão

O Tailwind CSS facilita a estilização diretamente nos componentes React, agilizando o desenvolvimento e promovendo consistência visual através de classes utilitárias. Também facilita a criação de componentes reutilizáveis, pois os estilos podem ser combinados com props para gerar diferentes variantes.

Como desvantagem, o JSX pode ficar carregado com muitas classes, dificultando a leitura em componentes mais complexos. Além disso, é necessário conhecer as classes utilitárias do Tailwind.

O CSS tradicional permite separar a estilização da estrutura HTML e oferece liberdade para criar regras personalizadas, mas pode exigir mais arquivos, organização e manutenção. Portanto, o Tailwind é eficiente para desenvolver interfaces rapidamente e manter padrões de estilo, enquanto o CSS tradicional pode ser mais adequado quando se deseja uma separação mais explícita entre estrutura e aparência.
