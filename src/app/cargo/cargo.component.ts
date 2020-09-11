import { Component, OnInit, OnDestroy} from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { evaluacionComentarios } from '../funcionario/modales/evaluacionComentarios';
import { evaluar } from '../funcionario/modales/evaluar';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {
  table: any;
  constructor(public datosGeneralesService: DatosGeneralesService, private route: ActivatedRoute, public dialog: MatDialog) {
    jQuery(() =>  {
      this.table = $('#funcionarios').DataTable({
        ordering: true
      });
      this.table = $('#registroHistorial').DataTable({
        "paging": false,
        "searching":false,
        "info":false,
        ordering:true
      });
    });
  }
  id: number;
  private subscribeCargo: any;
  cargoActivo;
  ngOnInit() {
    this.subscribeCargo = this.route.params.subscribe(params => {
      this.id = +params.id;
      console.log(this.id);
      this.datosGeneralesService.funcionarios.forEach(element => {
        if (element.id === this.id) {
          this.cargoActivo = element;
        }
      });
      console.log(this.cargoActivo);
    });
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

  ngOnDestroy() {
    this.subscribeCargo.unsubscribe();
  }

  panelOpenState = false;

}


