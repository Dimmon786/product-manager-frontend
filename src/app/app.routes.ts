import { Routes } from '@angular/router';
import { CategoriesComponent} from "./pages/categories/categories.component";
import {ListComponent} from "./pages/list/list.component";
import {CreateComponent} from "./pages/create/create.component";
import {ProductComponent} from "./pages/product/product.component";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {HeaderComponent} from "./elements/header/header.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {authGuard} from "./pages/auth.guard";

export const routes: Routes = [
  {
    path: "index",
    component: HeaderComponent
  },
  {
    path: "auth/login",
    component: LoginComponent
  },
  {
    path: "auth/registration",
    component: RegistrationComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "category/list",
    component: ListComponent
  },
  {
    path: "category/create",
    component: CreateComponent,
    canActivate: [authGuard]
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/list",
    component: ProductListComponent
  },
  {
    path: "products/create",
    component: ProductComponent,
    canActivate: [authGuard]
  }
];


