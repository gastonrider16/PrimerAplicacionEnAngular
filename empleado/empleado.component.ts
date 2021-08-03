import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre = "Gaston"
  apellido = "Apellido"
  private edad = 16
  getEdad(){
    return this.edad;
  }
  llamaFuncion(value:String){}
  
  constructor() { }

  ngOnInit(): void {
  }

}
