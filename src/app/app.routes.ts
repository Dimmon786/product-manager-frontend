import { Routes } from '@angular/router';
import { CategoriesComponent} from "./pages/categories/categories.component";
import {ListComponent} from "./pages/list/list.component";
import {CreateComponent} from "./pages/create/create.component";
import {ProductComponent} from "./pages/product/product.component";
import {ProductListComponent} from "./pages/product-list/product-list.component";

export const routes: Routes = [
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
    component: CreateComponent
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
    component: ProductComponent
  }
];
