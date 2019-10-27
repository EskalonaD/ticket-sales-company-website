import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  AuthorizationForm: FormGroup;

 constructor(private fb: FormBuilder){}
 ngOnInit(){
  this.initForm();
 }
 onSubmit() {
  const controls = this.AuthorizationForm.controls;
  
   if (this.AuthorizationForm.invalid) {
    Object.keys(controls)
     .forEach(controlName => controls[controlName].markAsTouched());

     return;
    }
   console.log(this.AuthorizationForm.value);
  }
  isControlInvalid(controlName: string): boolean {
    const control = this.AuthorizationForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  private initForm() {
    this.AuthorizationForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]
      ],
      password: [null]
      
    });
  }
/*
 initForm(){
  this.AuthorizationForm = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.pattern(/[A-z]/)
     ]
    ],
    password: ['', [
      Validators.required, Validators.pattern(/^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/)
     ]
    ]
   });
   
 }*/
 
 

}
