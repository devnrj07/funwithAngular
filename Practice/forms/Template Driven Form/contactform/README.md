# Contactform

This is an example of template driven forms.
We use #Template variables to bind the html element along with
**ngModel** to create control object of form fields under the hood.

There are two main classes in angular Form Module
FormControl and FormGroup

To control over Form we declare #form = "ngForm", now form template variable
has access and control over all the form objects

For vaidation on each field we use declared #template variables in the template itself.i.e all the validation logic is been handled in the html itself.

Ex. we use Terms #variable to handle validation for this particular form field
<input required type="checkbox" ngModel name="terms" #Terms="ngModel">
        <div *ngIf="Terms.invalid && ( Terms.dirty || Terms.touched)" class="">
            <div *ngIf="Terms.errors.required" class="danger">Tick this!</div>
        </div>

 Similarly, we've have control over group of form field using #form = "ngForm", which we can use to disable the submit button.

 For Ex. first we declare #variable
    <form #form="ngForm">    

then we use property binding on disabled attribute of button like this <button class="form-Control" (click)="Submit(form)" [disabled]="form.invalid">Submit<button>   