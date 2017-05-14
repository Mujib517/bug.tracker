import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {Task} from './../models/task.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
//import 'rxjs/add/operator/toPromise';


@Injectable()
export class TaskService {

    constructor(private http: Http) { }

    get(): Observable<Task[]> {
        return this.http.get('http://localhost:3000/tasks')
            .map(response => response.json())
            .retry(3);
        //.toPromise();
    }
}