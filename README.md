# Projeto de Anotação de Imagens com Angular e  <a href="https://konvajs.org/index.html">Konva.js</a>

Este projeto é uma aplicação web construída com Angular e Konva.js que permite ao usuário adicionar comentários em locais específicos de uma imagem, arrastá-los para qualquer posição desejada e salvar essas posições. Além disso, o projeto inclui uma interface de visualização que recebe essas configurações de um backend simulado e exibe os comentários nas posições corretas na imagem.

## Captura de tela

![Projeto de Imagens com Angular e Konva.js Example](https://github.com/rodrigoribeiro027/)

## Funcionalidades

- **Adicionar Comentários**: O usuário pode clicar na imagem, adicionar um comentário e arrastá-lo para a posição desejada.
- **Salvar Comentários**: Os comentários e suas posições são salvos no armazenamento local (localStorage) e podem ser enviados para um backend simulado.
- **Visualização dos Comentários**: Uma interface separada permite visualizar os comentários salvos, mantendo suas posições exatas na imagem.
- **Estilo Personalizado**: A imagem e os comentários possuem estilos personalizados, como bordas arredondadas, sombras e fontes estilizadas.

## Uso
Adicionar Comentários:

- Clique na imagem para adicionar um comentário.
- Arraste o comentário para o local desejado.
- Clique em "Confirmar" para salvar os comentários.

## Visualizar Comentários:

Os comentários salvos podem ser visualizados no componente CommentViewerComponent, que simula a recepção de dados de um backend.


## Tecnologias Utilizadas

- **Angular**: Framework JavaScript utilizado para a construção da interface web.
- **Konva.js**: Biblioteca utilizada para manipulação de gráficos em um canvas HTML5, permitindo a criação de formas, textos e imagens com interatividade.

## Estrutura do Projeto

O projeto está organizado em dois componentes principais:

1. **CommentCanvasComponent**: 
   - Permite que o usuário adicione e mova comentários em uma imagem.
   - Inclui botões de "Confirmar" e "Resetar" para salvar ou limpar os comentários.

2. **CommentViewerComponent**: 
   - Recebe os comentários e a URL da imagem de um backend simulado e renderiza esses comentários nas posições salvas.
   - Focado em exibir as anotações em uma interface de visualização.

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

