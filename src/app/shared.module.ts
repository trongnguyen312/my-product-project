import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    NzLayoutModule,
    NzMenuModule,
    NzAlertModule,
    NzTableModule,
    NzTabsModule,
    NzIconModule,
    NzCalendarModule,
    NzAutocompleteModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    NzLayoutModule,
    NzMenuModule,
    NzAlertModule,
    NzTableModule,
    NzTabsModule,
    NzIconModule,
    NzCalendarModule,
    NzAutocompleteModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    RouterModule
  ]
})
export class SharedModule {}
