import { Component, Input } from '@angular/core';

export type HTMLInputTypeAttribute = 'text' | 'email' | 'number' | 'tel';

@Component({
  selector: 'portfolio-input-icons',
  standalone: true,
  imports: [],
  templateUrl: './input-icons.component.html',
  styleUrls: ['./input-icons.component.scss'],
})
export class InputIconsComponent {
  @Input() placeholder = '';
  @Input() value = '';
  @Input() type: HTMLInputTypeAttribute = 'text';
  @Input() disabled = false;
}
