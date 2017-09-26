import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // constructor() {
  //   fetch('http://10.72.1.75/webapi/api/ListaSistemas/Cabecalho')
  //     .then(res => console.log(res.json()))
  //     .catch(err => console.error(err));
  // }
}
