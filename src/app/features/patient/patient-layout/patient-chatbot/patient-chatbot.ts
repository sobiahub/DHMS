import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface ChatMessage {
  id: number;
  sender: 'bot' | 'patient';
  message: string;
  time: string;
}

interface QuickAction {
  label: string;
  icon: string;
  message: string;
}

@Component({
  selector: 'app-patient-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-chatbot.html',
  styleUrl: './patient-chatbot.css',
})
export class PatientChatbot {

  isOpen = false;
  isTyping = false;
  messageText = '';

  messages: ChatMessage[] = [
    {
      id: 1,
      sender: 'bot',
      message:
        "Hello! 👋 I'm your MediCare Assistant. How can I help you today?",
      time: this.getTime()
    }
  ];

  quickActions: QuickAction[] = [
    {
      label: 'Book Appointment',
      icon: 'calendar',
      message: 'I want to book an appointment.'
    },
    {
      label: 'My Appointments',
      icon: 'clipboard',
      message: 'Show me my appointments.'
    },
    {
      label: 'Find a Doctor',
      icon: 'doctor',
      message: 'Help me find a doctor.'
    },
    {
      label: 'Departments',
      icon: 'building',
      message: 'Show me the departments.'
    },
    {
      label: 'Prescriptions',
      icon: 'pill',
      message: 'Show me my prescriptions.'
    },
    {
      label: 'Contact Support',
      icon: 'support',
      message: 'I need to contact support.'
    }
  ];

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(message?: string): void {
    const text = (message ?? this.messageText).trim();

    if (!text || this.isTyping) {
      return;
    }

    this.messages.push({
      id: Date.now(),
      sender: 'patient',
      message: text,
      time: this.getTime()
    });

    this.messageText = '';

    this.showBotResponse(text);
  }

  private showBotResponse(userMessage: string): void {
    this.isTyping = true;

    setTimeout(() => {
      this.isTyping = false;

      this.messages.push({
        id: Date.now(),
        sender: 'bot',
        message: this.generateResponse(userMessage),
        time: this.getTime()
      });
    }, 900);
  }

  private generateResponse(message: string): string {

    const query = message.toLowerCase();

    if (
      query.includes('book') ||
      query.includes('appointment')
    ) {
      return 'Sure! I can help you book an appointment. You can choose a doctor and available time from the Appointments section.';
    }

    if (
      query.includes('my appointment') ||
      query.includes('appointments')
    ) {
      return 'You can view your upcoming and previous appointments from the My Appointments section.';
    }

    if (
      query.includes('doctor') ||
      query.includes('specialist')
    ) {
      return 'I can help you find a doctor. You can browse doctors by department, specialization, and availability.';
    }

    if (
      query.includes('department') ||
      query.includes('departments')
    ) {
      return 'You can explore all available departments from the Departments section of your patient portal.';
    }

    if (
      query.includes('prescription') ||
      query.includes('medicine')
    ) {
      return 'Your prescriptions can be viewed from the Prescriptions section of your patient dashboard.';
    }

    if (
      query.includes('support') ||
      query.includes('help')
    ) {
      return 'Of course! Our support team can help you with portal-related questions and appointment assistance.';
    }

    if (
      query.includes('hello') ||
      query.includes('hi') ||
      query.includes('hey')
    ) {
      return 'Hello! 👋 How can I assist you with your MediCare patient portal?';
    }

    return "I'm here to help with appointments, doctors, departments, prescriptions, and navigating your patient portal. What would you like to do?";
  }

  private getTime(): string {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

}
