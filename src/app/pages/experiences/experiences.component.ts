import { NgFor } from '@angular/common';
import { Component, HostListener, NgZone, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'portfolio-experiences',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent implements OnInit {
  experiences = [
    { image: './assets/img/logo-UFRN.webp', alt: 'Logo UFRN' },
    { image: './assets/img/logo-factory.webp', alt: 'Logo 4cadia' },
    { image: './assets/img/logo-light.webp', alt: 'Logo BFT Solutions' },
    { image: './assets/img/logo-vm.webp', alt: 'Logo VM' },
    { image: './assets/img/avonale-workplace.webp', alt: 'Logo Avonale' },
    { image: './assets/img/fandi.webp', alt: 'Logo Sistema Fandi' },
  ];
  currentIndex = 0;
  autoSlideInterval: any;
  slideIndices: number[] = [];
  imagesPerSlide = 2;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.updateImagesPerSlide();
    this.startAutoSlide();
    this.generateSlideIndices();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateImagesPerSlide();
    this.generateSlideIndices();
    this.currentIndex = 0;
  }

  updateImagesPerSlide() {
    if (typeof window !== 'undefined') {
      this.imagesPerSlide = window.innerWidth < 640 ? 1 : 2;
    }
  }

  startAutoSlide() {
    if (this.autoSlideInterval) {
      this.stopAutoSlide();
    }

    this.zone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        this.zone.run(() => {
          this.nextSlide();
        });
      }, 4000);
    });
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + this.imagesPerSlide) % this.experiences.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - this.imagesPerSlide + this.experiences.length) %
      this.experiences.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  generateSlideIndices() {
    this.slideIndices = Array.from(
      { length: Math.ceil(this.experiences.length / this.imagesPerSlide) },
      (_, i) => i * this.imagesPerSlide
    );
  }
}
