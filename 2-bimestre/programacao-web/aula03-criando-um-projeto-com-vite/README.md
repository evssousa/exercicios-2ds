# 📘 AULA 43: CONHECENDO E CRIANDO UM PROJETO REACT COM VITE

## 🎯 Objetivos da Aula

- Entender o que é o **Vite** e por que ele é uma ferramenta poderosa para o desenvolvimento de aplicações web.
- Aprender a instalar o Vite e configurar um projeto React.
- Explorar a estrutura de um projeto React criado com o Vite.

## ✅ **O que é o Vite?**

O **Vite** é um bundler e servidor de desenvolvimento moderno que oferece uma alternativa rápida ao tradicional **Webpack**. Desenvolvido por **Evan You** (o criador do Vue.js), o Vite tem como principais características:

- **Velocidade**: O Vite oferece uma experiência de desenvolvimento super-rápida, devido ao seu uso do **esbuild** (um bundler escrito em Go), que compila o código muito mais rapidamente do que o Webpack.
- **Hot Module Replacement (HMR)**: Atualização em tempo real do código no navegador durante o desenvolvimento, sem perder o estado da aplicação.
- **Suporte a ESModules**: O Vite usa nativamente o **ESModule**, o que melhora a performance de builds, especialmente em grandes projetos.

Vantagens:

- Inicialização muito mais rápida em comparação com o Webpack.
- Suporte integrado para **React**, **Vue**, **TypeScript**, **JSX** e muito mais.
- Desenvolvimento eficiente com carregamento modular e hot reload instantâneo.

## ✅ **Como instalar o Vite**

Para criar um projeto com Vite, você precisa ter o **Node.js** instalado. Caso ainda não tenha, instale a versão mais recente do [Node.js](https://nodejs.org/).

**Passo a passo para criar um projeto React com o Vite:**

1. **Criando o Projeto com Vite**:
    - Abra o terminal (linha de comando).
    - Execute o comando abaixo para criar um novo projeto com o Vite usando a template do React:
    
    ```bash
    npm create vite@latest
    
    ```
    Se você utilizar o . no final do comando, a instalação acontecerá na raíz do projeto!
    
2. **Instalando as dependências**:
Após a criação do projeto, entre no diretório do projeto e instale as dependências:
    
    ```bash
    npm install
    
    ```
    
3. **Iniciando o servidor de desenvolvimento**:
Agora, inicie o servidor de desenvolvimento do Vite com o comando:
    
    ```bash
    npm run dev
    
    ```
    
    O Vite irá iniciar o servidor e você verá no terminal algo como:
    
    ```bash
    VITE v3.x.x  ready in 500 ms
    
    ```
    
    Abra seu navegador e acesse [**http://localhost:5173**](http://localhost:5173/) para ver sua aplicação React rodando!
    

## ✅ **Estrutura do Projeto Criado com Vite**

Ao criar o projeto com Vite, ele vai gerar uma estrutura de diretórios semelhante a essa:

```
nome-do-projeto/
├── node_modules/           # Dependências do projeto
├── public/                 # Arquivos estáticos
│   └── index.html          # Arquivo HTML de entrada
├── src/                    # Código-fonte da aplicação
│   ├── assets/             # Imagens e outros arquivos estáticos
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Ponto de entrada do React
├── index.html              # Arquivo HTML
├── package.json            # Configurações do projeto
└── vite.config.js          # Configurações do Vite

```

- **`public/index.html`**: O arquivo HTML principal, onde o React será injetado.
- **`src/main.jsx`**: O ponto de entrada do React, onde a aplicação React é montada no DOM.
- **`src/App.jsx`**: O componente principal da sua aplicação.
- **`vite.config.js`**: Arquivo de configuração do Vite, onde você pode customizar as opções de build, plugins, entre outros.

## ✅ **Trabalhando com React no Vite**

- **`main.jsx`**: Este arquivo serve como o ponto de entrada da sua aplicação React. Ele contém o código que renderiza o componente principal no DOM.
    
    **Exemplo de `main.jsx`:**
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    ```
    
- **`App.jsx`**: Este arquivo contém o componente principal da aplicação. Aqui você pode começar a adicionar os componentes e funcionalidades da sua aplicação.
    
    **Exemplo de `App.jsx`:**
    
    ```jsx
    import React from 'react';
    
    function App() {
      return (
        <div>
          <h1>Bem-vindo ao React com Vite!</h1>
        </div>
      );
    }
    
    export default App;
    
    ```
    

## ✅ **Vantagens do Vite no Desenvolvimento React**

- **Desenvolvimento rápido**: O Vite permite um **start rápido** e uma recarga mais eficiente durante o desenvolvimento, o que reduz o tempo de espera e melhora a produtividade.
- **Hot Module Replacement (HMR)**: O HMR do Vite garante que mudanças feitas no código sejam refletidas no navegador sem a necessidade de recarregar a página, mantendo o estado da aplicação intacto.
- **Build rápido**: O Vite usa o **esbuild** para realizar o bundling e a minificação, o que resulta em um build muito mais rápido do que outras ferramentas tradicionais, como o Webpack.
- **Configuração simplificada**: O Vite exige muito menos configuração do que outras ferramentas, facilitando a inicialização e o desenvolvimento.

## ✅ **Testando a Configuração**

Para verificar se o seu projeto está funcionando corretamente, basta abrir o navegador e acessar [**http://localhost:5173**](http://localhost:5173/). Se tudo estiver certo, você verá a mensagem "Bem-vindo ao React com Vite!" sendo exibida.

Fim da aula!

_

# 📝 Atividade Rápida

## 🎯 Criando um projeto com vite

1. Crie um novo projeto usando o Vite com React, como explicado acima.
2. Nome do projeto deve ser "react" (obs: NÃO utilize o . no final do comando!).
3. Vá até a pasta `extras`, copie e cole no seu projeto os arquivos que contém lá:
    - pasta `test` cole dentro da pasta `src`;
    - o arquivo `setupTests.js` cole também dentro da pasta `src`;
    - arquivos `package.json` e `vite.config.js` devem substituir pelo os que vem no projeto;
4. No arquivo `App.jsx`, altere o conteúdo do `<h1>` para "Meu Primeiro Projeto React com Vite".