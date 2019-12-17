import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  // paises: any[] = [];
  constructor(private spotify: SpotifyService) {
    // console.log('Constructor Home');
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp: any[]) => {
    //   this.paises = resp;
    //   console.log(this.paises);
    // });

  }

  ngOnInit() {
  }

}
