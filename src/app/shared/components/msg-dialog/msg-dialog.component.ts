import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageDialogData } from '../../interfaces/MessageDialogData';

@Component({
  selector: 'ecom-msg-dialog',
  templateUrl: './msg-dialog.component.html',
  styleUrls: ['./msg-dialog.component.scss']
})
export class MsgDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageDialogData) { }

  ngOnInit(): void {
  }

}
