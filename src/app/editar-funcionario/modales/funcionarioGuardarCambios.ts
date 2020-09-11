import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from 'src/app/services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'funcionarioGuardarCambios',
    templateUrl: 'funcionarioGuardarCambios.html',
    styleUrls: ['./dialog.scss']
  })
  export class FuncionarioGuardarCambios implements OnInit{
  
    constructor(public dialogRef: MatDialogRef<FuncionarioGuardarCambios>, public datosGeneralesService: DatosGeneralesService,
                private route: ActivatedRoute) {}
  
    id: number;
    private subscribeFuncionario: any;
    funcionarioActivo;

    ngOnInit(): void {
      this.subscribeFuncionario = this.route.params.subscribe(params => {
        this.id = +params.id;
        console.log(this.id);
        this.datosGeneralesService.funcionarios.forEach(element => {
          if (element.id === this.id) {
            this.funcionarioActivo = element;
          }
        });
        console.log(this.funcionarioActivo);
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
}