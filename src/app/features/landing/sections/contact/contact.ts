import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    FormsModule,
    RouterLink
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitForm(): void {
    console.log('Contact form submitted:', this.form);

    // Connect this method to your Django API later.
  }
}
