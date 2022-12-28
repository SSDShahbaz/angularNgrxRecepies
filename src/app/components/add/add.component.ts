import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  cakeForm?: FormGroup;
  constructor(private fb: FormBuilder, private cakeService: CakeService, private router: Router) {

  }

  ngOnInit() {
    this.cakeForm = this.fb.group({
      name: [],
      description: [],
      cost: []
    })
  }
  onSubmit() {
    this.cakeService.add(this.cakeForm?.value).subscribe(() => {
      this.router.navigate(['home']);
    })

  }
}
