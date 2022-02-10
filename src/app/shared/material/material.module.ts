import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTabsModule } from "@angular/material/tabs";
const material = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...material
  ],
  exports:[
    ...material
  ]
})
export class MaterialModule { }
