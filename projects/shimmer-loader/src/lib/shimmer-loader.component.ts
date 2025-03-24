import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-shimmer-loader',
  imports: [CommonModule],
  template: `
   <div
  class="shimmer"
  [ngClass]="className"
  [ngStyle]="{
    width, height, borderRadius,
    background: 'linear-gradient(90deg, ' + baseColor + ' 25%, ' + highlightColor + ' 50%, ' + baseColor + ' 75%)'
  }"
></div>

  `,
  styleUrls: ['./shimmer-loader.component.css'],
})
export class ShimmerLoaderComponent {
  @Input() width: string = '100%';
  @Input() height: string = '20px';
  @Input() className: string | string[] = '';
  @Input() borderRadius: string = '4px';
  @Input() baseColor: string = '#f6f7f8';
  @Input() highlightColor: string = '#edeef1';
  @Input() animationDuration: string = '1.5s';
}
