import { Component, OnInit } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public datosGeneralesService: DatosGeneralesService) { 
    this.datosGeneralesService.login = false;
  }

  ngOnInit() {
  }

  showHeader() {
    this.datosGeneralesService.login = true;
  }

}
