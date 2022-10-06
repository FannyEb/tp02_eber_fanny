import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    switch(value.length){
      case 2: return value.slice(0,2)+'.'; 
      case 5: return value.slice(0,5)+'.'; 
      case 8: return value.slice(0,8)+'.';
      case 11: return value.slice(0,11)+'.';
      case 14: return value;
      default: return value;
    }
  }

}
