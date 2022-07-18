import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    Ng2CarouselamosModule,
    SlickCarouselModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCommonModule,
    MatInputModule,
  ]
})
export class FrontModule { }
