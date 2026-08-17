import { Component } from '@angular/core';

interface NotificationItem {
  id: number;
  title: string;
  message: string;
  time: string;
  category: 'Appointment' | 'Medical' | 'System';
  icon: string;
  unread: boolean;
}

@Component({
  selector: 'app-patient-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class PatientNotifications {

  activeFilter = 'All';

  readonly filters = [
    'All',
    'Unread',
    'Appointments',
    'Medical',
    'System',
  ];

  notifications: NotificationItem[] = [

    {
      id: 1,
      title: 'Appointment Confirmed',
      message:
        'Your appointment with Dr. Ahmed Khan has been confirmed for August 20, 2026 at 10:30 AM.',
      time: '10 minutes ago',
      category: 'Appointment',
      icon: 'bi-calendar2-check',
      unread: true,
    },

    {
      id: 2,
      title: 'Appointment Reminder',
      message:
        'You have an upcoming appointment tomorrow at 10:30 AM. Please arrive a few minutes early.',
      time: '2 hours ago',
      category: 'Appointment',
      icon: 'bi-alarm',
      unread: true,
    },

    {
      id: 3,
      title: 'Medical Record Updated',
      message:
        'A new medical record from your recent consultation is now available.',
      time: 'Yesterday',
      category: 'Medical',
      icon: 'bi-file-medical',
      unread: true,
    },

    {
      id: 4,
      title: 'Lab Report Available',
      message:
        'Your latest laboratory report is now available in your Medical Records.',
      time: 'Yesterday',
      category: 'Medical',
      icon: 'bi-clipboard2-pulse',
      unread: false,
    },

    {
      id: 5,
      title: 'Profile Information',
      message:
        'Please make sure your contact and emergency information is up to date.',
      time: '2 days ago',
      category: 'System',
      icon: 'bi-person-check',
      unread: false,
    },

    {
      id: 6,
      title: 'Welcome to MediCare',
      message:
        'Your patient account has been successfully created. You can now manage your appointments and medical records.',
      time: '5 days ago',
      category: 'System',
      icon: 'bi-heart-pulse',
      unread: false,
    },

  ];


  get unreadCount(): number {
    return this.notifications.filter(
      notification => notification.unread
    ).length;
  }


  get filteredNotifications(): NotificationItem[] {

    if (this.activeFilter === 'All') {
      return this.notifications;
    }

    if (this.activeFilter === 'Unread') {
      return this.notifications.filter(
        notification => notification.unread
      );
    }

    return this.notifications.filter(
      notification => notification.category === this.activeFilter
    );
  }


  setFilter(filter: string): void {
    this.activeFilter = filter;
  }


  markAsRead(notification: NotificationItem): void {
    notification.unread = false;
  }


  markAllAsRead(): void {
    this.notifications.forEach(
      notification => notification.unread = false
    );
  }


  deleteNotification(notification: NotificationItem): void {
    this.notifications = this.notifications.filter(
      item => item.id !== notification.id
    );
  }


  clearAll(): void {
    this.notifications = [];
  }

}