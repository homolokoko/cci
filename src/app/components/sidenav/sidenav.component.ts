import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user:Users | undefined;
  
  @Input() username!: Observable<Users[]>;
  

  constructor(private route:ActivatedRoute, private user_id:FetchDataService){}

  ngOnInit() {
    
  }

  

}
