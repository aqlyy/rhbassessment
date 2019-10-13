import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'croptext'
})
export class CroptextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let first = 0;
    let last = 0;

    if (!value || typeof (value) !== 'string') {
      return value;
    }

    if (args && args.length > 0) {
      first = args[0];
      last = args[1];
    }

    let croppedText = value.length > 200 ? value.substring(first, last) + "..." : value.substring(first, last);
    return croppedText;
  }

}
