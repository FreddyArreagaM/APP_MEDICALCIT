import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formularioIncorrecto = false;

  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita() {
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    //Creacion de objeto para enviar al componente padre almacenando los datos del formulario
    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA);
    //Seteo del valor de la cita en el componente hijo para enviar el dato al padre appcomponent
    this.nuevaCita.emit(CITA);

    this.resetCampos();
  }

  //Metodo para resetar los campos
  resetCampos() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
