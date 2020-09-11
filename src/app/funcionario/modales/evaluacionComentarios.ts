import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from 'src/app/services/datos-generales.service';

@Component({
    selector: 'evaluacionComentarios',
    templateUrl: 'evaluacionComentarios.html',
    styleUrls: ['./dialog.scss']
  })
  export class evaluacionComentarios implements OnInit{

    constructor(public dialogRef: MatDialogRef<evaluacionComentarios>, public datosGeneralesService: DatosGeneralesService) {}

    ngOnInit() {
      this.datosGeneralesService.marcarEstrellas('4.67');
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
