import { Component } from '@angular/core';
import { DatosGeneralesService } from './services/datos-generales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public datosGeneralesService: DatosGeneralesService) {  }

  title = 'REQDC7468';
}
