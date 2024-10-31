import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit{

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
