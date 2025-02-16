import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Sony PlayStation 5 Slim',
      description: 'Sony PlayStation 5 Slim 1Tb',
      rating: 4.5,
      image: './assets/PS5 Slim.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    },
    {
      name: 'Sony PlayStation 4 Slim ',
      description: 'Sony PlayStation 4 Slim 1 Tb + геймпад + MK 11 ULT + GTA5 + FIFA23 + UFC4',
      rating: 4.7,
      image: './assets/PS4 Slim.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-4-slim-1-tb-geimpad-mk-11-ult-gta5-fifa23-ufc4-106753489/?c=750000000',
    },
    {
      name: 'Retro game stick M8',
      description: 'Игровая приставка Retro game stick M8 + 10000 игр + 2 беспроводных джойстика',
      rating: 4.2,
      image: './assets/Retro game stick M8.jpg',
      link: 'https://kaspi.kz/shop/p/retro-game-stick-m8-10000-igr-2-besprovodnyh-dzhoistika-105215362/?c=750000000',
    },
    {
      name: 'SEGA',
      description: 'Игровая приставка SEGA 16 Bit черный',
      rating: 4.8,
      image: './assets/SEGA.jpg',
      link: 'https://kaspi.kz/shop/p/sega-16-bit-chernyi-101961903/?c=750000000',
    },
    {
      name: 'Nintendo Switch OLED',
      description: 'Игровая приставка Nintendo Switch OLED белый',
      rating: 4.5,
      image: './assets/Nintendo Switch OLED.jpg',
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000',
    },
    {
      name: 'Sony Playstation Portal',
      description: 'Игровая приставка Sony Playstation Portal',
      rating: 4.7,
      image: './assets/Sony Playstation Portal.jpg',
      link: 'https://kaspi.kz/shop/p/sony-playstation-portal-114967499/?c=750000000',
    },
    {
      name: 'Xbox Series S',
      description: 'Игровая приставка Xbox Series S белый',
      rating: 4.2,
      image: './assets/Xbox Series S.jpg',
      link: 'https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/?c=750000000',
    },
    {
      name: 'M17',
      description: 'Игровая приставка M17 64GB USB кабель, Tekken 5, MORTAL COMBAT TRILOGY, Sonic, GTA, 20000 встроенных игр',
      rating: 4.8,
      image: './assets/M17.jpg',
      link: 'https://kaspi.kz/shop/p/m17-64gb-usb-kabel-tekken-5-mortal-combat-trilogy-sonic-gta-20000-vstroennyh-igr-115842503/?c=750000000',
    },
    {
      name: 'Steam Deck OLED',
      description: 'Игровая приставка Steam Deck OLED 1 ТБ Valve Steam Deck',
      rating: 4.5,
      image: './assets/Steam Deck OLED.jpg',
      link: 'https://kaspi.kz/shop/p/steam-deck-oled-1-tb-valve-steam-deck-115152244/?c=750000000&tab=reviews',
    },
    {
      name: 'Xbox Series X',
      description: 'Игровая приставка Xbox Series X 1TB белый',
      rating: 4.7,
      image: './assets/Xbox Series X.jpg',
      link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-belyi-131268902/?c=750000000',
    },
  ];

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
