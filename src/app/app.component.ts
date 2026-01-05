import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AosService} from './services/aos.service';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  isCollapsed = false;

  constructor(
    private aosService: AosService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.aosService.init();
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.aosService.refresh();
      });
  }

  ngAfterViewInit(): void {
    this.aosService.init();

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.aosService.refresh();
        }, 0);
      });
  }
}
