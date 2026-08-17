import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './terms-of-service.html',
  styleUrl: './terms-of-service.css'
})
export class TermsOfService {
  currentYear = new Date().getFullYear();
}