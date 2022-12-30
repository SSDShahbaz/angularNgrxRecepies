import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  cakeForm?: FormGroup;
  constructor(private fb: FormBuilder, private cakeService: CakeService, private router: Router,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.cakeForm = this.fb.group({
      id:[],
      name: [],
      description: [],
      cost: []
    })
    let fetchFormData$ = combineLatest([
      this.route.paramMap,
      this.cakeService.entities$,
    ]).subscribe(([params, cakes]) => {
      var id = Number(params.get('id'));
      var filteredCake = cakes.filter((_) => _.id == id);
      if (filteredCake) {
        let data=filteredCake[0];
        this.cakeForm?.get('id')?.setValue(data.id);
        this.cakeForm?.get('name')?.setValue(data.name);
        this.cakeForm?.get('description')?.setValue(data.description);
        this.cakeForm?.get('cost')?.setValue(data.cost);
      }
    });
  }
  onSubmit() {
    this.cakeService.update(this.cakeForm?.value).subscribe(() => {
      this.router.navigate(['home']);
    })

  }
}
