import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-carousel-blog',
  templateUrl: './carousel-blog.component.html',
  styleUrl: './carousel-blog.component.css',
})
export class CarouselBlogComponent implements AfterViewInit {
  blogs = [
    { image: 'assets/carousel/blog1.png', route: '/blog1' },
    { image: 'assets/carousel/blog2.png', route: '/blog2' },
    { image: 'assets/carousel/blog3.png', route: '/blog3' },
    { image: 'assets/carousel/blog4.png', route: '/blog4' },
    { image: 'assets/carousel/blog5.png', route: '/blog5' },
  ];
  ngAfterViewInit() {
    const slider = tns({
      container: '.slider-wrapper',
      items: 4,
      slideBy: 1,
      autoplay: true,
      controls: true,
      nav: false,
      autoplayButtonOutput: false,
      autoplayTimeout: 2000,
      controlsContainer: '.blog-slider',
      prevButton: '.prev',
      nextButton: '.next',
      speed: 500,
      autoplayHoverPause: false,
      autoplayResetOnVisibility: false,
      preventActionWhenRunning: true,
    });
    document.querySelector('.prev')?.addEventListener('click', () => {
      setTimeout(() => {
        slider.play();
      }, 2000);
    });

    document.querySelector('.next')?.addEventListener('click', () => {
      setTimeout(() => {
        slider.play();
      }, 2000);
    });
  }
}