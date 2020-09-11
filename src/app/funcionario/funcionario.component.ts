import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { evaluacionComentarios } from './modales/evaluacionComentarios';
import { evaluar } from './modales/evaluar';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit, OnDestroy {

  constructor(public datosGeneralesService: DatosGeneralesService, private route: ActivatedRoute, public dialog: MatDialog) {

  }
  table: any;
  id: number;
  private subscribeFuncionario: any;
  funcionarioActivo;

  primeraVez = true;

  ngOnInit() {
    this.datosGeneralesService.marcarEstrellas('4.67');
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

  prueba(e) {
      if(e.index === 3 && this.primeraVez) {
        this.primeraVez = false;
        console.log(e);
        jQuery(() => {
          this.table = $('#registroContactos').DataTable({
            ordering: true,
            "searching": false,
            "lengthChange": false,
            "paging": false,
            "info": false
          });
        });
      }
  }
  ngOnDestroy() {
    this.subscribeFuncionario.unsubscribe();
  }

  openModalEvaluacionComentarios() {
    const dialogRef = this.dialog.open(evaluacionComentarios, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openModalEvaluar() {
    const dialogRef = this.dialog.open(evaluar, {
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
