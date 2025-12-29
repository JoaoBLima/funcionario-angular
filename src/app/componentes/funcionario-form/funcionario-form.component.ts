import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Funcionario } from '../../models/Funcionarios';
import { RouterLink } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-funcionario-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink,MatButtonModule,MatCardModule,MatInputModule,MatSelectModule],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit {
@Output() onSubmit = new EventEmitter<Funcionario>();
@Input() btnAcao!:string;
@Input() btnTitulo!:string;
@Input() dadosFuncionario: Funcionario | null=null

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id :0),
      nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome :  '',[Validators.required]),
      sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome :'',[Validators.required]),
      departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento :'',[Validators.required]),
      turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno :'',[Validators.required]),
      ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo :true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    })
      
  }
  constructor(){}

  funcionarioForm! : FormGroup

  submit(){
    this.onSubmit.emit(this.funcionarioForm.value);

  }


}
