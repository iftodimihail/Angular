import {
  Component,
  ElementRef,
  ViewChild,
  output,
  viewChild,
} from "@angular/core";

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";
import { Ticket } from "../ticket.model";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
  imports: [ControlComponent, ButtonComponent, FormsModule],
})
export class NewTicketComponent {
  addTicket = output<Ticket>();
  // private form = viewChild.required<ElementRef<HTMLFormElement>>("form");

  enteredTitle = "";
  enteredRequest = "";

  onSubmit() {
    this.addTicket.emit({
      id: new Date().getTime().toString(),
      title: this.enteredTitle,
      request: this.enteredRequest,
      status: "open",
    });

    // this.form().nativeElement.reset();

    this.enteredTitle = "";
    this.enteredRequest = "";
  }
}
