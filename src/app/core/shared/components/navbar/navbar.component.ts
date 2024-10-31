import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterService } from '../../services/event-emitter.service';
import { AuthService } from 'src/app/public/login/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  pintar: number = 0;
  ruta: string = '';
  listaNavbar: string[] = [
    'Tours',
    'Hoteles',
    'Paquetes',
    'Contactanos',
    'Carrito',
  ];
  rutasAdmin: string[] = ['/doctores', '/citas'];
  rutaActiva: string = '';
  rolAdmin: boolean = false;
  mostrarSubMenu = false;

  imagenSeleccionada: string | ArrayBuffer | null = null;

  token:any
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private eventEmitterService: EventEmitterService, private authService:AuthService
  ) {
    this.rutaActiva = this.router.url;
    let token = this.authService.obtenerToken()
    this.token = token

    this.traerImagenCliente(this.token);
    this.eventEmitterService.localStorageUpdate$.subscribe((key: string) => {
      if(key==='token'){
        this.token = this.authService.obtenerToken();
        this.traerImagenCliente(this.token);
      }
    });

  }

  ngOnInit(): void {
    this.eventEmitterService.getRol().subscribe((val) => (this.rolAdmin = val));
    if (this.rolAdmin) {
    } else {
    }

  }

  traerImagenCliente(token:any){
    if(token != null){
      console.log(token)
      this.authService.traerImagegnCliente(token.imagen).subscribe(response=>{
        const reader = new FileReader();
        reader.onload = () => {
          this.imagenSeleccionada = reader.result;
        };
        reader.readAsDataURL(response);
      })
    }
  }

  irRuta(valor: number) {
    switch (valor) {
      case 1:
        this.pintar = 1;
        this.ruta = '/tours';
        break;
      case 2:
        this.pintar = 2;
        this.ruta = '/hoteles';
        break;
      case 3:
        this.pintar = 3;
        this.ruta = '/paquetes';
        break;
      case 4:
        this.pintar = 4;
        this.ruta = '/contactanos';
        break;
      case 5:
        this.pintar = 5;
        this.ruta = '/carrito';
        break;
      case 7:
        this.pintar = 7;
        this.ruta = '/login-registro';
        break;
    }
    this.router.navigate([this.ruta]);
  }

  irHome(){
    this.router.navigate(['/home']);
    this.pintar = 8;
  }

  logout() {
    sessionStorage.removeItem('token');

    // emitir evento
    this.eventEmitterService.notificarActualizacion('token');


    this.router.navigate(['/login-registro']);

  }


  cuenta() {
    this.router.navigate(['/cliente-ver-perfil']);
  }

}
