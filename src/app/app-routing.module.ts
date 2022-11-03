import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { LoginComponent } from './login/login.component';
import { MensClothingComponent } from './mens-clothing/mens-clothing.component';
import { MovieComponent } from './movie/movie.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component:LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "movie", component: MovieComponent},
  {path: "mens", component: MensClothingComponent},
  {path: "product/:category/:id", component: ProductComponent},
  {path: "womens", component: WomensClothingComponent},
  {path: "electronics", component: ElectronicsComponent},
  {path: "jewellery", component: JewelleryComponent},
  {path: "home/mens", redirectTo: "mens", pathMatch:"full"},
  {path: "home/womens", redirectTo: "womens", pathMatch:"full"},
  {path: "home/electronics", redirectTo: "electronics", pathMatch:"full"},
  {path: "home/jewellery",redirectTo: "jewellery", pathMatch:"full"},
  {path: "cart", component: CartComponent},
  {path: "home/cart", redirectTo:"cart", pathMatch: "full"},
  {path: "home/mens/cart", redirectTo: "cart", pathMatch:"full"},
  {path: "home/womens/cart", redirectTo: "cart", pathMatch:"full"},
  {path: "home/jewellery/cart",redirectTo: "cart", pathMatch:"full"},
  {path: "pay", component:PaymentComponent},
  {path: "cart/pay", redirectTo:"pay", pathMatch: "full"},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
