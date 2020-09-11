import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public datosGeneralesService: DatosGeneralesService) { }

  buttons = [
    {link: '/nuevoFuncionario', name: 'NUEVO FUNCIONARIO', class: 'mat-button mat-button-base'},
    {link: '/nuevaInstitucion', name: 'NUEVA AUTORIDAD', class: 'mat-button mat-button-base'},
    {link: '/nuevoContacto', name: 'NUEVO CONTACTO', class: 'mat-button mat-button-base'},
  ];


  ngOnInit() {
    this.buttons.forEach(element => {
      element.class = 'mat-button mat-button-base';
    });
  }

  regresaPrincipal() {
    this.buttons.forEach(element => {
      element.class = 'mat-button mat-button-base';
    });
  }

  buttonClick(button) {
    this.buttons.forEach(element => {
      element.class = 'mat-button mat-button-base';
    });
    button.class = 'mat-button mat-button-base buttonActive';
  }


}
