import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  link: string;
  likes: number;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Shop';
  categories: Category[] = []=[
    {
      id: 1,
      name: 'Smartphones',
      products: [
        {
          id: 1,
          name: 'Apple iPhone 13',
          description: 'Apple iPhone 13 128Gb',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
          likes: 0
        },
        {
          id: 2,
          name: 'Huawei nova 13i',
          description: 'Huawei nova 13i 8 ГБ/256 ГБ',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h44/64145784373278.jpg?format=gallery-large',
          link: 'https://kaspi.kz/shop/p/huawei-nova-13i-8-gb-256-gb-belyi-podarok-135079214/?c=750000000',
          likes: 0
        },
        {
          id: 3,
          name: 'Realme C67',
          description: 'Realme C67 6 ГБ/128 ГБ ',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pd8/p9c/26332517.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/realme-c67-6-gb-128-gb-zelenyi-podarok-135145427/?c=750000000',
          likes: 0
        },
        {
          id: 13,
          name: 'Samsung Z Flip6',
          description: 'Samsung Z Flip6 12 ГБ/256 ГБ',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/p6e/25132530.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-z-flip6-12-gb-256-gb-zelenyi-podarok-134788937/?c=750000000',
          likes: 0
        },
        {
          id: 14,
          name: 'Смартфон Nubia Red Magic 9 Pro',
          description: 'Смартфон Nubia Red Magic 9 Pro 12 ГБ/256 ',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h6a/86862064025630.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/nubia-red-magic-9-pro-12-gb-256-gb-chernyi-podarok-122589604/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      id: 2,
      name: 'Furniture',
      products: [
        {
          id: 4,
          name: 'IMPERIAL',
          description: 'IMPERIAL',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h2b/85356927713310.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-imperial-aljona-3d-120-2x190-5h46-6-sm-belyi-bezhevyi-104713427/?c=750000000',
          likes: 0
        },
        {
          id: 5,
          name: 'Qazyna Jihaz 8045190',
          description: 'Qazyna Jihaz 8045190',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h45/86503356858398.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-qazyna-jihaz-8045190-80x190h45-sm-belyi-korichnevyi-108794828/?c=750000000',
          likes: 0
        },
        {
          id: 6,
          name: 'Fourdoor',
          description: 'Fourdoor',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h59/67189057028126.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-fourdoor-s-zerkalom-160x200h47-sm-belyi-108174703/?c=750000000',
          likes: 0
        },
        {
          id:15,
          name: 'BEREN 431897194',
          description: 'BEREN 431897194',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p40/p00/16453450.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/shkaf-penal-beren-431897194-28x180h25-sm-belyi-132356507/?c=750000000',
          likes: 0
        },
        {
          id: 16,
          name: 'AsiaBrand',
          description: 'AsiaBrand',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h29/h67/84431565586462.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-asiabrand-retro-6d-244x220h60-sm-belyi-korichnevyi-114282847/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      id: 3,
      name: 'Home appliances',
      products: [
        {
          id: 7,
          name: 'Deerma DX700',
          description: 'Deerma DX700',
          rating: 4.5,
          image: 'https://m.media-amazon.com/images/I/710KoJMG2lL.jpg',
          link: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
          likes: 0
        },
        {
          id: 8,
          name: 'BEREKE BR-810',
          description: 'BEREKE BR-810',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
          likes: 0
        },
        {
          id: 9,
          name: 'Slaouwo HB-2075',
          description: 'Slaouwo HB-2075',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000',
          likes: 0
        },
        {
          id: 17,
          name: 'LG F2J3NS0W',
          description: 'LG F2J3NS0W',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
          likes: 0
        },
        {
          id: 18,
          name: 'AVA MMWO-2070B',
          description: 'AVA MMWO-2070B',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      id: 4,
      name: 'Laptops',
      products: [
        {
          id: 10,
          name: 'ThundeRobot 911 X Wild Hunter G2 Pro 15.6"',
          description: 'ThundeRobot 911 X Wild Hunter G2 Pro 15.6"',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
          likes: 0
        },
        {
          id: 11,
          name: 'Apple MacBook Air 13 2022 13.6"',
          description: 'Apple MacBook Air 13 2022 13.6"',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
          likes: 0
        },
        {
          id: 12,
          name: 'Lenovo LOQ 15.6" ',
          description: 'Lenovo LOQ 15.6" ',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p53/15221547.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-16-gb-ssd-512-gb-bez-os-15iax9-83gs005nrk-120581412/?c=750000000',
          likes: 0
        },
        {
          id: 19,
          name: 'Acer Gadget E10 ETBook 14" ',
          description: 'Acer Gadget E10 ETBook 14" ',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000',
          likes: 0
        },
        {
          id: 20,
          name: 'ThundeRobot Zero G3 Ultra 16"',
          description: 'LThundeRobot Zero G3 Ultra 16"',
          rating: 4.5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h67/84375762599966.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/thunderobot-zero-g3-ultra-16-32-gb-ssd-2048-gb-win-11--114123805/?c=750000000',
          likes : 0
        }
      ]
    }
  ];
  selectedCategory: Category | null = null;
  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
  ngOnInit(): void {
    this.loadLikes();
  }
  likeProduct(product: Product): void {
    product.likes++;
    this.saveLikes();
  }
  saveLikes(): void {
    const likesMap: { [key: number]: number } = {};
    this.categories.forEach(category => {
      category.products.forEach(product => {
        likesMap[product.id] = product.likes;
      });
    });
    localStorage.setItem('likes', JSON.stringify(likesMap));
  }
  loadLikes(): void {
    const savedLikes = localStorage.getItem('likes');
    if (savedLikes) {
      const likesMap: { [key: number]: number } = JSON.parse(savedLikes);
      this.categories.forEach(category => {
        category.products.forEach(product => {
          if (likesMap[product.id] !== undefined) {
            product.likes = likesMap[product.id];
          }
        });
      });
    }
  }
}
