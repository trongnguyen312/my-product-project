import { Component, Input, OnInit} from '@angular/core';
import { MenuItem } from '../side-bar.component';
@Component({
  selector: 'app-side-bar-menu-item',
  templateUrl: './side-bar-menu-item.component.html',
  styleUrls: ['./side-bar-menu-item.component.scss']
})
export class SideBarMenuItemComponent implements OnInit {
  @Input() menu!: MenuItem;
  @Input() isCollapsed = false;
  @Input() routerTo!: (route: string) => void;
  constructor() { }

  ngOnInit(): void {
  }

}
