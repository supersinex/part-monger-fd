import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: any[]) : string {
    console.log('Arg 0 is: ' + args[0]);
    let limit = args.length > 0 ? parseInt(args[0], 10) : 150;
    let trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}