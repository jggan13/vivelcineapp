import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const endPoint = environment.urlImages; 

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if (!img) {
      return './assets/no-image-banner.jpg';
    }

    const imgUrl = `${endPoint}${size}${img}`;
    return imgUrl;
  }

}
