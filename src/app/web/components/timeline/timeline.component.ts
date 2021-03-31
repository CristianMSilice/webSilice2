import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  data=[
    {text:"Nuestro inicio surge del espíritu emprendedor de nuestro CEO Sergio Alvano con el nacimiento del proyecto OCYNET y la necesidad de implementar soluciones que masifiquen el acceso a la sociedad de la información y el entretenimiento. Cada día más ciudadanos interconectados...", name:"Los primeros pasos",time:"2001"},
    {text:"Con la fusión de dos PYMES Extremeñas y con un espíritu ampliar los proyectos Europeos llevados a cabo en el ámbito de la Educación con los primeros contenidos educativos multiplataforma, nace SILICE para ofrecer soluciones integrales de tecnología basadas en software libre.", name:"Nacimiento",time:"2005"},
    {text:"Como compromiso con la transformación digital de los ciudadanos, SÍLICE participa activamente en el proyecto LinEx, a través de la implementación de la distribución de LinEx para la administración pública, impulsando así uno de los mayores cambios tecnológicos en España.", name:"Un reto. Cambiar el mundo",time:"2007"},
    {text:"SILICE inicia su crecimiento internacional liderando junto a la Universidad Tecnológica de Panamá el primer congreso de Software Libre en Latinoamérica. Comienza nuestro camino de retos y aprendizajes en la conquista del mercado en LATAM comenzando por República de Panamá.", name:"Una misión: Think global",time:"2009"},
    {text:"Damos apertura a la primera oficina de negocios en Latinoamérica con las sedes de Panamá y Bogotá. Fruto de este trabajo y compromiso, somos seleccionada por el Gobierno de Panamá para realizar la Consultoría de Transformación Digital del proyecto de Modernización Municipal.", name:"Una visión: Play local",time:"2011"},
    {text:"Abrimos la 4ta oficina en Latinoamérica: Santiago de Chile. Continuando así  con la apuesta de la transformación de la administración pública. Ampliando proyectos y ganando experiencia que nos preparaban para los retos venideros mientras nuestro equipo crecía.", name:"El mundo está lleno de Talento",time:"2012"},
    {text:"Nace Smallshi, una plataforma Integral de Smart Social City; creando entornos digitales mediante la construcción de una identidad digital propia, eliminando la brecha digital y garantizando la generación de experiencias de usuario diferenciadoras.", name:"Sociedad digital - Economía digital",time:"2015"},
    {text:"Nace el municipios 360. Generando en más de 100 Ciudades de América Latina espacios digitales donde el ciudadano interactúe de manera real con el municipio, impulsando la gestión, participación, comunicación y transparencia.", name:"Ciudades: un ecosistema digital",time:"2016"},
    {text:"La visión de una sociedad digital nos impulsa a la implementación de PAU como Orquestador de comunicaciones y servicios  omnicanales. Así, llega el nacimiento de una nueva etapa basada en la generación de ecosistemas digitales sobre tecnología 100% implementada por SILICE.", name:"Reiniciando",time:"2017"},
    {text:"Avanza la apuesta por  la construcción de nuestro ecosistema omnicanal. La inversión en soluciones propias crece un 300% llevando a SILICE a implementar DSPayment, Omniturno, Omnibank, BPM Omnichanel. Un completo abanico de soluciones adaptables y eficientes.", name:"Construyendo valor agregado",time:"2018"},
    {text:"Tras 18 meses de investigación, experimentación y desarrollo nace ANA, el primer asistente omnicanal conversacional de una administración para la relación de atención y servicios con la ciudadanía. Origen Panamá, hub de culturas y sede Latinoamericana de SILICE.", name:"Todo cobra sentido",time:"2019"},
    {text:"El año donde el mundo nos retó a innovar. Año del mayor crecimiento global de SILICE. Más de 35 Proyectos Omnicanales, Más de 10 mercados. Más de 3.000.000 ciudadanos conectados gracias a PAU y su ecosistema Omnicanal. Aprendizaje, reinvención y crecimiento constante.", name:"El año del Covid",time:"2020"},
    {text:"Comprometidos con un nuevo año para seguir escribiendo nuestra historia, para seguir construyendo ecosistemas digitales que contribuyan a construir una sociedad mejor, listos para los nuevos retos y aprendizajes venideros. ¿Te unes?", name:"Listos para innovar",time:"2021"},
  ]
  selectedOption = 0;
  ngOnInit() {
  }
  step(num) {
    let step = this.selectedOption + parseInt(num) ;
    if(step < 0 || step > this.data.length - 1) return
    this.selectedOption = step;
  }
}
