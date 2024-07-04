import { Component } from "@angular/core";
import { DUMMY_TRAFFIC_DATA } from "../../constants";

@Component({
  selector: "app-traffic",
  standalone: true,
  imports: [],
  templateUrl: "./traffic.component.html",
  styleUrl: "./traffic.component.css",
})
export class TrafficComponent {
  trafficData = DUMMY_TRAFFIC_DATA;
  maxTraffic = Math.max(...this.trafficData.map((data) => data.value));
}
