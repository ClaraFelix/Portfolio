import { NgFor } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
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

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.startAutoSlide();
    this.generateSlideIndices();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
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
    this.currentIndex = (this.currentIndex + 2) % this.experiences.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 2 + this.experiences.length) %
      this.experiences.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  generateSlideIndices() {
    this.slideIndices = Array.from(
      { length: Math.ceil(this.experiences.length / 2) },
      (_, i) => i * 2
    );
  }
}
