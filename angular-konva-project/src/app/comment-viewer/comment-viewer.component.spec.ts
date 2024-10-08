import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentViewerComponent } from './comment-viewer.component';

describe('CommentViewerComponent', () => {
  let component: CommentViewerComponent;
  let fixture: ComponentFixture<CommentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
