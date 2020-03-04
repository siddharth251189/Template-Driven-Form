import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;

  genders=['Male','Female']
 formSubmited=false;
  user={
    username:'',
    email:'',
    secretQuestions:'',
    answer:'',
    gender:''

  }
  
defaultQuestion="pet";
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }
onSubmit(){
  console.log(this.signupForm)
  this.formSubmited=true;
  this.user.username=this.signupForm.value.userData.username;
  this.user.email=this.signupForm.value.userData.email;
  this.user.secretQuestions=this.signupForm.value.secret;
  this.user.answer=this.signupForm.value.answer;
  this.user.gender=this.signupForm.value.gender;
  this.signupForm.reset();

}
}
