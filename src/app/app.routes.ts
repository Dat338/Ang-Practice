import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "",
        redirectTo : "main",
        pathMatch : "full"
    },
    {
        path : "todo",
        loadComponent : () => import("./todo/todo").then(m => m.Todo)
    },
    {
        path : "main",
        loadComponent : () => import("./main/main").then(m => m.Main)
    },
    {
        path : "**",
        loadComponent : () => import("./error/error").then(m => m.Error)
    }
];
