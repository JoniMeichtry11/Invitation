import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from 'src/app/models/Photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent {
  @Input() showPhotos: boolean = false;

  photos: Photo[] = [];

  constructor(){
    this.photos = [
      { src: 'assets/img/photos/1.jpg', alt: 'photo1' },
      { src: 'assets/img/photos/2.jpg', alt: 'photo2' },
      { src: 'assets/img/photos/3.jpg', alt: 'photo3' },
      { src: 'assets/img/photos/4.jpg', alt: 'photo4' },
      { src: 'assets/img/photos/5.jpg', alt: 'photo5' },
      { src: 'assets/img/photos/6.jpg', alt: 'photo6' },
      { src: 'assets/img/photos/7.jpg', alt: 'photo7' },
    ]
  }
}
