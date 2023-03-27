import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  percorso = '../../../assets/images/carousel-';

  images = [
    {
      id: 1,
      label: 'Against the current',
    },
    {
      id: 2,
      label: 'Thirty Seconds to Mars',
    },
    {
      id: 3,
      label: 'All Time Low',
    },
    {
      id: 4,
      label: 'Blink-182',
    },
    {
      id: 5,
      label: '3 Doors Down',
    },
    {
      id: 6,
      label: 'Foo Fighters',
    },
  ];
}
