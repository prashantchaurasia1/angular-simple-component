import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService{
    
    constructor( private http: HttpClient ){

    }
}