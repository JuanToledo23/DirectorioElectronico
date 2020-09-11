import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosGeneralesService } from '../services/datos-generales.service';
import { MatDialog } from '@angular/material/dialog';
import { InstitucionAgregarRama } from './modales/institucionAgregarRama';
import { Router } from '@angular/router';
import { TreeComponent } from 'angular-tree-component';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.scss']
})

export class InstitucionComponent implements OnInit {
  @ViewChild('tree', {static: false}) treeComponent: TreeComponent;
  filter = '';
  options = {};
  constructor(public datosGeneralesService: DatosGeneralesService, public dialog: MatDialog, public router: Router) {
    jQuery(() => {
      this.table = $('#registroI').DataTable({
        "paging": false,
        "searching":false,
        "info":false,
        "ordering":false
      });
    });
   }
   table: any;
   topParent: any;
   nodeSelected: any;

  ngOnInit() {
  }

  filterTree() {
    this.treeComponent.treeModel.filterNodes(this.filter);
  }

  onEvent(e) {
    this.datosGeneralesService.nodesInstituciones.forEach(element => {
      element.focused = false;
    });
    this.parent(e.node);
    this.datosGeneralesService.nodesInstituciones[this.topParent.index].focused = true;
    this.nodeSelected = e;
  }
  parent(node) {
    if (node.level !== 1) {
      this.parent(node.parent);
    } else if (node.level === 1) {
      this.topParent = node;
    }
  }

  agregarRamaDialog() {
    const dialogRef = this.dialog.open(InstitucionAgregarRama, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['nuevaInstitucion']);
        this.datosGeneralesService.nodeSelected = this.nodeSelected;
      }
    });
  }

}
