import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxPipes'
})
export class UxPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    return value + 'pratap';
  }

}
