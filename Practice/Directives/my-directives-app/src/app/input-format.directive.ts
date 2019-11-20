import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { format } from 'path';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  constructor(private el :ElementRef) { }

  @HostListener('focus') onfocus(){
    console.log('onfocus called')
  }

  @HostListener('blur') onblur(){
    let value :string = this.el.nativeElement.value;
    
    if(this.format === 'upcase'){
      this.el.nativeElement.value = value.toUpperCase()
    }
    else{
      this.el.nativeElement.value = value.toLowerCase()
    }
  }

}
