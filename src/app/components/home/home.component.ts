import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private cakeService:CakeService,private  router:Router){
    this.allCakes$ = cakeService.entities$;
    this.loading$ = cakeService.loading$;
  }
  ngOnInit(){
    this.getAllCakes();
  }
  getAllCakes(){
    this.cakeService.getAll();
  }
  delete(id:number)
  {
    this.cakeService.delete(id).subscribe(()=>{
      this.router.navigate(['home']);
    })
  }
}
