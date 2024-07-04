import { Component } from "@angular/core";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from "./ticket.model";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: "app-tickets",
  standalone: true,
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
  imports: [NewTicketComponent, TicketComponent],
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticket: Ticket) {
    this.tickets.unshift(ticket);
  }

  onMarkAsComplete(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          status: "closed",
        };
      }

      return ticket;
    });
  }
}
