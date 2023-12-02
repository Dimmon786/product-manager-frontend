import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

formGroup= new FormGroup({
  email: new FormControl(null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-] {2,10}$/g), Validators.required]),
  password: new FormControl(null, [Validators.required])
})
  submit() {
  console.log(this.formGroup);
  if(this.formGroup.valid){
   }
  }
}
