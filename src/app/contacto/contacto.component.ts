import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  table: any;
  constructor(public datosGeneralesService: DatosGeneralesService, private route: ActivatedRoute) { 
    jQuery(() =>  {
      this.table = $('#funcionarios').DataTable({
        "paging": false,
        "searching":false,
        "info":false,
        ordering:true
      });
    });
  }

  ngOnInit() {
  }

}
