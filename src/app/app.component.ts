import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-time-picker-app';
  datetime5: any = '';

  form = new FormGroup({
    datetime1: new FormControl(''),
    datetime2: new FormControl(''),
    datetime3: new FormControl(''),
    datetime4: new FormControl(''),
  });

  getFormValue = (id: string) => {
    return this.form.get(id)?.value;
  }
}
