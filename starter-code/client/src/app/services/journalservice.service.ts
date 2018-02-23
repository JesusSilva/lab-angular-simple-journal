import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
    BASE_URL: String = 'http://localhost:3000';

    constructor(private http: Http) { }

    getEntriesList():Observable<any> {
        return this.http.get('http://localhost:3000/api/journal-entries')
        .map(res => res.json());
    }

    getSingleEntry(id):Observable<any> {
        return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
        .map(res => res.json());
    }
}