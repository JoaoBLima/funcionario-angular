import { Component, Inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from '../../models/Funcionarios';
import { CommonModule } from '@angular/common';
import { MatButton } from "@angular/material/button";
import { MatCard } from "@angular/material/card";
@Component({
  selector: 'app-excluir',
  imports: [CommonModule, MatButton, MatCard],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent implements OnInit {
  inputdata:any
  funcionario!:Funcionario
  constructor(private funcionarioService : FuncionarioService,private router:Router, @Inject(MAT_DIALOG_DATA) public data : any,private ref:MatDialogRef<ExcluirComponent> ){}

  ngOnInit(): void {
      this.inputdata = this.data;

      this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe((data)=>{
        this.funcionario = data.dados;
      })
  }

  Excluir(){
    this.funcionarioService.ExcluirFuncionario(this.inputdata.id).subscribe((data)=>{
      this.ref.close();
      window.location.reload();

    })
  }
  Cancelar(){
    this.ref.close();
  }

}
