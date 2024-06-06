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
  especie : any = "";
  statusConservacao: any = "";
  temperaturaMin : any = 0;
  temperaturaMax : any = 0;
  phMin : any = 0;
  phMax : any = 100;
  nivelPoluicao : any = "";

dados : any[] = [];

  pesquisar(){

    var filter = {
      regiao : this.regiao,
      especie: this.especie,
      statusConservacao: this.statusConservacao,
      temperaturaMin : this.temperaturaMin,
      temperaturaMax : this.temperaturaMax,
      phMin : this.phMin,
      phMax : this.phMax,
      nivelPoluicao : this.nivelPoluicao
    }

      this.service.getOceanData(filter)
      .subscribe(retorno =>  {
        this.dados = retorno;
        console.log(retorno)

      }
      );
  }

  printEspecies(especies: any[])
  {
   const e = especies.map(x => x.nome + " - " + x.status).join(" | ");
   console.log(e);

   return e;
  }

  printConservacao(projetosConservacao: any[]) {
    const c = projetosConservacao.map(x => x.nomeProjeto + " - " + x.tipoProjeto + " - " + x.tipoParticipacao).join(" | ");
    console.log(c);

    return c;
  }
}
