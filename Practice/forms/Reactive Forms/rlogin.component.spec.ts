import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RloginComponent } from './rlogin.component';
import { AppComponent } from '../app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('RloginComponent', () => {
  let component: RloginComponent;
  let fixture: ComponentFixture<RloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

fdescribe('Componenet: Form data testing',()=>{
  let component : RloginComponent;
  let fixture: ComponentFixture<RloginComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, FormsModule],
      declarations:[RloginComponent]
    });
     
    fixture=TestBed.createComponent(RloginComponent);
    component=fixture.componentInstance;
    component.loadData();

  });
 
  it('password field validity', ()=>{
    
    let pass=component.login.controls.password;
    pass.setValue("RockFord1234");
    expect(pass.valid).toBe(true);

 });

 it('confirm password field validity', ()=>{
   
  let cnfpass = component.login.controls.cnfpassword;
  cnfpass.setValue("");
  expect(cnfpass.invalid).toBe(true);
  
});

it('Email field validity', ()=>{
   
  let mail = component.login.controls.mail;
  mail.setValue("nrj@gmail.com");
  expect(mail.valid).toBe(true);

});
it('proper address testing', ()=>{
  let zip = component.login.controls['address'];
  zip.setValue(
  {area:"TechZone123NIIT",
  city:"Amravati",
  zipcode:12345,
  country:"India"});

  expect(zip.valid).toBe(true);
});

});