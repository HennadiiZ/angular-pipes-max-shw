import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {

    //return value.split('').sort().join('');

    if(value){
      return value.split('').sort().join('');
    }
    return value;
  }

}
