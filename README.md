# Projeto de Anotação de Imagens com Angular e  <a href="https://konvajs.org/index.html">Konva.js</a>

Este projeto é uma aplicação web construída com Angular e Konva.js que permite ao usuário adicionar comentários em locais específicos de uma imagem, arrastá-los para qualquer posição desejada e salvar essas posições. Além disso, o projeto inclui uma interface de visualização que recebe essas configurações de um backend simulado e exibe os comentários nas posições corretas na imagem.

## 🌟 Funcionalidades Principais

- **Interatividade Avançada**: Adicione comentários em qualquer ponto da imagem, arraste-os com facilidade e veja as anotações sendo posicionadas exatamente onde você precisa.
- **Persistência de Dados**: Os comentários e suas posições são armazenados localmente via `localStorage` e podem ser enviados para um backend simulado, garantindo que suas anotações sejam sempre recuperáveis.
- **Visualização Precisa**: Uma interface de visualização permite que os comentários salvos sejam apresentados com precisão, simulando um fluxo de dados real de backend.

## 🎨 Captura de Tela

![Exemplo do Projeto de Anotações com Angular e Konva.js](https://github.com/rodrigoribeiro027/angular-konva-project/blob/main/angular-konva-project/src/assets/image.png)

## 🛠️ Tecnologias Utilizadas

- **Angular**: Framework robusto para a construção de interfaces web dinâmicas e responsivas.
- **Konva.js**: Biblioteca poderosa para manipulação de gráficos em `canvas` HTML5, facilitando a criação de formas, textos e interatividade avançada.

## 🗂️ Estrutura do Projeto

O projeto é organizado em dois componentes principais:

1. **CommentCanvasComponent**: 
   - Permite que o usuário adicione e mova comentários em uma imagem.
   - Inclui botões de "Confirmar" e "Resetar" para salvar ou limpar os comentários.

2. **CommentViewerComponent**: 
   - Simula a recepção de dados de um backend, renderizando os comentários salvos na imagem com precisão.
   - Focado na exibição clara e precisa das anotações em uma interface dedicada.

## 🚀 Como Usar

### Adicionar Comentários:

1. Clique na imagem para inserir um comentário.
2. Arraste o comentário para a posição desejada.
3. Clique em "Confirmar" para salvar suas anotações.

### Visualizar Comentários:

Os comentários salvos são exibidos no **CommentViewerComponent**, que simula a integração com um backend, proporcionando uma experiência realista de visualização.

## Instalação

**Clone o repositório:**

   ```bash
   git clone https://github.com/rodrigoribeiro027/angular-konva-project.git
```

**Instale as dependências:**

**Navegue até o diretório do projeto e execute:**
  ```bash
    npm install
  ```
**Execute a aplicação:**

```bash
    ng serve
```

## Acesse a aplicação no navegador em http://localhost:4200.

