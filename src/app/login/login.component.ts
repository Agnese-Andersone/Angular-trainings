import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;


  constructor(private formBuilder: FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'login': ['Jānis' ,[Validators.required, Validators.email]], 
      'password': ['123', Validators.required]
    });
  }
 public submit(){
   console.log('login', this.form);
   // šeit notiks datu sūtīšana uz serveri
 }

}
