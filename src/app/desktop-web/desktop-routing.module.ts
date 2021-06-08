import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../desktop-web/pages/home/home.component';
import { DesktopWebComponent } from './desktop-web/desktop-web.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactoComponent } from './pages/experiencia/contacto/contacto.component';
import { PageCasosComponent } from './pages/page-casos/page-casos.component';
import { PageSolucionesComponent } from './pages/page-soluciones/page-soluciones.component';
import { PresenciaComponent } from './pages/somos/presencia/presencia.component';
import { SedeColombiaComponent } from './pages/somos/sedes/colombia/sede-colombia.component';
import { sedeEspanaComponent } from './pages/somos/sedes/espana/sede-espana.component';
import { SedePanamaComponent } from './pages/somos/sedes/sede-panama/sede-panama.component';
import { SomosComponent } from './pages/somos/somos/somos.component';
import { TrayectoriaComponent } from './pages/trayectoria/trayectoria.component';

const routes: Routes = [
  {
    path: '', component:DesktopWebComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'nosotros', component: SomosComponent, },
      { path: 'nosotros/trayectoria', component:TrayectoriaComponent},
      { path: 'nosotros/equipo', component:EquipoComponent},
      { path: 'nosotros/presencia', component: PresenciaComponent },
      { path: 'nosotros/sedes/panama', component: SedePanamaComponent },
      { path: 'nosotros/sedes/colombia', component: SedeColombiaComponent },
      { path: 'nosotros/sedes/espana', component: sedeEspanaComponent },
      { path: 'soluciones', component: PageSolucionesComponent },
      { path: 'casos', component: PageCasosComponent },
      { path: 'experiencia/contacto', component: ContactoComponent },
      // { path: 'experiencia/itm', component: LaboratorioComponent },
      // { path: 'blog', component: BlogComponent },
      // { path: 'blog/:id', component: SingleComponent },
      { path: '**', redirectTo: '/home',  }
    ]
  },
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ], 
  exports:[
    RouterModule
  ]
})
export class DesktopRoutingModule { }
