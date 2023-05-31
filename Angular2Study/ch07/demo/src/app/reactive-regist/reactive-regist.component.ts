import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { mobileValidator, equalValidator, mobileAsyncValidator } from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  formModel: FormGroup;
  // constructor() { 
  //   this.formModel = new FormGroup({
  //     username : new FormControl(),
  //     mobile : new FormControl(),
  //     passwordsGroup : new FormGroup({
  //       password : new FormControl(),
  //       pconfirm : new FormControl()
  //     })
  //   });
  // }
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator,mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['',Validators.minLength(6)],
        pconfirm: ['']
      }, { validator: equalValidator })

    });
  }
  onSubmit() {
    let isValid: boolean = this.formModel.get("username").valid;
    console.log("username的校驗結果:" + isValid);
    let errors: any = this.formModel.get("username").errors;
    console.log("username的錯誤訊息是" + JSON.stringify(errors))

    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
    
  }

  ngOnInit() {
  }

}
