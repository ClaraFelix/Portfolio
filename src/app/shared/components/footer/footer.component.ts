import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
