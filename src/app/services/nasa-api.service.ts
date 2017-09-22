import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NasaApiService {

  private listUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse';
  private singleUrl = 'https://api.nasa.gov/neo/rest/v1/neo/';
  private apiKey = '95Abc1sRqRCVcDIENy41MaDxVpAJmjAEXm54ByMb';

  constructor(private http: Http) { }

  getList(page: number): Promise<any> {
    const params = {
      page,
      size: 10,
      api_key: this.apiKey
    };
    return this.http
      .get(this.listUrl, { params })
      .toPromise()
      .then((res: any) => JSON.parse(res._body))
      .catch((error: any) => {
        console.error(error);
        throw new Error('Server error');
      });
  }

  getById(id: number): Promise<any> {
    return this.http
      .get(this.singleUrl + id, { params: {api_key: this.apiKey} })
      .toPromise()
      .then((res: any) => JSON.parse(res._body))
      .catch((error: any) => {
        if (error.status === 404) {
          return null;
        } else {
          console.error(error);
          throw new Error('Server error');
        }
      });
  }
}
