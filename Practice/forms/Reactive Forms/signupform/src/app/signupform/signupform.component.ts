import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {UsernameValidator} from './username.validaor';
import {PasswordValidator} from './password.validator';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent  {

  constructor(private fb : FormBuilder) { }
  countries=['India','Asutralia','USA']
  options = ['male','female','other']

  private signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)], UsernameValidator.noSpaces,UsernameValidator.uniqueName],
    password: ['', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
    cnfpassword: ['',PasswordValidator.shouldMatch],
    gender: [''],
    mail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    
    address: this.fb.group({
      area: ['', [Validators.required, Validators.pattern('[A-Za-z]{4,}')]],
      city: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,10}')]],
      zipcode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      country: ['']
    })
  });
  public get dataFields() {
    return this.signupForm;
  }
  public set dataFields(value) {
    this.signupForm = value;
  }
  
  loadData(){
    this.signupForm.setValue({
      name:'',
          password:'Qweasdzxc1',
          cnfpassword:'Qweazxc1',
          gender:'male',
          mail:'djnrj@gmail.com',
          URL:'www.mi.com',
          address:{
            area:'Civil Lines',
            city :'Nagpur',
            zipcode:'230067',
            country:'India'
          }
         });
    
  }

}
