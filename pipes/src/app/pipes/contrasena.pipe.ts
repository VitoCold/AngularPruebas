import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    if (value) {
      if (activar) {
        return value;
      } else {
        let element = '';
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < value.length; index++) {
          element = element + '*';
        }
        return element;
      }
    } else {
      return value;
    }
  }
}
