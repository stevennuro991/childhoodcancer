import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {MainLayoutRoutes} from './main-layout.routing';
import { HomeComponent } from "src/app/pages/home/home.component";
import { AboutComponent } from "src/app/pages/about/about.component";
import { BlogComponent } from "src/app/pages/blog/blog.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { EventsComponent } from "src/app/pages/events/events.component";
import { DonateComponent } from "src/app/pages/donate/donate.component";
import { NewslettersComponent } from "src/app/pages/newsletters/newsletters.component";
import { TeamComponent } from "src/app/pages/team/team.component";
import { VolunteersComponent } from "src/app/pages/volunteers/volunteers.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(MainLayoutRoutes),
        FormsModule,
        NgbModule
    ],
    declarations:[
        HomeComponent,
        AboutComponent,
        BlogComponent,
        ContactComponent,
        EventsComponent,
        DonateComponent,
        NewslettersComponent,
        TeamComponent,
        VolunteersComponent,

    ]
})

export class MainLayoutModule{}