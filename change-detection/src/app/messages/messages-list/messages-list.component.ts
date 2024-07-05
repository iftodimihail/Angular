import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { MessagesService } from '../messages.service';

// import { MessagesService } from '../messages.service';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);
  // private cdRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);
  messages$ = this.messagesService.messages$;

  // ngOnInit(): void {
  //   const subscription = this.messagesService.messages$.subscribe(
  //     (messages) => {
  //       this.messages = messages;
  //       // trigger change detection manually
  //       this.cdRef.markForCheck();
  //     }
  //   );

  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
