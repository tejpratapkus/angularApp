import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipes'
})
export class FilterPipesPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if (value === 0) {
      return value;
    } else {
      return value.filter(function (search) {
        return search.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      });
    }
  }

}
