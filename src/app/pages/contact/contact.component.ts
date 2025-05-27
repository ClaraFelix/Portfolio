import { Component } from '@angular/core';
import { InputIconsComponent } from '../../shared/components/input-icons/input-icons.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'portfolio-contact',
  standalone: true,
  imports: [InputIconsComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  userEmail: string = '';
  userMessage: string = '';

  sendEmail() {
    const email = 'clara.patriciafelix@hotmail.com';
    const subject = encodeURIComponent('Contato via Portfólio');
    const body = encodeURIComponent(`${this.userEmail}\n\n${this.userMessage}`);
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  }
}
