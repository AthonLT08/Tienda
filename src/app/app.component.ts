import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Tienda';
  
  clickloginbtn(){
      
  }
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
 

