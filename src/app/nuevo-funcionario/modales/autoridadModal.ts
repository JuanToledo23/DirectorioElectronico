import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from 'src/app/services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'autoridadModal',
    templateUrl: 'autoridadModal.html',
    styleUrls: ['./dialog.scss']
  })
  export class AutoridadModal implements OnInit{
    table: any;
    materias = [
      {id: 1, name: 'Civil', estatus:false},
      {id: 2, name: 'Administrativo', estatus:false},
      {id: 3, name: 'Competencia económica', estatus:false},
      {id: 4, name: 'Fiscal', estatus:false},
      {id: 5, name: 'Laboral', estatus:false}
    ];

    constructor(public dialogRef: MatDialogRef<AutoridadModal>, public datosGeneralesService: DatosGeneralesService, private route: ActivatedRoute) {
      jQuery(() =>  {
        this.table = $('#busquedaAutoridad').DataTable({
          "paging": false,
          "searching":false,
          "info":false,
          ordering:true
        });
      });
    }

    ngOnInit(): void {

    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
