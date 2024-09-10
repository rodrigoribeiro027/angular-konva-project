import { Component } from '@angular/core';
import { CommentCanvasComponent } from './comment-canvas/comment-canvas.component';
import { CommentViewerComponent } from './comment-viewer/comment-viewer.component';

@Component({
  selector: 'app-root',
  template: `
  <app-comment-canvas></app-comment-canvas>
  <app-comment-viewer
    [comments]="commentsFromBackend"
    [imageUrl]="imageUrlFromBackend"
  ></app-comment-viewer>
  
`,  standalone: true,
  imports: [CommentCanvasComponent, CommentViewerComponent],
})
export class AppComponent {
  commentsFromBackend = [
    { x: 100, y: 150, text: 'Primeiro comentário' },
    { x: 200, y: 250, text: 'Segundo comentário' },
    { x: 300, y: 350, text: 'Terceiro comentário' },
  ];

  imageUrlFromBackend = '../../assets/win.png'; 
}