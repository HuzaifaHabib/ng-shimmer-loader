import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerLoaderComponent } from './shimmer-loader.component';

describe('ShimmerLoaderComponent', () => {
  let component: ShimmerLoaderComponent;
  let fixture: ComponentFixture<ShimmerLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShimmerLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
