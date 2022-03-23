import {Routes} from '@angular/router';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { BlogComponent } from 'src/app/pages/blog/blog.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { DonateComponent } from 'src/app/pages/donate/donate.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { VolunteersComponent } from 'src/app/pages/volunteers/volunteers.component';





export const MainLayoutRoutes:Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'blog',component:BlogComponent},
    {path:'contact',component:ContactComponent},
    {path:'events',component:EventsComponent},
    {path:'donate',component:DonateComponent},
    {path:'volunteer',component:VolunteersComponent}
]