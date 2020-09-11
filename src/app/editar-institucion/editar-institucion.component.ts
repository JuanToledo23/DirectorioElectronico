import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-institucion',
  templateUrl: './editar-institucion.component.html',
  styleUrls: ['./editar-institucion.component.scss']
})
export class EditarInstitucionComponent implements OnInit {
  /*Slider*/
  checked = true;
  disabled = false;
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor() { }

  ngOnInit() {
  }
  
  materias = [
    {id: 1, name: 'Civil', status:true, active:true},
    {id: 2, name: 'Fiscal', status:true, active:true}
  ];
}
