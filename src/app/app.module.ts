import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N, vi_VN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import vi from '@angular/common/locales/vi';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {SideBarComponent} from './pages/side-bar/side-bar.component';
import {productReducer} from './store/product/product.reducer';
import {cartReducer} from '@store/cart/cart.reducer';
import {SharedModule} from './shared.module';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    SharedModule,
    StoreModule.forRoot({
      product: productReducer,
      cart: cartReducer
    }, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [{provide: NZ_I18N, useValue: vi_VN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
