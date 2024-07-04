import { Component, input, output, signal } from "@angular/core";

import { Ticket } from "../ticket.model";

@Component({
  selector: "app-ticket",
  standalone: true,
  imports: [],
  templateUrl: "./ticket.component.html",
  styleUrl: "./ticket.component.css",
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  markAsComplete = output<string>();

  detailsVisible = signal(false);

  onToggleTicketDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((prevValue) => !prevValue);
  }

  onMarkAsComplete() {
    this.markAsComplete.emit(this.ticket().id);
  }
}
