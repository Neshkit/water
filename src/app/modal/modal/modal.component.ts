import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {
  @Input() showModal = false;
  @Output() closeModal = new EventEmitter<void>();
  bestOffers = [
    {
      price: 90,
      title: 'Вода детская<br>«Калинов родничок»',
      desc: '5 л',
      img: 'assets/images/kalinov.jpg'
    },
    {
      price: 120,
      title: 'Вода<br>«Шишкин»',
      desc: '6 л',
      img: 'assets/images/shihka.jpg'
    },
    {
      price: 76,
      title: 'Вода<br>негазированая',
      desc: '5 л',
      img: 'assets/images/bezgaza.jpg'
    }
  ];
  bestOfferIndex = 0;

  constructor() {
    console.log('ModalComponent создан!');
  }

  prevBestOffer(event: Event) {
    event.stopPropagation();
    this.bestOfferIndex = (this.bestOfferIndex - 1 + this.bestOffers.length) % this.bestOffers.length;
  }

  nextBestOffer(event: Event) {
    event.stopPropagation();
    this.bestOfferIndex = (this.bestOfferIndex + 1) % this.bestOffers.length;
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ModalComponent showModal:', this.showModal);
  }
}
