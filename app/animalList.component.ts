import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  moduleId: module.id,
  selector: 'animal-list',
  template: `
  <select class="filter" (change)="onChangeAge($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="matureAnimals">Mature Animals</option>
      <option value="youngAnimals">Young Animals</option>
    </select>
    <select class="filter" (change)="onChangeDiet($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="herbivorous"> Herbivorous </option>
        <option value="carnivorous"> Carnivorous </option>
        <option value="omnivorous"> Omnivorous </option>
      </select>
  <h2>Animals at our Zoo !! </h2>
  <div id="list2">
  <ul>
    <li *ngFor="let currentAnimal of animalList | animalAge:filterByAge | animalDiet:filterByDiet">
    <p><em>{{currentAnimal.name}}</em></p>
    The {{currentAnimal.species}} from {{currentAnimal.location}} is {{currentAnimal.age}} years old. It is a {{currentAnimal.sex}} and likes {{currentAnimal.likes}} and dislikes {{currentAnimal.dislikes}}.
    <br/>
    <button id="editbutton" (click)="editAnimalDetails(currentAnimal)">Edit!</button>
    <br>
    </li>
  </ul>
  </div>`,
  styleUrls: ['app.component.css']
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";
  filterByDiet: string = "allAnimals";


  editAnimalDetails(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChangeAge(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
  onChangeDiet(optionFromMenu) {
    this.filterByDiet = optionFromMenu;
  }
}
