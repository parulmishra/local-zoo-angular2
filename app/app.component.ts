import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<div class="well" id="heading">
  <h1>{{title}}</h1>
  </div><br/>
  <div class="well">
  <animal-list [animalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  <hr>
  <animal-edit-detail [selectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></animal-edit-detail>
  <hr>
  <button (click)="hideAddAnimal()">{{addAnimalText}}</button>
<div [hidden]="hideAdd">
  <animal-add (newAnimalSender)="addAnimal($event)"></animal-add>
  </div>
  </div>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Welcome to the Local Zoo';
  selectedAnimal = null;
  hideAdd: boolean = true;
  addAnimalText: string = "Add Animal";

  masterAnimalList: Animal[] = [
    new Animal("Lion", "Sher Khan", 1, "Carnivorous", "Africa", 6, "Sleeping", "People", "Male"),
    new Animal("Elephant", "Motu", 4, "Herbivorous", "Africa", 3, "Bathing", "People", "Female"),
    new Animal("Bear", "Baloo", 2, "Omnivorous", "Asia", 4, "Honey", "Bathing", "Male"),
    new Animal("Cat", "Baghira", 5, "Omnivorous", "North America", 4, "Rats", "Dogs", "Male"),
    new Animal("Snake", "Kaa", 3, "Carnivorous", "India", 4, "Rats", "Dogs", "Female")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
  hideAddAnimal()
  {
    this.hideAdd = !this.hideAdd;
    if(this.hideAdd == false)
    {
      this.addAnimalText = "Hide Add Panel";
    }
    else
    {
      this.addAnimalText = "Add Animal";
    }
  }

}
