import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net';

  constructor(private http: HttpClient) { }

    // Método para obter dados de oceano
    getOceanData(filter:any): Observable<any> {
    return this.http.get<any>(`https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?regiao=${filter.regiao}&especie=${filter.especie}&statusConservacao=${filter.statusConservacao}&temperaturaMin=${filter.temperaturaMin}&temperaturaMax=${filter.temperaturaMax}&phMin=${filter.phMin}&phMax=${filter.phMax}&nivelPoluicao=${filter.nivelPoluicao}&pagina=1&qtde=20`);
    }

}
