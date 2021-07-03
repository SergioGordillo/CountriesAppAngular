import { Component} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[]=["africa", "americas", "asia", "europe", "oceania"]; 
  activeRegion: string="";
  countries: Country[]=[];

  constructor(private countriesService: CountriesService) { }

  getCSSClassForRegion(region:string){
    return (region===this.activeRegion) ? 'btn btn-primary mt-3 me-3' : 'btn btn-outline-primary mt-3 me-3'
  }

  activateRegion(region:string){

    if (region===this.activeRegion){ return ;}

    this.activeRegion=region; 
    this.countries=[];

    this.countriesService.getCountriesByRegion(region)
      .subscribe((countries)=>{
        this.countries=countries
      });
  }



}
