import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from 'src/app/services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'institucionAgregarRama',
    templateUrl: 'institucionAgregarRama.html',
    styleUrls: ['./dialog.scss']
  })
  export class InstitucionAgregarRama implements OnInit{

    constructor(public dialogRef: MatDialogRef<InstitucionAgregarRama>, public datosGeneralesService: DatosGeneralesService,
                private route: ActivatedRoute) {}


    ngOnInit(): void {

    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
