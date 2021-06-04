import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../desktop-web/pages/home/home.component';
import { DesktopWebComponent } from './desktop-web/desktop-web.component';
import { SomosComponent } from './pages/somos/somos/somos.component';

const routes: Routes = [
  {
    path: '', component:DesktopWebComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'nosotros', component: SomosComponent, },
      // { path: 'nosotros/trayectoria', component:PageTrayectoriaComponent},
      // { path: 'nosotros/equipo', component:PageEquipoComponent},
      // { path: 'nosotros/presencia', component: PagePresenciaComponent },
      // { path: 'nosotros/sedes/panama', component: PagePanamaComponent },
      // { path: 'nosotros/sedes/colombia', component: PageColombiaComponent },
      // { path: 'nosotros/sedes/espana', component: PageEspanaComponent },
      // { path: 'experiencia/itm', component: LaboratorioComponent },
      // { path: 'soluciones', component: PageSolucionesComponent },
      // { path: 'casos', component: PageCasosComponent },
      // { path: 'experiencia/contacto', component: ContactoComponent },
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
