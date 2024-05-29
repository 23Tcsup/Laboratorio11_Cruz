import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule , Validators} from '@angular/forms';

@Component({
  selector: 'app-optic',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './optic.component.html',
  styleUrl: './optic.component.css'
})
export class OpticComponent {

  opticForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.opticForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Formulario enviado');
    if (this.opticForm.valid) {
      const { nombre, telefono, fecha, hora, descripcion } = this.opticForm.value;
      console.log('Nombre:', nombre);
      console.log('Teléfono:', telefono);
      console.log('Fecha de cita:', fecha);
      console.log('Hora de cita:', hora);
      console.log('Descripción de la solicitud:', descripcion);
    } else {
      console.log('Formulario no es válido');
    }
  }
}
