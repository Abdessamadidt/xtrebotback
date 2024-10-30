import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  isSidebarVisible = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService){
    
  }
  
  ngOnInit(): void {
    this.isAdmin = this.authService.getUsername() === 'admin';
    console.log(this.isAdmin)
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
}
}