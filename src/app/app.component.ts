import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { platform } from 'os';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project1';

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) localStorage.setItem('test', '1');
  }

  ngOnInit() {
    console.log('HELLOOOOOOOOO');
  }

  handleClick() {
    console.log('sdjflksjkl');
  }
}
