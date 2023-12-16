import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {UserControllerService} from "../../openapi-client";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'pm-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  router = inject(Router)

  formGroup = new FormGroup({
    firstName: new FormControl<string>("", [Validators.required]),
    lastName: new FormControl<string>("", [Validators.required]),
    street: new FormControl<string>("", [Validators.required]),
    city: new FormControl<string>("", [Validators.required]),
    zip: new FormControl<string>("", [Validators.required]),
    country: new FormControl<string>("", [Validators.required]),
    email: new FormControl<string>("", [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/g), Validators.required]),
    password: new FormControl<string>("", [Validators.required]),
    phone: new FormControl<string>(""),
    mobilePhone: new FormControl<string>("")
  });
  submit() {
    console.log(this.formGroup);
    if(this.formGroup.valid){
      this.userControllerService.register(this.formGroup.getRawValue()).subscribe(value => {
        this.router.navigateByUrl( "/auth/login")
      })
    }
  }
  constructor(
    private readonly userControllerService: UserControllerService
  ) {
  }
}
