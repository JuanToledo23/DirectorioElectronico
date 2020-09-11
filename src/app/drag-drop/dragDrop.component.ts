import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'drag-drop-directorio',
    templateUrl: './dragDrop.component.html',
    styleUrls: ['./dragDrop.component.scss']

})
export class DragDropComponent{

    archivos = {
        cantidadArchivos: 0,
        documentos: []
    }
    
    @ViewChild('file', {static: false}) file: ElementRef;

    constructor(){
        
    }

    cargarArchivo(event){
        event.preventDefault();
        event.stopPropagation();

        this.archivos.cantidadArchivos = this.archivos.cantidadArchivos + this.file.nativeElement.files.length;
        for(let archivo of this.file.nativeElement.files){
            this.archivos.documentos.push(archivo);
        }
    }

    eliminarArchivo(index){
        this.archivos.documentos.splice(index, 1);
    }
}