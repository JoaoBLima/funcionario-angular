import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionarios';
import { Response } from '../models/Response';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private apiurl = `${environment.ApiUrl}/Funcionario`

  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiurl)
  }
  GetFuncionario(id : number) : Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiurl}/${id}`)
  }
  CreateFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiurl}`,funcionario)
  }
  EditarFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiurl}`,funcionario)
  }
  InativaFuncionario (id : number) : Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiurl}/inativaFuncionario/${id}`,id)
  }
}
