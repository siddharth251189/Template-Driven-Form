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

## Adding Validation to check User Input

For adding validation we need to ad required property to yhe controll.

## Using the Form State

By using form state we can validate our form controls. For example if we need to disable submit button so can to as follow:

```html
 <form (ngSubmit)="onSubmit(f)" #f="ngForm">
    <button [disabled]="!f.valid" class="btn btn-primary" type="submit">
        Submit
    </button>
 </form>
```

In this example f is a local refrence of ngForm, so if form will be invalid at same time button also will be dissabled once form's valid state change to true button will be Enable.


### About validation classes

Angular add classes to control which indicate state of control.Here is an example of angular control:

#### Invalid Control

```html
<input _ngcontent-qgq-c0="" class="form-control ng-pristine ng-invalid ng-touched" id="username" name="username" ngmodel="" required="" type="text" ng-reflect-required="" ng-reflect-name="username" ng-reflect-model="">
```

#### Valid Control

```html
<input _ngcontent-tqh-c0="" class="form-control ng-dirty ng-valid ng-touched" id="username" name="username" ngmodel="" required="" type="text" ng-reflect-required="" ng-reflect-name="username" ng-reflect-model="">
```

### Using the state Example:

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
              required
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
            required
            email
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
        <button [disabled]="!f.valid" class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>


```
#### app.component.css

```css
input.ng-invalid.ng-touched {
  border:solid 1px red;
}
```

## Outputing Validation Error Messages
By useing form or control state we can change UI. below is the example were we are showing a error message if username and email vlaid state is invalid.

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
              required
              #username="ngModel"
              >
              <p *ngIf="!username.valid && username.touched">User Name can't be empty</p>
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
            required
            email
            #email="ngModel"
            >
          </div>
        </div>
        <p *ngIf="!email.valid && email.touched">Please enter a valid email</p>
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
        <button [disabled]="!f.valid" class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>


```

## Set Default Value

### app.component.ts

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
  
defaultQuestion="pet";

}
```

### app.component.html

```html

 <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select 
          id="secret"
           class="form-control"
           ngModel
           name="secret"
           [ngModel]="defaultQuestion"
           >
           <!-- defaultQuestion="pet"; here we are setting default value of dropdown by property binding-->
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>

```

## Using ngModel with Two-Way-Binding

We use [(ngModel)] for two way data binding 

### app.component.html

```html
 <div class="form-group">
          <textarea name="answer" [(ngModel)]="name" class="form-control" col="3"></textarea>
          <p>This is answer:{{name}}</p>
        </div>
```

## Grouping Form Controls
### Syntax To Remember

1. ngModelGroup

#### app.component.html
```html

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div id="user-data" 
        ngModelGroup="userData"
        #userData="ngModelGroup"
        >
          <div class="form-group">
            <label for="username">Username</label>
            <input
             type="text"
              id="username" 
              class="form-control"
              ngModel
              name="username"
              required
              #username="ngModel"
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
            required
            email
            #email="ngModel"
            >
          </div>
        </div>
        
        <p *ngIf="!userData.valid && userData.touched">User Data is invalid</p>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select 
          id="secret"
           class="form-control"
           ngModel
           name="secret"
           [ngModel]="defaultQuestion"
           >
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <div class="form-group">
          <textarea name="answer" [(ngModel)]="name" class="form-control" col="3"></textarea>
          <p>This is answer:{{name}}</p>
        </div>
        <button [disabled]="!f.valid" class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>



```
In Above example we wrap our username and email within userData with ngModelGroup. After submiting the form, ngForm object will return following value in value property. In the value object we can see that ngModelGroup will make a group of username and email.we can use userData state after adding a local refrence like #userData="ngModelGroup"

```javascript

userData:
username: "sandesh251189"
email: "siddharthuiux@gmail.com"
__proto__: Object
secret: "pet"
answer: "asd"
```