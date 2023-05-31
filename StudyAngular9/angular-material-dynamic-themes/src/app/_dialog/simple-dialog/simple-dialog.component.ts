import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent implements OnInit {
  style: number;
  title: string;
  message: string;
  information: string;//額外訊息（可不埴）
  button: number;
  allow_outside_click: boolean = false;//是否可以點外面關畢對話框
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //console.log(data);
    this.style = data.style || 0;
    this.title = data.title;
    this.message = data.message;
    this.information = data.information;
    this.button = data.button;
    this.dialogRef.disableClose = !data.allow_outside_click || false;
  }

  ngOnInit(): void {
  }
  onOk() {
    this.dialogRef.close({ result: "ok" });
  }
  onCancel() {
    this.dialogRef.close({ result: "cancel" });
  }
  onYes() {
    this.dialogRef.close({ result: "yes" });
  }
  onNo() {
    this.dialogRef.close({ result: "no" });
  }
  onAccept() {
    this.dialogRef.close({ result: "accept" });
  }
  onReject() {
    this.dialogRef.close({ result: "reject" });
  }

}
