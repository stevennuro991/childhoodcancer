import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports:[RouterModule,CommonModule,NgbModule],
    declarations:[NavbarComponent],
    exports:[NavbarComponent]
})

export class NavbarModule{};