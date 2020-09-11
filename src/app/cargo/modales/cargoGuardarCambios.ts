import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'cargo-guardar-cambios',
    templateUrl: 'cargoGuardarCambios.html',
    styleUrls: ['./dialog.scss']
  })
  export class CargoGuardarCambioDialog {
  
    constructor(
      public dialogRef: MatDialogRef<CargoGuardarCambioDialog>) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
}