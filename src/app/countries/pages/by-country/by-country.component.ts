import { Component} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string ="";
  foundError: boolean=false;
  countries: Country[]=[];

  constructor(private countriesService:CountriesService) { }

  search(term:string){

    this.foundError=false;
    this.term=term; 

    this.countriesService.searchCountry(this.term)
      .subscribe((countries)=>{
        console.log(countries);
        this.countries=countries;
      }, (err)=>{
        this.foundError=true;
        this.countries=[];
      });
  }

 

}
