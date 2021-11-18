import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number = 0; 
  filtroActual: actions.filtrosValidos = 'todos'; 
  filtros : actions.filtrosValidos [] = ['todos', 'completados', 'pendientes']
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state =>{
    this.filtroActual = state.filtro
    this.pendientes = state.todos.filter(todo => !todo.completado).length
     
   })
    // this.store.select('filtro')
   //   .subscribe(filtro =>this.filtroActual = filtro); 
    
  }
  cambiarFiltro(filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({filtro}))
  }

  limpiarCompletados (){

    this.store.dispatch(limpiarTodos())
    
  }
}
