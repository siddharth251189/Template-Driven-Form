# Template Driven Form
 Learn how to work with template driven form


## Creating the Form and Registering the Controls
For working with forms we need to import FormsModule from @angular/forms and import it into imports.

Angular will not automatically detect your inputs, by adding ngModel and name property we can tell angular what should be an actual control of my form. 



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