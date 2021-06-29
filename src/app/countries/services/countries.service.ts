import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/country.interface';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiURL: string="https://restcountries.eu/rest/v2";

  constructor(private http:HttpClient) { }

  searchCountry(term:string):Observable<Country[]>{

    const url=`${this.apiURL}/name/${term}`;

    return this.http.get<Country[]>(url);
  }
}
