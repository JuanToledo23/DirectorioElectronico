import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public mostrarBuscador = false;

	public valorBuscador = "";

	public buttons = [
		{link: '/nuevoFuncionario', name: 'NUEVO FUNCIONARIO', class: 'mat-button mat-button-base'},
		{link: '/nuevaInstitucion', name: 'NUEVA AUTORIDAD', class: 'mat-button mat-button-base'},
		{link: '/nuevoContacto', name: 'NUEVO CONTACTO', class: 'mat-button mat-button-base'},
	];

	constructor(
		public datosGeneralesService: DatosGeneralesService,
		public router: Router
	) {

	}

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

	buscarResultado(){
		if(this.valorBuscador != ''){
			this.valorBuscador = '';
			this.mostrarBuscador = false;
			this.router.navigate(['/resultados']);
		}
	}
}
