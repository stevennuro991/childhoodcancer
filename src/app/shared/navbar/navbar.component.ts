import { Component, OnInit } from '@angular/core';


export interface RouteInfo{
path:string;
title:string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
 
  {
    path: "/events",
    title: "Events"
  },
  {
    path: "/donate",
    title: "Donate Now"
  },
  {
    path: "/volunteer",
    title: "Volunteer",
  },
  {
    path: "/contact",
    title: "Contact Us",
  },
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public isCollapsed =true;
  public menuItems: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem: any) => menuItem)
  }

}
