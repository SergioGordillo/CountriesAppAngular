import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string="https://restcountries.eu/rest/v2";

  get obtainHttpParams(){
    return new HttpParams()
              .set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http:HttpClient) { }

  searchCountry(term:string):Observable<Country[]>{
    const url=`${this.apiURL}/name/${term}`;
    return this.http.get<Country[]>(url, {params: this.obtainHttpParams});
  }

  searchCountryByCapital(term:string):Observable<Country[]>{
    const url=`${this.apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url, {params: this.obtainHttpParams});
  }

  getCountryByCode(code:string):Observable<Country>{
    const url=`${this.apiURL}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  getCountriesByRegion(region:string):Observable<Country[]>{

    const url=`${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.obtainHttpParams})
    .pipe(
      tap(console.log)
    )
  }
}
