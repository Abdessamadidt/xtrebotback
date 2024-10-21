import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  isHovred: boolean = false;
  hoveredItemIndex: number | null = null;

  iconLeft: string = 'assets/icons/left.svg';
  iconRight: string = 'assets/icons/right.svg';
  iconDown: string = 'assets/icons/down.svg';
  imgLogo: string = 'assets/trebot2.png';
  iconCancel: string = 'assets/icons/cancel.svg';

  constructor(private router: Router) {}

  items = [
    {
      routeLink: '',
      icon: 'assets/icons/home.svg',
      hoverIcon: 'assets/icons/home-hover.svg',
      label: 'Home',
    },
    {
      routeLink: 'exchange',
      icon: 'assets/icons/exchange.svg',
      hoverIcon: 'assets/icons/exchange-hover.svg',
      label: 'Exchange',
    },
    {
      routeLink: 'prices',
      icon: 'assets/icons/prices.svg',
      hoverIcon: 'assets/icons/prices-hover.svg',
      label: 'Prices',
    },
    {
      routeLink: 'wallets',
      icon: 'assets/icons/wallets.svg',
      hoverIcon: 'assets/icons/wallets-hover.svg',
      label: 'Wallets',
    },
    {
      routeLink: 'buy-crypto',
      icon: 'assets/icons/crypto.svg',
      hoverIcon: 'assets/icons/crypto-hover.svg',
      label: 'Buy crypto',
    },
    {
      routeLink: 'activities',
      icon: 'assets/icons/activities.svg',
      hoverIcon: 'assets/icons/activities-hover.svg',
      label: 'Activities',
    },
    {
      routeLink: 'blog',
      icon: 'assets/icons/blog.svg',
      hoverIcon: 'assets/icons/blog-hover.svg',
      label: 'Blog',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  setHoveredIndex(index: number | null): void {
    this.hoveredItemIndex = index;
  }

  isActive(routeLink: string): boolean {
    return this.router.url === `/${routeLink}`;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }
}