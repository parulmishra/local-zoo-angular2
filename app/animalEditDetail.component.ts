import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  moduleId: module.id,
  selector: 'animal-edit-detail',
  template: `<div>
        <div *ngIf="selectedAnimal">
          <h3>{{selectedAnimal.name}}</h3><br/>
          <hr>
          <h3>Edit Animal Details</h3><br/>
          <label>Enter Animal Name:</label><br/>
          <input [(ngModel)]="selectedAnimal.name"><br/>
          <label>Enter Animal Species:</label><br/>
          <input [(ngModel)]="selectedAnimal.species"><br/>
          <label>Enter Animal Age:</label><br/>
          <input [(ngModel)]="selectedAnimal.age" type="number"><br/>
          <label>Enter Animal Sex:</label><br/>
          <select [(ngModel)]="selectedAnimal.sex">
            <option *ngFor="let c of sexes" [ngValue]="c">{{c}}</option>
          </select>
          <br/>
          <label>Enter Animal Diet:</label><br/>
          <select [(ngModel)]="selectedAnimal.diet">
            <option *ngFor="let c of diets" [ngValue]="c">{{c}}</option>
          </select>
          <br/>
          <label>Enter Animal Location:</label><br/>
          <input [(ngModel)]="selectedAnimal.location"><br/>
          <label>Enter Animal Caretakers:</label><br/>
          <input [(ngModel)]="selectedAnimal.caretakers" type="number"><br/>
          <label>Enter Animal Likes:</label><br/>
          <input [(ngModel)]="selectedAnimal.likes"><br/>
          <label>Enter Animal Dislikes:</label><br/>
          <input [(ngModel)]="selectedAnimal.dislikes"><br/>
          <button (click)="finishedEditing()">Done</button><br/>
        </div>
      </div>`,
      styleUrls: ['app.component.css']
})

export class AnimalEditDetailComponent {
  @Input() selectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
  diets = ["Carnivorous", "Omnivorous", "Herbivorous"];
  sexes = ["Male", "Female"];
  finishedEditing()  {
    this.doneButtonClickedSender.emit();
  }
}
