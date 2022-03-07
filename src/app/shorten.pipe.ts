import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // transform(value: any, ...args: unknown[]): unknown {
  //   if(value.length > 10){
  //     return value.substr(0, 10) + '...';
  //   }
  //   return value;
  // }

  transform(value: any, limit: number): unknown {
    
    if(value.length > limit){
      return value.substr(0, limit) + '...';
    }
    return value;
  }

}
