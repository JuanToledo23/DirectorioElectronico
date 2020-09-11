import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';
import { MatDialog } from '@angular/material/dialog';
import { AutoridadModal } from './modales/autoridadModal';
import { EducacionModal } from './modales/educacionModal.component';

@Component({
  selector: 'app-nuevo-funcionario',
  templateUrl: './nuevo-funcionario.component.html',
  styleUrls: ['./nuevo-funcionario.component.scss']
})
export class NuevoFuncionarioComponent{
	public materias = [
		{ id: 1, name: 'Civil', estatus: false },
		{ id: 2, name: 'Administrativo', estatus: false },
		{ id: 3, name: 'Competencia económica', estatus: false },
		{ id: 4, name: 'Fiscal', estatus: false },
		{ id: 5, name: 'Laboral', estatus: false }
	];

	public table: any;

	constructor(
		public datosGeneralesService: DatosGeneralesService, 
		public dialog: MatDialog
	) {
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

	openModalAutoridad() {
		const dialogRef = this.dialog.open(AutoridadModal);
	}

	agregarEducacion(){
		this.dialog.open(EducacionModal);
	}
}
