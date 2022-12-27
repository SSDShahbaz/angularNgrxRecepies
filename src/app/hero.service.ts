import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
interface Hero{
  Id:number,
  Name:string
}
@Injectable({
  providedIn: 'root'
})
export class HeroService extends EntityCollectionServiceBase<Hero> {

constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
  super('Hero', serviceElementsFactory);
}

}
