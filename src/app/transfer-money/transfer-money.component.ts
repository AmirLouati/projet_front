import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})

export class TransferMoneyComponent {
confirmTransfer() {
throw new Error('Method not implemented.');
}
transferForm: any;
TRANSFER() {
throw new Error('Method not implemented.');
}

  users: any[] = []; // Déclarer 'users' comme un tableau

  constructor() {
    // Initialiser users avec des données d'exemple ou les récupérer à partir d'un service
    this.users = [
      { cin: '', name: '', RIB: '', BALANCE: '' },
      { cin: '', name: '', RIB: '', BALANCE: '' },
      // Ajouter plus d'objets utilisateur au besoin
    ];
  }
  transferMoney(userId: number) {
    // Implémenter la logique de transfert d'argent ici
    console.log(`Transférer de l'argent pour l'utilisateur avec l'ID ${userId}`);
  }
}
export class transferMoneyComponent {
  constructor(private notificationService: NotificationService) {}

  confirmTransfer() {
    // Your transfer logic here
    // Show notification after transfer confirmation
    this.notificationService.showNotification('Transfer confirmed! Confirmation email has been sent.');
  }
}

