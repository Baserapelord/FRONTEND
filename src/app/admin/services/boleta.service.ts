import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pageable } from 'src/app/core/models/Pageable';
// import { url_api } from 'src/app/core/shared/util/constantes';

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  urlApi = ""
  constructor(private http:HttpClient) {
    // this.urlApi = url_api
  }

  listarBoletas(pageable:Pageable):Observable<any>{
    return this.http.post<any>(this.urlApi+'api/bol/5ta_cat/v1.0.0/boleta/listarBoletas',pageable);
  }


}
