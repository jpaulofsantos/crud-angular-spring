import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {

  constructor(
    public dialog: MatFormFieldModule,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onConfirm(result: Boolean): void {
    this.dialogRef.close(result);
  }

}
