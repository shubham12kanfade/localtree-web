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
//   @Input() mainSlider: boolean;
//   @Input() eventsSlider: boolean;
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  @ViewChild('slickModal2')
  slickModal2!: SlickCarouselComponent;
  @ViewChild('slickModal3')
  slickModal3!: SlickCarouselComponent;

  images: Array<any> = []
  images2: Array<any> = []
  images3: Array<any> = []
  slideConfig = { slidesToShow: 1, slidesToScroll: 1,};
  slideConfig2 = { slidesToShow: 5, slidesToScroll: 1, infinite: true, responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]};
  slideConfig3 = { slidesToShow: 5, slidesToScroll: 1, infinite: true,responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]};
  slides: any = [];
  slides2: any = [];
  slides3: any = [];
	item: Array<any>=[];
	state : Array<any>=[];
  constructor() { 
      this.images = [
        { name: 'assets/Images/MaskGroup5.jpg' },
        { name: 'assets/Images/hero.jpg' },
    ]
	this.item = [
		{ name: 'assets/Images/search.png' },
		{ data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since'},
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
		{ name: 'assets/Images/MaskGroup4.2.jpg' },
    ]
	this.images3 = [
		{ name: 'assets/Images/MaskGroup4.jpg'  },
        { name: 'assets/Images/MaskGroup4.1.jpg' },
        { name: 'assets/Images/MaskGroup4.2.jpg' },
        { name: 'assets/Images/MaskGroup4.3.jpg' },
        { name: 'assets/Images/MaskGroup4.4.jpg' },
		{ name: 'assets/Images/MaskGroup4.2.jpg' },
    ]

  }

  ngOnInit(): void {
  }
  addSlide() {
		this.slides.push({ img: 'http://placehold.it/350x150/777777' });
	}
	
	next() {
		console.log("modal1",this.slickModal);
		this.slickModal.slickNext();
	}

	prev() {
		this.slickModal.slickPrev();
	}
	next2() {
		console.log("modal2",this.slickModal2);
		this.slickModal2.slickNext();
	}

	prev2() {
		this.slickModal2.slickPrev();
	}
	next3() {
		console.log("modal3",this.slickModal3);
		this.slickModal3.slickNext();
	}

	prev3() {
		this.slickModal3.slickPrev()
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
