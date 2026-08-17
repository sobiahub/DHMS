import {
  Component,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorHeader } from './doctor-header/doctor-header';
import { DoctorSidebar } from './doctor-sidebar/doctor-sidebar';

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [RouterOutlet, DoctorHeader, DoctorSidebar],
  templateUrl: './doctor-layout.html',
  styleUrl: './doctor-layout.css',
})
export class DoctorLayout {
  
  sidebarOpen = signal(false);


  toggleSidebar(): void {
    this.sidebarOpen.update(
      (open) => !open
    );
  }


  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
