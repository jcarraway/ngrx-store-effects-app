import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from '../reducers/toppings.reducer';
import { createSecureContext } from 'tls';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
