import {
  Component,
  signal,
} from '@angular/core';

import { AdminSidebar } from './admin-sidebar/admin-sidebar';
import { AdminHeader } from './admin-header/admin-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminSidebar,
    AdminHeader,
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {

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