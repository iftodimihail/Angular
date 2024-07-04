import { Component } from "@angular/core";
import { DashboardItemComponent } from "./dashboard/shared/dashboard-item/dashboard-item.component";
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
