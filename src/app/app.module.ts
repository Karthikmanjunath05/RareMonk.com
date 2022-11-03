import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensClothingComponent } from './mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far, faHeart} from '@fortawesome/free-regular-svg-icons';
import { fas, faSearch, faRandom} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    MovieComponent,
    MensClothingComponent,
    WomensClothingComponent,
    ElectronicsComponent,
    JewelleryComponent,
    ProductComponent,
    CartComponent,
    FooterComponent,
    PaymentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(far, fas);

  }
 }
