import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './models/users';
import { FetchDataService } from './services/fetch-data.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cci';
  showFiller:boolean = false;
  data_Obs!:Observable<Users[]>;

  constructor(
      private userSerive:FetchDataService,
      private iconRegister:MatIconRegistry,
      private sanitizer:DomSanitizer
    ){
      this.iconRegister.addSvgIconSet(this.sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'))
    }


  ngOnInit(): void {
      this.data_Obs = this.userSerive.user;
      this.userSerive.fetch_all();
      this.data_Obs.subscribe( data => console.log(data));
  }
}
