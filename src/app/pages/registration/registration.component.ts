import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'pm-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  formGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new  FormControl(null, [Validators.required]),
    email: new  FormControl(null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-] {2,10}$/g), Validators.required]),
    password: new  FormControl(null, [Validators.required])
  })

  submit() {
    console.log(this.formGroup);
    if(this.formGroup.valid){

    }
  }
}
