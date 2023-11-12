import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): unknown {
    if (value.length === 0) return value;

    const sortedArray = value.slice().sort((a, b) => {
      if (a[propName] < b[propName]) return -1;
      else if (a[propName] > b[propName]) return 1;
      else return 0;
    });

    return sortedArray;
  }
}
