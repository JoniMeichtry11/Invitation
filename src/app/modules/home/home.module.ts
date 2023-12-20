import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OpenInvitationComponent } from './open-invitation/open-invitation.component';
import { HomeRoutingModule } from './home-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    OpenInvitationComponent,
    HomeComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClipboardModule,
  ]
})
export class HomeModule { }
