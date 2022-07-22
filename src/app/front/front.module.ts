import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SlickCarouselModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCommonModule,
    MatInputModule,
    SharedModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class FrontModule { }
