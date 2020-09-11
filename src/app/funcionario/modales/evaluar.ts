import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
    selector: 'evaluar',
    templateUrl: 'evaluar.html',
    styleUrls: ['./dialog.scss']
  })
  export class evaluar {

    constructor(public dialogRef: MatDialogRef<evaluar>) {}
    stars = [
      {id: 1, status: false},
      {id: 2, status: false},
      {id: 3, status: false},
      {id: 4, status: false},
      {id: 5, status: false}
    ];
    valorSeleccionado = 0;
    seleccionarCantidadEstrellas(id: number) {
      this.valorSeleccionado = id;
      this.seleccionarEstrellas(id);
    }

    regresarEstrellaSeleccionadas() {
      this.seleccionarEstrellas(this.valorSeleccionado);
    }

    seleccionarEstrellas(cantidad: number) {
      this.stars.forEach(element => {
        element.status = false;
        if (element.id <= cantidad) {
          element.status = true;
        }
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
