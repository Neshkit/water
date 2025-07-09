import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showModal = false;

  openModal() {
    console.log('Открытие модалки!');
    this.showModal = true;
  }

  closeModal() {
    console.log('Закрытие модалки!');
    this.showModal = false;
  }
}
