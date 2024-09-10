import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCanvasComponent } from './comment-canvas.component';

describe('CommentCanvasComponent', () => {
  let component: CommentCanvasComponent;
  let fixture: ComponentFixture<CommentCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
