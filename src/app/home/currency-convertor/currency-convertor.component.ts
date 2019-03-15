import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../app.services';


@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.css']
})
export class CurrencyConvertorComponent implements OnInit {

  constructor( private appServices : AppServices) { }
  result : any;
  selected1 : any;
  selected2 : any;
  getdata : any;
  currentValue : any;

  ngOnInit() {
    this.CountryName();
  }
  CountryName(){
    this.appServices.countryCodes().subscribe(
      (res:any)=>{
        this.result = res.rates;
        console.log('this.result', this.result)
      }
    )
  }  
  
  convertedData(){
    this.getdata = {
      select1 : this.selected1,
      select2 : this.selected2
    }
    console.log('two values',this.getdata)
    this.currentValue = (this.getdata.select1*this.getdata.select2)
    console.log(this.currentValue)
  }

}
