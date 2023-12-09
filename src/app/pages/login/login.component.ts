import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UserControllerService} from "../../openapi-client";


@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router = inject(Router)

formGroup= new FormGroup({
  email: new FormControl<string>("", [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-] {2,10}$/g), Validators.required]),
  password: new FormControl<string>("", [Validators.required])
});
  submit() {
    console.log(this.formGroup);
    if(this.formGroup.valid){
      this.userControllerService.login(this.formGroup.getRawValue()).subscribe(value => {
        this.router.navigateByUrl( "categories")
      })
    }
  }

  constructor(
    private readonly userControllerService: UserControllerService
  ) {
  }
}
