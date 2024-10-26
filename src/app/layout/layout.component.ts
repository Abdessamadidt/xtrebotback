import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent  {
  isSidebarVisible = false;

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
}

}