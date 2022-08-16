import { Component } from '@angular/core';

interface athlete{
  athleteName : string
  sport : string,
  active: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Athlete Maker';
  
  athleteName!: string; 
  sport! : string;
  active!: boolean;

  athletes: athlete []=[];

   onCreateAthlete() {
        this.athletes.push({
        athleteName: this.athleteName,
        sport : this.sport,
        active: this.active
      })
  }


}
