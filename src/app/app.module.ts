import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { HeaderComponent } from './pages/header/header.component';
import { productReducer } from './store/product/product.reducer';
import { cartReducer } from '@store/cart/cart.reducer';
import { CartEffects } from './store/cart/cart.effects';
import { SharedModule } from './shared.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './reuse-strategy';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SideBarMenuItemComponent } from './pages/side-bar/side-bar-menu-item/side-bar-menu-item.component';
import { CartDropdownComponent } from './pages/cart-dropdown/cart-dropdown.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarMenuItemComponent,
    SideBarMenuItemComponent,
    HeaderComponent,
    CartDropdownComponent,
    CartPageComponent,
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
    EffectsModule.forRoot([CartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NzToolTipModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN, },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy, },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
