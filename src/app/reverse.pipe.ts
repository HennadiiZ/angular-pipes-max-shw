import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {

    // return value.split('').reverse().join('');

    if(value){
      return value.split('').reverse().join('');
    }
    return value;
  }

}
