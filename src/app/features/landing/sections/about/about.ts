import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
