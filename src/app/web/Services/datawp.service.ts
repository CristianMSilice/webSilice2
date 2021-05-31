import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Somos, Trayectoria, Equipo, Presencia, Infografia, Soluciones, Casos, Blog } from '../models';
import { Observable } from 'rxjs';

const SERVER_URL = "http://34.95.197.164/wp-json/wp/v2/";

@Injectable({  
	providedIn: 'root'  
})  

export class DataWpService {
	constructor(private http: HttpClient) {}
	
	getSomos(path: string): Observable<Somos[]> {
		return this.http.get<Somos[]>(SERVER_URL + path) 
	}

	getTrayectoria(path: string): Observable<Trayectoria[]> {
		return this.http.get<Trayectoria[]>(SERVER_URL + path)
	}

	getEquipo(path: string): Observable<Equipo[]> {
		return this.http.get<Equipo[]>(SERVER_URL + path)
	}

	getPresencia(path: string): Observable<Presencia[]> {
		return this.http.get<Presencia[]>(SERVER_URL + path)
	}

	getInfografia(path: string): Observable<Infografia[]> {
		return this.http.get<Infografia[]>(SERVER_URL + path)
	}

	getSoluciones(path: string): Observable<Soluciones[]> {
		return this.http.get<Soluciones[]>(SERVER_URL + path)
	}

	getCasos(path: string): Observable<Casos[]> {
		return this.http.get<Casos[]>(SERVER_URL + path)
	}

	getAll(path: string, total: number): Observable<Blog[]> {
		return this.http.get<Blog[]>(SERVER_URL + path, {
			params: {
				per_page: `${total}`
			}
		})
	}

	getPostById(id: string): Observable<Blog> {
		return this.http.get<Blog>(`${SERVER_URL}posts/${id}`)
	}
}

