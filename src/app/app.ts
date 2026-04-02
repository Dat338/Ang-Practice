import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "./main/main";
<<<<<<< HEAD
import { Todo } from "./todo/todo"

@Component({
  selector: 'app-root',
  imports: [Main, Todo],
=======

@Component({
  selector: 'app-root',
  imports: [Main],
>>>>>>> 2f6eba390b64448e08563b915e128328af8c6781
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
