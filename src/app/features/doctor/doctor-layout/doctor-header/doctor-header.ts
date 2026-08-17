import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-header',
  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './doctor-header.html',
  styleUrl: './doctor-header.css',
})
export class DoctorHeader {

  @Output() menuClicked = new EventEmitter<void>();

  profileOpen = false;

  constructor(private elementRef: ElementRef){}


  openMenu(): void {
    this.menuClicked.emit();
  }

  toggleProfile(): void {
    this.profileOpen = !this.profileOpen;
  }


   @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {

    const clickedInside = this.elementRef.nativeElement.contains(
      event.target
    );

    if (!clickedInside) {
      this.profileOpen = false;
    }
  }

  logout(): void {
    this.profileOpen = false;

    // Connect AuthService here
  }
}