import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Input() imagenBg!: string;
  @Input() titulo!: string;
  @Input() descripcion!: string;

  constructor() {}

  ngOnInit(): void {
    this.imagenBg = '../../../../../assets/imgs/huacachina.jpg';
  }

}
