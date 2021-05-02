import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  data=[
    {text:"Comprometidos con un nuevo año para seguir escribiendo nuestra historia, para seguir <strong>construyendo ecosistemas digitales que contribuyan a construir una sociedad mejor</strong>, listos para los nuevos retos y aprendizajes venideros. ¿Te unes?", name:"Listos para innovar",time:"2021"},
    {text:"El año donde el mundo nos retó a innovar. Año del mayor crecimiento global de <strong class='c-orange'>SILICE</strong>. Más de 35 Proyectos Omnicanales, Más de 10 mercados. <strong>Más de 3.000.000 ciudadanos conectados gracias a <strong class='c-orange'>PAU</strong> y su ecosistema Omnicanal</strong>. Aprendizaje, reinvención y crecimiento constante.", name:"El año del Covid",time:"2020"},
    {text:"Tras 18 meses de investigación, experimentación y desarrollo nace ANA, el <strong>primer asistente omnicanal conversacional</strong> de una administración para la relación de atención y servicios con la ciudadanía. Origen Panamá, hub de culturas y sede Latinoamericana de <strong class='c-orange'>SILICE</strong>.", name:"Todo cobra sentido",time:"2019"},
    {text:"Avanza la apuesta por  la construcción de nuestro <strong>ecosistema omnicanal</strong>. La inversión en soluciones propias crece un 300% llevando a <strong class='c-orange'>SILICE</strong> a implementar <strong>DSPayment, Omniturno, Omnibank, BPM Omnichanel</strong>. Un completo abanico de soluciones adaptables y eficientes.", name:"Construyendo valor agregado",time:"2018"},
    {text:"La visión de una sociedad digital nos impulsa a la implementación de <strong class='c-orange'>PAU</strong> como <strong>Orquestador de comunicaciones y servicios  omnicanales</strong>. Así, llega el nacimiento de una nueva etapa basada en la generación de ecosistemas digitales sobre tecnología 100% implementada por <strong class='c-orange'>SILICE</strong>.", name:"Reiniciando",time:"2017"},
    {text:"Nace el <strong class='c-orange'>Municipios 360</strong>. Generando en más de 100 Ciudades de América Latina espacios digitales donde el <strong>ciudadano interactúe de manera real con el municipio</strong>, impulsando la gestión, participación, comunicación y transparencia.", name:"Ciudades: un ecosistema digital",time:"2016"},
    {text:"Nace <strong class='c-orange'>Smallshi</strong>, una plataforma Integral de Smart Social City; creando entornos digitales mediante la construcción de una <strong>identidad digital</strong> propia, eliminando la brecha digital y garantizando la generación de experiencias de usuario diferenciadoras.", name:"Sociedad digital - Economía digital",time:"2015"},
    {text:"Abrimos la 4ta oficina en Latinoamérica: Santiago de Chile. Continuando así  con la apuesta de la <strong>transformación de la administración pública</strong>. Ampliando proyectos y ganando experiencia que nos preparaban para los retos venideros mientras nuestro equipo crecía.", name:"El mundo está lleno de Talento",time:"2012"},
    {text:"Damos apertura a la primera oficina de negocios en Latinoamérica con las sedes de Panamá y Bogotá. Fruto de este trabajo y compromiso, somos seleccionados por el Gobierno de Panamá para realizar la Consultoría de <strong>Transformación Digital</strong> del proyecto de Modernización Municipal.", name:"Una visión: Play local",time:"2011"},
    {text:"<strong class='c-orange'>SILICE</strong> inicia su crecimiento internacional liderando junto a la Universidad Tecnológica de Panamá el primer congreso de Software Libre en Latinoamérica. Comienza nuestro camino de retos y aprendizajes en la conquista del mercado en <strong>LATAM</strong> comenzando por República de Panamá.", name:"Una misión: Think global",time:"2009"},
    {text:"Como compromiso con la <strong>transformación digital</strong> de los ciudadanos, <strong class='c-orange'>SILICE</strong> participa activamente en el proyecto LinEx, a través de la implementación de la distribución de LinEx para la administración pública, impulsando así uno de los mayores cambios tecnológicos en España.", name:"Un reto. Cambiar el mundo",time:"2007"},
    {text:"Con la fusión de dos PYMES Extremeñas y con un espíritu ampliar los proyectos Europeos llevados a cabo en el ámbito de la Educación con los primeros contenidos educativos multiplataforma, nace <strong class='c-orange'>SILICE</strong> para ofrecer <strong>soluciones integrales de tecnología</strong> basadas en software libre.", name:"Nacimiento",time:"2005"},
    {text:"Nuestro inicio surge del espíritu emprendedor de nuestro CEO Sergio Alvano con el nacimiento del proyecto OCYNET y la necesidad de implementar soluciones que masifiquen el acceso a la sociedad de la información y el entretenimiento. Cada día más <strong>ciudadanos interconectados</strong>...", name:"Los primeros pasos",time:"2001"},
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
