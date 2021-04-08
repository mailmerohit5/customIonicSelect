import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 myCountryCode= [
    {
      "Id":95,
      "Code":"+91",
      "ISOCode":"IN",
      "Name":"India",
      "Flag":"https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828__340.png",
      "Status":1
    },
    {
      "Id":127,
      "Code":"+60",
      "ISOCode":"MY",
      "Name":"Malaysia",
      "Flag":"https://cdn.pixabay.com/photo/2013/07/13/14/16/malaysia-162351__340.png",
      "Status":1
    }
    ];

  constructor() {}
  ngOnInit(): void {
    // console.log(this.countryCode);
  }

  fetchSelected(event){
    console.log("Fetching Values",event);
  }
}
