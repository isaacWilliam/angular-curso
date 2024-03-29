import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  constructor() {

  }

  ngOnInit() {
    this.items = [
      { label: 'Cursos', icon: 'pi pi-fw pi-calendar',  routerLink: 'cursos', routerLinkActiveOptions: true},
      { label: 'Unsub. Rxjs', icon: 'pi pi-fw pi-list',  routerLink: 'unsub', routerLinkActiveOptions: true},
      { label: 'Upload', icon: 'pi pi-fw pi-upload',  routerLink: 'upload', routerLinkActiveOptions: true},
      { label: 'Busca Reativa', icon: 'pi pi-fw pi-search',  routerLink: 'busca', routerLinkActiveOptions: true},
    ];

  }
}
