import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog, Casos, Equipo, Infografia, Presencia, Soluciones, Somos, Trayectoria } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataWpService {

   SERVER_URL = "https://cms-portal.silice.si/wp-json/wp/v2/";

  constructor(private http: HttpClient) {}
	
	getSomos(path: string): Observable<Somos[]> {
		return this.http.get<Somos[]>(this.SERVER_URL + path) 
	}

	getTrayectoria(path: string): Observable<Trayectoria[]> {
		return this.http.get<Trayectoria[]>(this.SERVER_URL + path)
	}

	getEquipo(path: string): Observable<Equipo[]> {
		return this.http.get<Equipo[]>(this.SERVER_URL + path)
	}

	getPresencia(path: string): Observable<Presencia[]> {
		return this.http.get<Presencia[]>(this.SERVER_URL + path)
	}

	getInfografia(path: string): Observable<Infografia[]> {
		return this.http.get<Infografia[]>(this.SERVER_URL + path)
	}

	getSoluciones(path: string): Observable<Soluciones[]> {
		return this.http.get<Soluciones[]>(this.SERVER_URL + path)
	}

	getCasos(path: string): Observable<Casos[]> {
		return this.http.get<Casos[]>(this.SERVER_URL + path)
	}

	getAll(path: string, total: number): Observable<Blog[]> {
		return this.http.get<Blog[]>(this.SERVER_URL + path, {
			params: {
				per_page: `${total}`
			}
		})
	}

	getPostById(id: string): Observable<Blog> {
		return this.http.get<Blog>(`${this.SERVER_URL}posts/${id}`)
	}
}
