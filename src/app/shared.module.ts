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

@NgModule({
  imports: [
    CommonModule,
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
  ],
  exports: [
    CommonModule,
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
  ]
})
export class SharedModule {}
