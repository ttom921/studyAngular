import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiv-form',
  templateUrl: './reactiv-form.component.html',
  styleUrls: ['./reactiv-form.component.css']
})
export class ReactivFormComponent implements OnInit {
  formModel: FormGroup = new FormGroup({
    dataRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('a@a.com'),
      new FormControl('b@b.com')
    ])
  });
  username: FormControl = new FormControl('aaa');


  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.formModel.value);
  }
  addEmail(){
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
