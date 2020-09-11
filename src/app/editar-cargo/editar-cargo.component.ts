import { Component, OnInit } from '@angular/core';
import { CargoGuardarCambioDialog } from '../cargo/modales/cargoGuardarCambios';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.scss']
})
export class EditarCargoComponent implements OnInit {
  cargosFuncionario = [
    {name:'Ministro Presidente de la Suprema Corte de Justicia', status:'false'}
  ];
  /*Slider*/
  checked = true;
  disabled = false;
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }


  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(CargoGuardarCambioDialog, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {

    });
    console.log(dialogRef);
  }
  ngOnInit() {
  }
  materias = [
    {id: 1, name: 'Civil', status:true, active:true},
    {id: 2, name: 'Administrativo', status:false, active:false},
    {id: 3, name: 'Competencia económica', status:false, active:false},
    {id: 4, name: 'Fiscal', status:true, active:true},
    {id: 5, name: 'Laboral', status:false, active:false}
  ];


}
