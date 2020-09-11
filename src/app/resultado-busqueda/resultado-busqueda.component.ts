import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.scss']
})
export class ResultadoBusquedaComponent implements OnInit {
  table: any;
  constructor(public datosGeneralesService: DatosGeneralesService) { 
    jQuery(() =>  {
      this.table = $('#resultados').DataTable({
        language: {
          paginate: {
            first:      'Premier',
            previous:   '<img src="/assets/img/icons/triangle.svg" class="flechas1" />',
            next:       '<img src="/assets/img/icons/triangle.svg" class="flechas2" />',
            last:       'Dernier',
          },
          search: 'Buscar:',
          zeroRecords: 'No se encontraron resultados'
        }
      });
    });
  }

  ngOnInit() {
  }

}
