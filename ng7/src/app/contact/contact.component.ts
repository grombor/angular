import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msgForm = this.fb.group ({
    user_name: ['', Validators.required],
    user_message: ['Enter your message here.', Validators.required]
  });
  submitted = false;
  success = false;
  errorMsg = {
    user_name : 'The username should have at least 4 characters lenght',
    user_message : 'The username should have at least 14 characters lenght'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.msgForm.value);
    console.log("Form status: " + this.msgForm.status);
    if (this.msgForm.invalid) {
      return;
    }
    this.success = true;
    console.log("Success: " + this.success);
  }

}