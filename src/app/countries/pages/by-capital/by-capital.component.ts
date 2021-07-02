import { Component} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string ="";
  foundError: boolean=false;
  countries: Country[]=[];

  constructor(private countriesService:CountriesService) { }

  search(term:string){

    this.foundError=false;
    this.term=term; 

    this.countriesService.searchCountryByCapital(this.term)
      .subscribe((countries)=>{
        this.countries=countries;
      }, (err)=>{
        this.foundError=true;
        this.countries=[];
      });
  }



}
