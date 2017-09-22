import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
    name: "animalAge",
    pure: false
})


export class AnimalAgePipe implements PipeTransform {
  transform(input: Animal[], filterByAge) {
    var output: Animal[] = [];
    if(filterByAge == "matureAnimals")
    {

      for (var i = 0; i < input.length; i++) {
        if (input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(filterByAge == "youngAnimals")
    {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }
}
