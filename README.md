# Template Driven Form
 Learn how to work with template driven form


## Creating the Form and Registering the Controls
For working with forms we need to import FormsModule from @angular/forms and import it into imports.

Angular will not automatically detect your inputs. By adding ngModel and name property to input we can tell angular what should be an actual control of my form. 



### app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

### app.component.ts

```html

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form>
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input
             type="text"
              id="username" 
              class="form-control"
              ngModel
              name="username"
              >
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input 
            type="email" 
            id="email"
            class="form-control"
            ngModel
            name="email"
            >
          </div>
        </div>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select 
          id="secret"
           class="form-control"
           ngModel
           name="secret"
           >
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>


```

## Submiting and Using the Form

For submiting the form in angular we need to add [ngSubmit] directive like example.

### Important/Point to Be Remember
```html
<form (ngSubmit)="onSubmit(f)" #f="ngForm">

</form>
```

#### app.component.html
```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input
             type="text"
              id="username" 
              class="form-control"
              ngModel
              name="username"
              >
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input 
            type="email" 
            id="email"
            class="form-control"
            ngModel
            name="email"
            >
          </div>
        </div>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select 
          id="secret"
           class="form-control"
           ngModel
           name="secret"
           >
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>

```

### app.component.ts
```javascript
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(form:NgForm){
    //this function will return form object on console
    console.log(form)
  }
}


```

## Understanding State of Form

NgForm directive have an object which contain diffrent ststes of the form. there are some popular states :

```javascript

value: any
valid: boolean | null
invalid: boolean | null
pending: boolean | null
disabled: boolean | null
enabled: boolean | null
errors: ValidationErrors | null
pristine: boolean | null
dirty: boolean | null
touched: boolean | null
status: string | null
untouched: boolean | null
statusChanges: Observable<any> | null
valueChanges: Observable<any> | null
path: string[] | null

```

## Accessing the Form with @ViewChild

By using @ViewChild we can access same NgForm object and all the related states.

#### app.component.html
```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input
             type="text"
              id="username" 
              class="form-control"
              ngModel
              name="username"
              >
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input 
            type="email" 
            id="email"
            class="form-control"
            ngModel
            name="email"
            >
          </div>
        </div>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select 
          id="secret"
           class="form-control"
           ngModel
           name="secret"
           >
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>


```

#### app.component.ts
```javascript
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
onSubmit(){
  console.log(this.signupForm)
}
}


```