import { Component, OnInit, ViewChild } from '@angular/core';
import { Ng2CarouselamosComponent } from 'ng2-carouselamos';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  title = 'NG7Swiper';
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  @ViewChild('slickModal2')
  slickModal2!: SlickCarouselComponent;
  @ViewChild('slickModal3')
  slickModal3!: SlickCarouselComponent;

  images: Array<any> = []
  images2: Array<any> = []
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoPlay: true};
  slideConfig2 = { slidesToShow: 5, slidesToScroll: 5};
  slides: any = [];
	item: Array<any>=[];
	state : Array<any>=[];
  constructor() { 
      this.images = [
        { name: 'assets/Images/MaskGroup5.jpg' },
        { name: 'assets/Images/hero.jpg' },
        // { name: 'assets/Images/stock-photo.jpg' },
        // { name: 'assets/Images/MaskGroup5.jpg' },
        // { name: 'assets/Images/MaskGroup5.jpg' },
        // { name: 'assets/Images/MaskGroup5.jpg' },
        // { name: 'assets/Images/MaskGroup5.jpg' },
    ]
	this.item = [
		{ name: 'assets/Images/istockphoto.jpg' },
		{ data: 'Our lorem ipsum tool was created with web designers, webmasters, and content marketers in mind. If you need placeholder text for content that is not yet created, you can utilize this tool. This way, graphic designers, full stack developers…etc. can focus on other core elements, such as creating graphical elements and creating the page layout. Right before the webpage is set to launch.'}
	]
	this.state = [
		{ name: 'assets/Images/family1.jpg' ,title: 'Family Friendly'},
        { name: 'assets/Images/hero.jpg' ,title: 'Night Tours'},
        { name: 'assets/Images/MaskGroup4.2.jpg' ,title: 'Bike Tours'},
        { name: 'assets/Images/MaskGroup4.3.jpg' ,title: 'Day Trip'},
        { name: 'assets/Images/MaskGroup4.4.jpg' ,title: 'Food Tours'},
	]
	this.images2 = [
		{ name: 'assets/Images/MaskGroup4.jpg'  },
        { name: 'assets/Images/MaskGroup4.1.jpg' },
        { name: 'assets/Images/MaskGroup4.2.jpg' },
        { name: 'assets/Images/MaskGroup4.3.jpg' },
        { name: 'assets/Images/MaskGroup4.4.jpg' },
        // { name: 'assets/Images/MaskGroup5.jpg' },
        // { name: 'assets/Images/MaskGroup5.jpg' },
    ]

  }

  ngOnInit(): void {
  }
  addSlide() {
		this.slides.push({ img: 'http://placehold.it/350x150/777777' });
	}
	next() {
		this.slickModal.slickNext();
	}

	prev() {
		this.slickModal.slickPrev();
	}
	next2() {
		this.slickModal2.slickNext();
	}

	prev2() {
		this.slickModal2.slickPrev();
	}
	removeSlide() {
		this.slides.length = this.slides.length - 1;
	}

	slickInit(e: any) {
		console.log('slick initialized');
	}

	breakpoint(e: any) {
		console.log('breakpoint');
	}

	afterChange(e: any) {
		console.log('afterChange');
	}

	beforeChange(e: any) {
		console.log('beforeChange');
	}
}
