import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.scss'],
})
export class SidebarComponent implements OnInit {
  selected = 'todos';
  formTipos!: FormGroup;
  formCategorias!: FormGroup;
  valor!: number;

  imgBG1!: String;
  imgBG2!: String;
  imgBG3!: String;

  constructor(
    private fbTipos: FormBuilder,
    private fbCategorias: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.imgBG1 = '../../../../../assets/imgs/montana7-colores.jpg';
    this.imgBG2 = '../../../../../assets/imgs/7-lagunas.jpg';
    this.imgBG3 = '../../../../../assets/imgs/palccoyo.jpg';

    // TIPOS
    this.formTipos = this.fbTipos.group({
      selectedOption: ['1'],
    });

    // CATEGORIAS
    this.formCategorias = this.fbCategorias.group({
      selectedOption: ['1'],
    });

    // Nos suscribimos a los cambios de selectedOption en formTipos
    this.formTipos.get('selectedOption')?.valueChanges.subscribe((value) => {
      // Redirigir a una URL diferente según el valor seleccionado
      if (value === '1') {
        this.router.navigate(['/tours-listar']);
      } else if (value === '2') {
        this.router.navigate(['/paquetes']);
      }
    });
  }
}
