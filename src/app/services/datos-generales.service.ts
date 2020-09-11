import { Injectable } from '@angular/core';

// interface Funcionario {
//   id: number,
//   nombre?: string;
//   apellidos?: string;
//   idCargo?: string;
//   cargo?: string;
//   idInstitucion?: string;
//   institucion?: string;
//   nivelGobierno?: string;
//   poder?: string;
//   materia?: string;
//   estado?: string;
// }

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {

  constructor() { }
  user = 'Juan Alberto Toledo Tello';
  login = true;

  funcionarioActivo;

  resultadosbusqueda = [
    {id: 0, tipo: 'Funcionario', nombre: 'Luis Fernando Hernández Romero', estado: 'Activo'},
    {id: 1, tipo: 'Institución', nombre: 'Patricia González Becerra', estado: 'Inactivo'},
    {id: 2, tipo: 'Funcionario', nombre: 'José Alejandro Juárez Gordillo', estado: 'Activo'},
    {id: 3, tipo: 'Contacto', nombre: 'Gabriel Ignacio López Ramírez', estado: 'Activo'},
  ];
  funcionarios = [
    {id: 0, nombre: 'Luis Fernando', apellidos: 'Hernández Romero', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 1, nombre: 'Patricia', apellidos: 'González Becerra', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 2, nombre: 'José Alejandro', apellidos: 'Juárez Gordillo', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Hidalgo'},
    {id: 3, nombre: 'Gabriel Ignacio', apellidos: 'López Ramirez', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Ejecutivo', materia: 'Fiscal', estado:'Hidalgo'},
    {id: 4, nombre: 'Luis Fernando', apellidos: 'Hernández Romero', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 5, nombre: 'Patricia', apellidos: 'González Becerra', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 6, nombre: 'José Alejandro', apellidos: 'Juárez Gordillo', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Hidalgo'},
    {id: 7, nombre: 'Gabriel Ignacio', apellidos: 'López Ramirez', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Ejecutivo', materia: 'Fiscal', estado:'Hidalgo'},
    {id: 8, nombre: 'Luis Fernando', apellidos: 'Hernández Romero', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 9, nombre: 'Patricia', apellidos: 'González Becerra', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 10, nombre: 'José Alejandro', apellidos: 'Juárez Gordillo', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Hidalgo'},
    {id: 11, nombre: 'Gabriel Ignacio', apellidos: 'López Ramirez', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Ejecutivo', materia: 'Fiscal', estado:'Hidalgo'},
    {id: 12, nombre: 'Luis Fernando', apellidos: 'Hernández Romero', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 13, nombre: 'Patricia', apellidos: 'González Becerra', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Guerrero'},
    {id: 14, nombre: 'José Alejandro', apellidos: 'Juárez Gordillo', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil', estado:'Hidalgo'},
    {id: 15, nombre: 'Gabriel Ignacio', apellidos: 'López Ramirez', idCargo: 'mpscj', cargo: 'Ministro Presidente de la Suprema Corte de Justicia', idInstitucion: 'scjn', institucion: 'Suprema Corte de Justicia de la Nacion', nivelGobierno: 'Federal', poder: 'Ejecutivo', materia: 'Fiscal', estado:'Hidalgo'},
  ];
  funcionarioSeleccionado = this.funcionarios[0];

  instituciones = [
    {id: 0, pais: 'México', estado: 'Ciudad de México', municipio: 'Cuauhtémoc', nivelGobierno: 'Federal', poder: 'Judicial', materia: 'Civil'}
  ];
  contactos = [
    {estrella:'4.0',nombre:'Gabriel Ignacio López Ramirez', telefono:'55 2233 4455', correo:'correo@dominio.com.mx', enlace:'Arvin Aguilar Villela', eliminar:'eliminar'},
    {estrella:'3.8',nombre:'Luis Fernando Hernández Romero', telefono:'55 2233 4455', correo:'correo@dominio.com.mx', enlace:'Arvin Aguilar Villela', eliminar:'eliminar'},
    {estrella:'3.7',nombre:'José Alejandro Juárez Gordillo', telefono:'55 2233 4455', correo:'correo@dominio.com.mx', enlace:'Arvin Aguilar Villela', eliminar:'eliminar'},
  ];
  
  historialFuncionarios = [
    {funcionario:'María Magdalena Malpica Cervantes', periodo:'01/01/2015 - 01/01/2019'},
    {funcionario:'Fernando Juárez Gómez', periodo:'01/01/2055 - 01/01/2015'},
    {funcionario:'Carlos Eduardo Cruz Torres', periodo:'01/01/2000 - 01/01/2005'}
  ];
  nodeSelected: any;
  nodesInstituciones = [
    {
      name: 'Suprema Corte de Justicia de la Nación',
      children: [
        {name: 'Secretaría General de Acuerdos'},
        {
          name: 'Secretaría General de la Presidencia',
          children: [
            {name: 'Unidad General de Enlace con los Poderes Federales'},
            {name: 'Unidad General de Enlace con los Poderes Federales'},
            {name: 'Unidad General de Enlace con los Poderes Federales'},
            {name: 'Juan'},
          ]
        },
        {name: 'Tercera sala de la Suprema Corte de Jsuticia de la Nación'},
        {name: 'Cuarta sala de la Suprema Corte de Jsuticia de la Nación'},
        {name: 'Cuarta sala de la Suprema Corte de Jsuticia de la Nación'},
      ],
      focused: false,
      parent: true
    },
    {
      name: 'Suprema Corte de Justicia de la Nación',
      children: [
        {name: 'Secretaría General de Acuerdos'},
        {
          name: 'Secretaría General de la Presidencia',
          children: [
            {name: 'Juan'},
            {name: 'Unidad General de Enlace con los Poderes Federales'},
            {name: 'Unidad General de Enlace con los Poderes Federales'},
          ]
        },
        {name: 'Tercera sala de la Suprema Corte de Jsuticia de la Nación'},
        {name: 'Cuarta sala de la Suprema Corte de Jsuticia de la Nación'},
        {name: 'Cuarta sala de la Suprema Corte de Jsuticia de la Nación'},
      ],
      focused: false,
      parent: true
    },
    {
      name: 'Suprema Corte de Justicia de la Nación',
      children: [
        {name: 'Secretaría General de Acuerdos'},
        {
          name: 'Secretaría General de la Presidencia',
          children: [
            {name: 'Unidad General de Enlace con los Poderes Federales'},
            {name: 'Unidad General de Enlace con los Poderes Federales'},
            {name: 'Unidad General de Enlace con los Poderes Federales'},
          ]
        },
        {name: 'Tercera sala de la Suprema Corte de Jsuticia de la Nación'},
        {name: 'Cuarta sala de la Suprema Corte de Jsuticia de la Nación'},
        {name: 'Cuarta sala de la Suprema Corte de Jsuticia de la Nación'},
      ],
      focused: false,
      parent: true
    },
  ];
  nodesEstructuraOrganica = [
    {
      name: 'Ministro Presidente - Arturo Zaldívar Lelo de Larrea',
      children: [
        {
          name: 'Ministra - Ana Margarita Ríos',
          children: [
            {name: 'Ministro - José Fernández'},
            {name: 'Ministro - José Fernández'},
            {name: 'Ministro - José Fernández'},
          ]
        },
        {name: 'Ministro - Jorge Mario Pardo'},
        {name: 'Ministro - Jorge Mario Pardo'},
        {name: 'Ministro - Jorge Mario Pardo'},
      ],
      focused: false,
      parent: true
    },
    {
      name: 'Ministro Presidente - Arturo Zaldívar Lelo de Larrea',
      children: [
        {
          name: 'Ministra - Ana Margarita Ríos',
          children: [
            {name: 'Ministro - José Fernández'},
            {name: 'Ministro - José Fernández'},
            {name: 'Ministro - José Fernández'},
          ]
        },
        {name: 'Ministro - Jorge Mario Pardo'},
        {name: 'Ministro - Jorge Mario Pardo'},
        {name: 'Ministro - Jorge Mario Pardo'},
      ],
      focused: false,
      parent: true
    },
    {
      name: 'Ministro Presidente - Arturo Zaldívar Lelo de Larrea',
      children: [
        {
          name: 'Ministra - Ana Margarita Ríos',
          children: [
            {name: 'Ministro - José Fernández'},
            {name: 'Ministro - José Fernández'},
            {name: 'Ministro - José Fernández'},
          ]
        },
        {name: 'Ministro - Jorge Mario Pardo'},
        {name: 'Ministro - Jorge Mario Pardo'},
        {name: 'Ministro - Jorge Mario Pardo'},
      ],
      focused: false,
      parent: true
    },
  ];

  stars = [
    {id: 1, status: false, esDecimal: false},
    {id: 2, status: false, esDecimal: false},
    {id: 3, status: false, esDecimal: false},
    {id: 4, status: false, esDecimal: false},
    {id: 5, status: false, esDecimal: false}
  ];
  valorDecimal = '0%';

  marcarEstrellas(cantidad) {
    let primerDecimal = true;
    const numbers = cantidad.split('.');
    this.stars.forEach(element => {
      element.status = false;
      if (element.id <= +numbers[0]) {
        element.status = true;
      } else {
        if (primerDecimal) {
          primerDecimal = false;
          element.esDecimal = true;
          this.valorDecimal = numbers[1] + '%';
        }
      }
    });
  }

}
