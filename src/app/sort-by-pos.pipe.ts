import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPos'
})
export class SortByPosPipe implements PipeTransform {
  private len;
  private sorting(a, b) {
    if (parseInt(a.Pos, 10) !== parseInt(a.Pos, 10)) {
      a.Pos = this.len;
    }
    if (parseInt(b.Pos, 10) !== parseInt(b.Pos, 10)) {
      b.Pos = this.len;
    }
    return (parseInt(a.Pos, 10) - parseInt(b.Pos, 10));
  }

  transform(value: any, args?: any): any {
    if (!value) {
      return;
    } else {
      this.len = value.length;
      return  value.sort(this.sorting.bind(this));
    }
  }
}
