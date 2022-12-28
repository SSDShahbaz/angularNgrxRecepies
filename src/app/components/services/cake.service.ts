import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Cakes } from '../models/cakes';

@Injectable({
  providedIn: 'root'
})
export class CakeService extends EntityCollectionServiceBase<Cakes> {

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
      super('Cake', serviceElementsFactory);
    }
}
