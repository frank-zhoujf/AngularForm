import { Injectable, Inject } from '@angular/core';
import { INameObject as NameObject } from '../models/Name/Name';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NameService {
    private submitNameApi: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.submitNameApi = baseUrl + 'api/SimpleForm/SubmitName';
    }

    submitName(name: NameObject) : Observable<any> {
      let options = this.getDefaultOptions();
      return this.http.post(this.submitNameApi, name, options)
    }

    private getDefaultOptions(): any {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return { headers: headers }
    }
}