import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export type HTMLInputTypeAttribute = 'text' | 'email' | 'number' | 'tel';

@Component({
  selector: 'portfolio-input-icons',
  standalone: true,
  templateUrl: './input-icons.component.html',
  styleUrls: ['./input-icons.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputIconsComponent),
      multi: true,
    },
  ],
})
export class InputIconsComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() type: HTMLInputTypeAttribute = 'text';
  @Input() disabled = false;

  value: string = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
