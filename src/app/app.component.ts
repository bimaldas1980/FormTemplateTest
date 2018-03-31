import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") formElement: NgForm;
  subscriptionModel = {
    email:'',
    subscription:'',
    password:''
  };

initializeValue() {
  this.formElement.form.patchValue(
    {subscription: "advanced"}
  );
}

  OnSubmitForm() {
    console.log(this.subscriptionModel);
  }

  onNgInit() {
    this.initializeValue();
  }
}
