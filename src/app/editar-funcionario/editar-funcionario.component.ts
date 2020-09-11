import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioGuardarCambios } from './modales/funcionarioGuardarCambios';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.scss']
})
export class EditarFuncionarioComponent implements OnInit {

  constructor(public datosGeneralesService: DatosGeneralesService, private route: ActivatedRoute, public dialog: MatDialog) { }

  id: number;
  private subscribeFuncionario: any;
  funcionarioActivo;


  ngOnInit() {
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

  materias = [
    {id: 1, name: 'Civil', status:true, active:true},
    {id: 2, name: 'Administrativo', status:false, active:false},
    {id: 3, name: 'Competencia económica', status:false, active:false},
    {id: 4, name: 'Fiscal', status:true, active:true},
    {id: 5, name: 'Laboral', status:false, active:false}
  ];

  guardarCambios() {
      const dialogRef = this.dialog.open(FuncionarioGuardarCambios, {
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(result => {
      });
      console.log(dialogRef);
  }

}
