import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!: Country; 

  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService: CountriesService
    ) 
    { }

  ngOnInit(): void {
   
    this.activatedRoute.params
      .pipe(
        switchMap( ({code})=> this.countriesService.getCountryByCode(code)),
        tap(console.log)

      )
      .subscribe(country=>this.country=country); 
   
  }

}
