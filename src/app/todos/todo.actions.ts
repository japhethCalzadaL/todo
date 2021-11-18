
import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea todo',
  props<{ texto: string }>());
  
export const limpiarTodos = createAction('[TODO] Limpiar todo',);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id:number | undefined}>()
)

export const editar = createAction(
  '[TODO] Editar Todo',
  props<{id:number | undefined, texto: string}>()
)

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{id:number | undefined}>()
)

export const toggleAll = createAction(
  '[TODO]  Toggle Todo',
  props<{completado:boolean}>() 
); 

export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');