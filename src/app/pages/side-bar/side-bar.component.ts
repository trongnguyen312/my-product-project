import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }
  menus: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      open: true,
      children: [
        {
          title: 'Welcome',
          route: '/welcome'
        },
        {
          title: 'Product',
          route: '/product'
        },
      ]
    },
    {
      title: 'Form',
      icon: 'form',
      open: true,
      children: [
        {
          title: 'Basic Form',
          route: '/form/basic'
        }
      ]
    }
  ];

  ngOnInit(): void {
  }

}
