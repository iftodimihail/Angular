import {
  Component,
  DestroyRef,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';
import { interval, map } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {
    initialValue: 0,
    // manualCleanup: true,
  });

  constructor() {
    // effect(() => console.log(`Clicked button ${this.clickCount()} times.`));
    // toObservable(this.clickCount);
  }

  ngOnInit(): void {
    // interval - creates observables
    // const subscription = interval(1000)
    //   .pipe(map((value) => value * 2))
    //   .subscribe({
    //     next: (value) => console.log(value),
    //   });
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());

    const subscription = this.clickCount$.subscribe({
      next: () => console.log(`Clicked button ${this.clickCount()} times.`),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  onClick() {
    this.clickCount.update((prev) => prev + 1);
  }
}
