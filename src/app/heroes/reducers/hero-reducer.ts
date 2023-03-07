import { Hero } from "../models/hero";
import { AddHero } from "../actions/hero-action";

export function heroReducer (state: Hero[] = [], action: AddHero) {
   return [...state, AddHero.payload]
}