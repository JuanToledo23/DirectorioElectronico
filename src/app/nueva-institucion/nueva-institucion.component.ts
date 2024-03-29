import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosGeneralesService } from '../services/datos-generales.service';

@Component({
  selector: 'app-nueva-institucion',
  templateUrl: './nueva-institucion.component.html',
  styleUrls: ['./nueva-institucion.component.scss']
})
export class NuevaInstitucionComponent implements OnInit {
  materias = [
    { id: 1, name: 'Civil', estatus: 'false' },
    { id: 2, name: 'Administrativo', estatus: 'false' },
    { id: 3, name: 'Competencia económica', estatus: 'false' },
    { id: 4, name: 'Fiscal', estatus: 'false' },
    { id: 5, name: 'Laboral', estatus: 'false' },
    { id: 6, name: 'Penal', estatus: 'false' },
    { id: 7, name: 'Electoral', estatus: 'false' }
  ];

  constructor(public router: Router, public datosGeneralesService: DatosGeneralesService) { }

  stopNode = this.datosGeneralesService.nodeSelected;
  ngOnInit() {
    this.datosGeneralesService.nodesInstituciones.filter(topParent => {
      console.log(topParent);
      if (topParent.children) {

      }
    });
  }

  getParent() {
    this.datosGeneralesService.nodesInstituciones.forEach(topParent => {
    });
  }

}
