  import {
  Component,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientHeader } from './patient-header/patient-header';
import { PatientSidebar } from './patient-sidebar/patient-sidebar';
import { PatientChatbot } from './patient-chatbot/patient-chatbot';


@Component({
  selector: 'app-patient-layout',
  standalone: true,
  imports: [RouterOutlet, PatientHeader, PatientSidebar, PatientChatbot],
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
