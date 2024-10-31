import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Usuario } from 'src/app/core/models/Usuario';
import { URL_BUSINESS_USER, URL_MS_AUTH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token:any
  private headersAut:any
  private urlApiAuth = URL_MS_AUTH.apiUrl;

  private urlApiUser = URL_BUSINESS_USER.apiUrl;

  constructor(private http:HttpClient) {
    // this.urlApi = urlApiAuth;
    this.token = this.obtenerToken();
    this.headersAut = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  }

  obtenerToken(){
    const token = sessionStorage.getItem("token");
    return token ? (JSON.parse(token)): null;
  }

  login(usuario:Usuario):Observable<any>{
    // console.log(usuario)
    let body = 'username='+usuario.email+ '&password=' +usuario.contrasenia + '&grant_type=password';
    let headAuthBas = this.headersAut.set('Authorization', 'Basic ' + btoa('user:user'));


    return this.http.post<any>(this.urlApiAuth +'oauth/token',body,{headers:headAuthBas});

  }

  registrarCliente(cliente:any,imagen:any):Observable<any>{
    let clienteGson =JSON.stringify(cliente, null, 0);
    var formData: any = new FormData();
    formData.append('usuario', clienteGson);
    console.log(clienteGson)
    formData.append('imagen', imagen);

    return this.http.post<any>(this.urlApiUser+'tours-business-serv-user/v1/createUser' ,formData)
  }



  traerImagegnCliente(nombre_imagen:string){
    return this.http.get(`${this.urlApiUser}tours-business-serv-user/v1/imgcliente/${nombre_imagen}`, { responseType: 'blob' });
  }

}
