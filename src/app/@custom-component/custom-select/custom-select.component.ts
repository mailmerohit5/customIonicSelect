import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  @Input() countryCode: any=
  [
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
    @Output() onSelected = new EventEmitter<any>();
    CountryId=this.countryCode[0].Code;
    openSelectModal=false;
    flagFakeChange=false;
    isFirstTimeOpened=true;
  constructor() { }

  ngOnInit() {
    this.onSelected.emit(this.CountryId);
    //emitting for default value;
  }
  checkClose(){
    //console.log(this.flagFakeChange);
    if(this.flagFakeChange){
      this.flagFakeChange=false;
      if(this.isFirstTimeOpened){
        this.isFirstTimeOpened=false;
        setTimeout(()=>{
          this.openSelectModal=false;
        },700);
      }
      return;
    }else{
      this.isFirstTimeOpened=false;
      setTimeout(()=>{
        this.openSelectModal=false;
      },700);
    }

  }

  modelChanged(event, CountryId){
    //console.log(event);
    this.onSelected.emit(CountryId);
  }
}
