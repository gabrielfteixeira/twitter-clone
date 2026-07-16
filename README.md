# 🐦 Twitter Clone (X)

Um clone simplificado da interface do Twitter (X) desenvolvido para fins de estudo e portfólio. O projeto foca em componentização, design responsivo e fidelidade visual à plataforma original.

---

<img width="918" height="493" alt="ezgif-13719ce81dddae67" src="https://github.com/user-attachments/assets/92d219d4-30b7-4f69-a238-7ba7611c1580" />




## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando o ecossistema moderno do ecossistema React:

*   **React** (com Fast Refresh via Vite)
*   **JavaScript (ES6+)**
*   **Tailwind CSS** (para estilização rápida e responsiva)
*   **Vite** (como build tool ultra-rápida)
*   **ESLint** (para padronização e qualidade de código)

---

## 🛠️ Arquitetura do Projeto

A estrutura de arquivos do projeto segue uma organização limpa e modular:

```text
src/
├── assets/             # Imagens, ícones e recursos estáticos
├── components/         # Componentes reutilizáveis da interface
│   ├── FollowItem/     # Sugestões de "Quem seguir"
│   ├── Sidebar/        # Barra de navegação lateral (Menu)
│   ├── TrendItem/      # Itens da seção "O que está acontecendo" (Trends)
│   ├── Tweet/          # Card de exibição de um tweet individual
│   └── TwitterForm/    # Formulário de criação de novos tweets
├── utils/              # Funções auxiliares (ex: generateImage.js)
├── App.jsx             # Componente principal que orquestra a aplicação
├── index.css           # Configurações globais do Tailwind
└── main.jsx            # Ponto de entrada do React
```
```
git clone [https://github.com/gabrielfteixeira/twitter-clone.git](https://github.com/gabrielfteixeira/twitter-clone.git)
```
```
cd twitter
```
```
npm install
```

```
npm run dev
```
