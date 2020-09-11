import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from 'src/app/services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'autoridadGuardarCambios',
    templateUrl: 'autoridadGuardarCambios.html',
    styleUrls: ['./dialog.scss']
  })
  export class AutoridadGuardarCambios implements OnInit{
  
    constructor(public dialogRef: MatDialogRef<AutoridadGuardarCambios>, public datosGeneralesService: DatosGeneralesService,
                private route: ActivatedRoute) {}
  

    ngOnInit(): void {
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
}