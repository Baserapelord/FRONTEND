import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-tours',
  templateUrl: './detalle-tours.component.html',
  styleUrls: ['./detalle-tours.component.scss']
})
export class DetalleToursComponent implements OnInit{

  img1!: string;
  img2!: string;
  img3!: string;
  img4!: string;
  img5!: string;

  titulo!: string; 
  descripcion1!: string;
  descripcion2!: string;
  itinerario!: string;
  nivelDificultad!: string;
  deberaLlevar!: string[];
  recomendaciones!: string[];
  horaSalida!: string;
  recojo!: string;
  salida!: string;
  retorno!: string;
  sistemasSeguridad!: string[];

  selected = 'todos';

  ngOnInit(): void {
    this.img1 = '../../../../../assets/imgs/montana7-colores.jpg';
    this.img2 = '../../../../../assets/imgs/7-lagunas.jpg';
    this.img3 = '../../../../../assets/imgs/Arequipa.jpg';
    this.img4 = '../../../../../assets/imgs/Ayacucho.jpg';
    this.img5 = '../../../../../assets/imgs/Cuzco.jpg';


    this.titulo = 'Caminata a la Montaña de 7 Colores';
    this.descripcion1 = 'Nuestro destino nunca es un lugar, sino una nueva forma de ver las cosas.';
    this.descripcion2 = 'Descubre una de las maravillas naturales en la zona sur del Cusco, La montaña de 7 colores. Las coloridas tierras se deben al oxido de los minerales y se mostro al mundo en la última década debido al deshielo de nuestros nevados.';
    this.itinerario = '04:00 am - 4:30 am: Los recogeremos temprano de su hotel en Cusco y partiremos con rumbo al sur de la ciudad, llegaremos al sendero de Cusipata en 3 horas, aquí tendremos tiempo suficiente para tomar nuestro desayuno local, luego de ello comenzaremos la caminata a la montaña de siete colores la duración de la caminata será de 1 hora y 30 minutos aproximadamente (dependerá de la condición física que tengan) en el trayecto vamos a tener vistas increíbles del lugar podremos observar alpacas, llamas y si tenemos suerte podremos ver chinchillas y vicuñas; muchas montañas rojas son también un punto culminante de esta parte del tour a la montaña de 7 colores en Cusco. Al llegar a la Montaña de 7 colores quedarán maravillados de su belleza. Ya en la cumbre tendrá tiempo para explorar la zona y tomarse fotografías. Al momento en que nuestros guías indiquen Iniciaremos nuestro descenso para luego tomar los buses que nos llevaran al restaurante donde disfrutaremos de un almuerzo loca y posteriormente retornar a la ciudad del Cusco. <br> <br> 18:00 pm: Llegada a la ciudad de Cusco. (Desembarque lugar céntrico)';
    this.nivelDificultad = 'Intermedio - III';
    this.deberaLlevar = ['Mascarilla (Obligatorio)', 'Protector facial (Obligatorio)', 'Mochila', 'Bloqueador Solar', 'Agua (2L)', 'Snacks', 'Sombrero', 'Casaca impermeable/Poncho de lluvia', 'Dinero extra', 'Cámara fotográfica', 'Batería externa', 'Lentes de sol', 'Papel higiénico', 'Alcohol en gel', 'Medicamentos personales'];
    this.recomendaciones = ['Se le recomienda utilizar zapatos cómodos de caminata, pantalonetas y camisetas Dry Fit. '];
    this.horaSalida = '6:00am';
    this.recojo = '4:00 am – 4:30am';
    this.salida = '5:00am aproximadamente';
    this.retorno = '6:00 pm – 7:00 pm aproximadamente (Si desean regresar antes, preguntar por el servicio privado)';
    this.sistemasSeguridad = ['Todas nuestras unidades cuentan con los protocolos de seguridad y salud establecidos por el MINSA.', 'Alcohol en gel y Jabón líquido para el lavado de manos.', 'Pediluvio de desinfección de calzado con hipoclorito de sodio (lejía) al 0.1%.'];
  }
 

}
