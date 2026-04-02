import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { todo } from "../models/todo";
import { filter } from "rxjs";

@Component({
  selector: "app-todo",
  imports: [FormsModule,CommonModule],
  templateUrl: "./todo.html",
  styleUrl: "./todo.scss",
})
export class Todo {

  ngOnInit() {
    this.Tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    this.filteredTasks = this.Tasks
  }
  count = 0
  Done = "Complete"
  Priority = ""
  Text = ""
  Addtask = "Add Task"
  asce = "asc"
  filterbypriority = 0

  Addtaskapp () {
    this.Tasks.push({
      Id : Date.now(),
      Name : this.Text,
      priority: this.count,
      completed : false,
      edit : true,
    })
    this.Text = ""
    this.Priority = ""
    console.log(this.Tasks)
    this.filteredTasks = this.Tasks
    localStorage.setItem("tasks", JSON.stringify(this.Tasks))
  }
   Complete(task: todo) {
    task.completed = !task.completed;
    localStorage.setItem("tasks", JSON.stringify(this.Tasks))
  }
   remove(task: todo) {
    this.Tasks = this.Tasks.filter((t) => t.Id !== task.Id)
    this.filteredTasks = this.filteredTasks.filter((t) => t.Id !== task.Id);
    localStorage.setItem("tasks", JSON.stringify(this.Tasks))
   }
   edit(task : todo) {
    task.edit = !task.edit
    localStorage.setItem("tasks", JSON.stringify(this.Tasks))
   }
   asc() {
    if (this.asce == "asc") {
      this.asce = "desc"
    this.filteredTasks = this.filteredTasks.sort((a, b) => a.priority - b.priority);
    }
    else {
      this.asce = "asc"
    this.filteredTasks = this.filteredTasks.sort((a, b) => b.priority - a.priority);
    }
  }
  filterbypri(priority: string) {
  if (!priority) {
  this.filteredTasks = this.Tasks;
  return;
  }

  this.filteredTasks = this.Tasks.filter(t => t.priority === Number(priority));
}
   filteredTasks : todo[] = []
  Tasks : todo[] = []
}
