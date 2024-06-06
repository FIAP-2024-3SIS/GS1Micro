import { resolve } from 'node:path';
import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ocean-20';

  constructor(private service: ApiService){

  }

  regiao : string = "";
  especie : string = "";
  statusConservacao: string = "";
  temperaturaMin : number = 0;
  temperaturaMax : number = 0;
  phMin : number = 0;
  phMax : number = 0;
  nivelPoluicao : string = "";

dados : any[] = [];

  pesquisar(){

    var filter = {
      regiao : this.regiao
    }
      this.service.getOceanData(filter)
      .subscribe(retorno => this.dados = retorno);
  }
}
