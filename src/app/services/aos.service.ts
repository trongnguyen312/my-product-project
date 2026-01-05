import * as AOS from 'aos';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AosService {
  init(): void {
    AOS.init({
      duration: 800,
      once: true
    });
  }

  refresh(): void {
    AOS.refresh();
  }
}
