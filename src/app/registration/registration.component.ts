import { Component } from '@angular/core';
import { User } from '../model/User.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})




export class Registration {
  model: User = new User ();
  
 

  constructor() {

   }

  onSubmit(): void {
    console.log(this.model)
  }

}
