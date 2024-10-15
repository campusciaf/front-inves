import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ciaf investiga';

  ngOnInit(): void {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (userPrefersDark) {
      this.setThema('dark')
    }
    if (userPrefersLight) {
      this.setThema('light')
    }
  }
  
  setThema(t: string) {

    document.documentElement.className = t;
  }

}
