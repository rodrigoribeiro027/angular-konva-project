import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-comment-canvas',
  templateUrl: './comment-canvas.component.html',
  styleUrls: ['./comment-canvas.component.css'],
  standalone: true
})
export class CommentCanvasComponent implements OnInit {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef<HTMLDivElement>;

  private stage!: Konva.Stage;
  private layer!: Konva.Layer;
  private comments: any[] = [];

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initializeCanvas();
  }

  private initializeCanvas() {
    const width = this.canvasContainer.nativeElement.offsetWidth;
    const height = 500; 

    this.stage = new Konva.Stage({
      container: this.canvasContainer.nativeElement,
      width: width,
      height: height,
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    const imageObj = new Image();
    imageObj.onload = () => {
      const konvaImage = new Konva.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: width,
        height: height,
      });
      this.layer.add(konvaImage);
      this.layer.draw();

      console.log('Imagem carregada e desenhada no canvas.');

      this.loadComments();
    };
    imageObj.src = '../../assets/win.png'; 

    this.stage.on('click', (e: any) => {
      this.addComment(e.evt.layerX, e.evt.layerY);
    });
  }

  private addComment(x: number, y: number) {
    const commentText = prompt('Digite seu comentário:');
    if (commentText) {
      const comment = new Konva.Text({
        x: x,
        y: y,
        text: commentText,
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#fff',
        padding: 10,
        align: 'center',
        draggable: true,
        stroke: '#000',
        strokeWidth: 2,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowOpacity: 0.5,
        cornerRadius: 10
      });

      comment.on('dragend', () => {
        const index = this.comments.findIndex(c => c.text === commentText);
        if (index !== -1) {
          this.comments[index].x = comment.x();
          this.comments[index].y = comment.y();
          console.log(`Comentário atualizado:`, this.comments[index]);
        }
      });

      this.comments.push({
        x: x,
        y: y,
        text: commentText,
      });

      this.layer.add(comment);
      this.layer.draw();

      console.log('Comentário adicionado:', { x, y, text: commentText });
    } else {
      console.log('Nenhum comentário foi adicionado.');
    }
  }

  private loadComments() {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      this.comments = JSON.parse(savedComments);
      console.log('Comentários carregados:', this.comments);
      this.comments.forEach(comment => {
        const commentText = new Konva.Text({
          x: comment.x,
          y: comment.y,
          text: comment.text,
          fontSize: 18,
          fontFamily: 'Calibri',
          fill: '#fff',
          padding: 10,
          align: 'center',
          draggable: true,
          stroke: '#000',
          strokeWidth: 2,
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
          shadowOpacity: 0.5,
          cornerRadius: 10
        });

        commentText.on('dragend', () => {
          const index = this.comments.findIndex(c => c.text === comment.text);
          if (index !== -1) {
            this.comments[index].x = commentText.x();
            this.comments[index].y = commentText.y();
            console.log(`Comentário movido para:`, this.comments[index]);
          }
        });

        this.layer.add(commentText);
      });
      this.layer.draw();
    } else {
      console.log('Nenhum comentário salvo encontrado.');
    }
  }

  saveComments() {
    if (this.comments.length === 0) {
      alert('Nenhum comentário para salvar.');
      return;
    }
    localStorage.setItem('comments', JSON.stringify(this.comments));
    console.log('Comentários salvos localmente:', this.comments);

    this.sendCommentsToBackend(this.comments);
  }

  private sendCommentsToBackend(comments: any[]) {
    console.log('Enviando comentários para o backend...', comments);
    /*
    this.http.post('URL_DO_SEU_BACKEND', comments)
      .subscribe(response => {
        console.log('Resposta do backend:', response);
      }, error => {
        console.error('Erro ao enviar os comentários para o backend:', error);
      });
    */
  }

  resetComments() {
    this.comments = [];
    this.layer.destroyChildren();
    this.initializeCanvas();
    localStorage.removeItem('comments');
    console.log('Comentários resetados.');
  }
}
