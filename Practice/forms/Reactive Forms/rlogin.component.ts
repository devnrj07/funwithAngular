import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
    


  countries=['India','Asutralia','USA'];
    login = this.fb.group({

      username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      password:['', [Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      cnfpassword:['',this.Validpass],
      gender:[''],
      mail:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      URL:[''],
      address:this.fb.group({
        area:['',[Validators.required,Validators.pattern('[A-Za-z]{4,}')]],
        city:['',[Validators.required,Validators.pattern('[A-Za-z]{3,10}')]],
        zipcode:['',[Validators.required, Validators.pattern('^[0-9]{6}$')]],
        country:['']
      })
    });
  
    loadData(){
      this.login.setValue({
          username:'',
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


    Validpass(test: AbstractControl){
        if (test && (test.value !== null || test.value !== undefined)) {
        const cnfpass= test.value;

        const pass= test.root.get('password'); // -> root->value
        if (pass) {
            const passValue = pass.value;
            if (passValue !== cnfpass || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }

    return null;
}




      
     
        
  /*login = new FormGroup({
        username: new FormControl(''),    /*this was using FormGroup and control 
        password:new FormControl(''),
        cnfpassword:new FormControl(''),
           address: new FormGroup({
             city:new FormControl(''),
             zipcode:new FormControl(''),
             area: new FormControl('')
           })
      }); */
    
      onsubmit(value){
        alert(" "+value.username);
      }
  ngOnInit() {
  }

  /*
   validateEmail(check: AbstractControl) {

    if (!check.value.startsWith('[a-z]*') || !check.value.includes('@')) {
      return { validUrl: true };
    }
    return null;
  }
  
  Validateurl(url:AbstractControl){
    if (!url.value.startsWith('https') || !url.value.includes('.io')) {
      return { Url: true };
    }
    return null;
  }
 */

 
 
}




  



