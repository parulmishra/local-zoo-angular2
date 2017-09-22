import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  moduleId: module.id,
  selector: 'animal-add',
  template: `<div class="well">
  <h2>Add A New Animal</h2><br/>
  <hr>
  <label>Enter Animal Name:</label><br/>
  <input #newName><br/>
  <label>Enter Animal Species:</label><br/>
  <input #newSpecies><br/>
  <label>Enter Animal Age:</label><br/>
  <input #newAge type="number"><br/>
  <label>Enter Animal Diet:</label><br/>
  <select #newDiet>
      <option [value]="Carnivorous"> Carnivorous </option>
      <option [value]="Herbivorous"> Herbivorous </option>
      <option [value]="Omnivorous"> Omnivorous </option>
    </select>
    <br/>
  <label>Enter Animal Location:</label><br/>
  <input #newLocation><br/>
  <label>Enter Animal Caretakers:</label><br/>
  <input #newCaretakers type="number"><br/>
  <label>Enter Animal Likes:</label><br/>
  <input #newLikes><br/>
  <label>Enter Animal Dislikes:</label><br/>
  <input #newDislikes><br/>
  <label>Enter Animal's Sex</label><br/>
  <select #newSex>
      <option [value]="Male" selected="selected"> Male </option>
      <option [value]="Female"> Female </option>
    </select>
  <br/>  
  <button (click)="submitForm(newName.value, newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newLikes.value, newDislikes.value, newSex.value); newName.value=''; newSpecies.value=''; newAge.value='0'; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">Add</button><br/>
  `,
  styleUrls: ['app.component.css']
})

export class AnimalAddComponent {
  @Output() newAnimalSender = new EventEmitter();
  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, likes: string, dislikes: string, sex: string) {
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, location, caretakers, likes, dislikes, sex);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
