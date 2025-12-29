import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import { MatCard } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel, MatInput } from "@angular/material/input";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, MatTableModule, MatCard, MatButton, MatFormField, MatLabel, MatInput,MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionarioGeral:Funcionario[] = [];

  colunas = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir']



  constructor(private funcionarioService : FuncionarioService,public dialog : MatDialog){}

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe(data =>{
      const dados = data.dados;

      dados.map((item) =>{
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
      })
      this.funcionarios = data.dados;
      this.funcionarioGeral = data.dados;
    })
      
  }

  search(event : Event){
const target = event.target as HTMLInputElement;
const value = target.value.toLocaleLowerCase();

this.funcionarios = this.funcionarioGeral.filter(funcionario =>{
  return funcionario.nome.toLocaleLowerCase().includes(value);
})
  }

  OpenDialog(id : number){
    this.dialog.open(ExcluirComponent,{
      width:'450px',
      height:'450px',
      data:{
        id:id
      }
    })
  }

}
