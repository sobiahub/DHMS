  import {
  Component,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientHeader } from './patient-header/patient-header';
import { PatientSidebar } from './patient-sidebar/patient-sidebar';


@Component({
  selector: 'app-patient-layout',
  standalone: true,
  imports: [RouterOutlet, PatientHeader, PatientSidebar],
  templateUrl: './patient-layout.html',
  styleUrl: './patient-layout.css',
})
export class PatientLayout {
  
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
