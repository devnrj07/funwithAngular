#Angular Directves
--Directives are instructions in the DOM. They specify how to place your components and business logic in the Angular.

Directives are js class and declared as @directive. There are 3 directives in Angular.

  >  Component Directives
  >  Structural Directives
  >  Attribute Directives

**Component Directives**: Component directives are used in main class. They contain the detail of how the component should be processed, instantiated and used at runtime.

**Structural Directives**: Structural directives start with a * sign. These directives are used to manipulate and change the structure of the DOM elements. For example, *ngIf and *ngFor.

**Attribute Directives**: Attribute directives are used to change the look and behavior of the DOM elements. For example: ngClass, ngStyle etc.
**ngIf**
    <div *ngIf="condition; then __ else __">

**ngSwitch**
    [ngSwitch]
    *ngSwitchCase...

    *ngSwitchDefault

**ngFor and Chnage Detection**

**ngFor and trackBy**
For performance reasons we can tell angular not to reload / recreate DOM elements, check only for changes.

**ngClass**

An attribute directive. This helps with class binding for example
<span class="glyphicon"
    [class.glyphicon-star]="isSelected"
    [class.glyphicon-star-empty]="!isSelected"
  (click) = "onClick()">
  </span>

  we can just write :
  <span
    class= "glyphicon"
    [ngClass]="{
        'glyphicon-star':isSelected,
        'glyphicon-star-empty' : !isSelected
    }"
  ></span>

  **ngStyle**

  **Custom Directive**
  ng g d my-directive

  @HostListener('someevent')

  ElementRef