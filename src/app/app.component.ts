import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas: any[] = [];

  //Metodo para agregar cita 
  agregarCita(cita: any) {
    this.listCitas.push(cita);
    console.log(this.listCitas);
  }

  //Metodo para eliminar cita
  eliminarCita(index: any) {
    this.listCitas.splice(index, 1);
  }
}
