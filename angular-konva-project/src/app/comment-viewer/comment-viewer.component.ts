import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-comment-viewer',
  templateUrl: './comment-viewer.component.html',
  styleUrls: ['./comment-viewer.component.css'],
  standalone: true
})
export class CommentViewerComponent implements OnInit {
  @ViewChild('canvasContainer') canvasContainer!: ElementRef<HTMLDivElement>;
  @Input() comments: any[] = []; 
  @Input() imageUrl: string = ''; 

  private stage!: Konva.Stage;
  private layer!: Konva.Layer;

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

      this.renderComments();
    };
    imageObj.src = this.imageUrl; 
  }

  private renderComments() {
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
        draggable: false, 
        stroke: '#000',
        strokeWidth: 2,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowOpacity: 0.5,
        cornerRadius: 10
      });
      this.layer.add(commentText);
    });
    this.layer.draw();
    console.log('Comentários renderizados:', this.comments);
  }
}
