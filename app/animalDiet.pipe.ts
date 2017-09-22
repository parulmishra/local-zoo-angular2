import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
    name: "animalDiet",
    pure: false
})


export class AnimalDietPipe implements PipeTransform {
  transform(input: Animal[], filterByDiet) {
    var output: Animal[] = [];
    if(filterByDiet === "carnivorous")
    {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "carnivorous" || input[i].diet === "Carnivorous") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(filterByDiet == "herbivorous")
    {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "herbivorous" || input[i].diet === "Herbivorous") {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(filterByDiet == "omnivorous")
    {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "omnivorous" || input[i].diet === "Omnivorous") {
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
