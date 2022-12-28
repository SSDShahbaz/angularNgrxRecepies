import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cakes } from '../models/cakes';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading$?: Observable<boolean>;
  allCakes$?: Observable<Cakes[]>;
  constructor(private cakeService:CakeService){
    this.allCakes$ = cakeService.entities$;
    this.loading$ = cakeService.loading$;
  }
  ngOnInit(){
    this.getAllCakes();
  }
  getAllCakes(){
    this.cakeService.getAll();
  }
}
