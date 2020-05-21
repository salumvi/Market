import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'titleList'
})
export class TitleListPipe implements PipeTransform {

 

  transform(title: string): string[] {

    if (title) {
      return JSON.parse(title);
    }

  }

 

}
