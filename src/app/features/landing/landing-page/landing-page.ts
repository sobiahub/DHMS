import { Component } from '@angular/core';
import { Hero } from '../sections/hero/hero';
import { HowItWorks } from '../sections/how-it-works/how-it-works';
import { Testimonials } from '../sections/testimonials/testimonials';
import { Cta } from '../sections/cta/cta';
import { Contact } from '../sections/contact/contact';
import { FeaturedServices } from '../sections/featured-services/featured-services';
import { Navbar } from '../sections/navbar/navbar';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    FeaturedServices,
    HowItWorks,
    Testimonials,
    Cta,
    Contact,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
   
}
