import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AnimalEditDetailComponent } from './animalEditDetail.component';
import { AnimalAddComponent } from './animalAdd.component';
import { AnimalListComponent } from './animalList.component';
import { AnimalAgePipe } from './animalAge.pipe';
import { AnimalDietPipe } from './animalDiet.pipe'


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, AnimalEditDetailComponent, AnimalAddComponent, AnimalListComponent, AnimalAgePipe, AnimalDietPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
