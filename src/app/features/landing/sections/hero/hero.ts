import {
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  signal
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
 private platformId = inject(PLATFORM_ID);

  currentSlide = signal(0);

  heroImages = [
    '/assets/images/landing-page/hero-1.jpg',
    '/assets/images/landing-page/hero-2.jpg',
    '/assets/images/landing-page/hero-3.jpg',
    '/assets/images/landing-page/hero-4.jpg'
  ];

  private slideInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlider();
    }
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  private startSlider(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  private stopSlider(): void {
    if (this.slideInterval !== null) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  nextSlide(): void {
    this.currentSlide.update(current =>
      (current + 1) % this.heroImages.length
    );
  }

  previousSlide(): void {
    this.currentSlide.update(current =>
      current === 0
        ? this.heroImages.length - 1
        : current - 1
    );
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);

    if (isPlatformBrowser(this.platformId)) {
      this.stopSlider();
      this.startSlider();
    }
  }

}
