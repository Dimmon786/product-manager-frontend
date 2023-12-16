import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {jwtDecode} from "jwt-decode";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  function hasClaim(admin: string) {
    let item = localStorage.getItem("ACCESS_TOKEN");
    let jwtPayload = jwtDecode(item) as any;
    console.log(jwtPayload);
    return false;
  }

  if(localStorage.getItem("ACCESS_TOKEN")&& hasClaim("admin")){
    return true;
  }
  router.navigateByUrl("/auth/login");
  return false;
}


