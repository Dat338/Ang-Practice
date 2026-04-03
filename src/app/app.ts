import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Main } from "./main/main";

import { Todo } from "./todo/todo"
import { Header } from "./header/header";


@Component({
  selector: 'app-root',
  imports: [RouterModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
