import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegistrationForm: FormGroup;

  constructor(private fb: FormBuilder){}
  ngOnInit(){
   this.initForm();
  }
 
  initForm(){
   this.RegistrationForm = this.fb.group({
     username: ['', [
       Validators.required,
       Validators.pattern(/[A-z]/)
      ]
     ],
      email: ['', [
        Validators.required, Validators.email
       ]
      ],
     password: ['', [
       Validators.required, Validators.pattern(/^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/)
      ]
     ]
    });
  }
  onSubmit() {
    const controls = this.RegistrationForm.controls;
    
     if (this.RegistrationForm.invalid) {
      Object.keys(controls)
       .forEach(controlName => controls[controlName].markAsTouched());
  
       return;
      }
     console.log(this.RegistrationForm.value);
    }

}
