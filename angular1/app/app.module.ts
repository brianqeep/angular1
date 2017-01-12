import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PiesListComponent} from './pies-list.component';
import { AppComponent }   from './app.component';
import { TaskListComponent }   from './task-list.component';
import { EditTaskComponent } from './edit-task.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [ PiesListComponent, AppComponent, TaskListComponent, EditTaskComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }