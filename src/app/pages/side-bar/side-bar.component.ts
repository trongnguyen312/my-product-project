import { Component, Input, OnInit } from '@angular/core';
import { CustomRouteReuseStrategy } from '../../reuse-strategy';
import { Router } from '@angular/router';

export interface MenuItem {
  title: string;
  icon?: string;
  open?: boolean;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() isCollapsed = false;
  menus: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      open: true,
      children: [
        { title: 'Welcome', route: '/welcome', icon: 'shop', },
        {
          title: 'Product',
          icon: 'shop',
          children: [
            { title: 'Danh sách', route: '/product/list' },
          ]
        },
        { title: 'Giỏ hàng', route: '/cart', icon: 'shopping-cart' }
      ]
    }
  ];

  constructor(
    private router: Router,
  ) {
  }

  get getCurrentURL() {
    console.log('routerrrrrrrrrrrr', this.router.url);
    return this.router.url;
  }

  ngOnInit(): void {
  }

  routerTo(routeString: any) {
    CustomRouteReuseStrategy.deleteAllSnapshots();
    // this.router.navigate([routeString]);
  }
}
