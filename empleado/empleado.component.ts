import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre = "Gaston";
  apellido = "Apellido";
  private edad = 16;
  getEdad(){
    return this.edad;
  }
  llamaFuncion(value:String){}

  habilitacionCuadro = false;
  usoRegistrado = false;

  textoDeRegistro = "No hay nadie registrado";

  setUsuarioRegistrado(event : Event){
    //alert("Usuario registrado");
    if((<HTMLInputElement>event.target).value == "si")
      this.textoDeRegistro = "Usuario registrado";
    else
      this.textoDeRegistro = "Usuario NO registrado";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
