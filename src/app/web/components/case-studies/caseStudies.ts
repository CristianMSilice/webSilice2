export class caseStudies {
    tabName: String;
    company: String;
    text: String;
    link: _link;
    avatar: avatar;
    imagen: avatar;
    chatID: String;
    constructor(tabName: String, company: String, text: String, link: _link, avatar: avatar, imagen: avatar, chatID: String) {
        this.tabName = tabName;
        this.company = company;
        this.text = text;
        this.link = link;
        this.imagen = imagen;
        this.avatar = avatar;
        this.chatID = chatID;
    }
}

class avatar {
    private static url= 'assets/images/casos/';
    src: string;
    constructor(src) {
        this.src = avatar.url +src;
    }
}

class _link {
    text: String;
    link: String;
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
}

export const CASESTUDIES = [
    new caseStudies(
        'Carolina',
        'Ayuntamiento de Almendralejo',
        `Carolina, brinda respuestas automáticas a los ciudadanos; está basada en la tecnología de Inteligencia artificial,
         y el desarrollo de motores de lenguaje natural, que le permite al cliente brindar una atención automatizada, 
         pero al mismo tiempo humanizada ya que nuestros asistentes virtuales tienen la habilidad de interpretar intencionalidad.
         Esta tecnología ha ganado la versión X de los Premios CNIS en España en la categoría de Participación Ciudadana y al mismo tiempo,
          nos ha permitido mejorar la eficacia y eficiencia en la atención ciudadana, optimizar los procesos, ahorrar costos y además lograr
           la satisfacción de los ciudadanos.`,
        new _link('Quiero hablar con Carolina', 'https://api.whatsapp.com/send?phone=34669736321&text=%C2%A1Hola!'),
        new avatar('carolina.png'),
        new avatar('image-carolina.jpg'),
        'caso-carolina'
    ),

    new caseStudies(
        'Doctora Clara',
        'Secretaria de Salud de Bogotá',
        `<p><strong>Plataforma de atención ciudadana omnicanal</strong> que facilita la gestión y centralización de pacientes positivos
         para COVID19 y sus contactos cercanos, de esta manera permite por medio de la comunicación proactiva y eficiente entre el
          <strong>ciudadano</strong> y la administración el conocimiento y control de los centros epidemiológicos.</p>
          <p>La Doctora Clara realiza alrededor de <strong>15.000 llamadas diarias</strong> optimizando el proceso de triaje
            a los pacientes con sintomatología y adaptándose a la tecnología con la que cuente cada usuario.</p>
            <p><strong>¡Innovación en el sector salud!</strong></p>`,
        new _link('Quiero hablar con Doctora Clara', 'http://api.whatsapp.com/send?phone=573058168975'),
        new avatar('clara.png'),
        new avatar('image-clara.jpg'),
        'caso-clara'
    ),

    new caseStudies(
        'Ariel',
        'Banco Nacional de Panamá',
        `<p>El <strong>asistente virtual</strong> Ariel hace  parte del <strong>plan estratégico de transformación digital</strong> de los canales de atención al usuario del Banco Nacional de Panamá.</p><p> Ariel: “Asistente de Respuesta Interactiva en Línea” hace parte de una <strong>plataforma de inteligencia artificial</strong> diseñada para generar conversaciones en vivo por medio de diferentes canales adaptados a las preferencias de los usuarios facilitando y optimizando la labor de los colaboradores y por ende los recursos financieros.</p><p><strong>¡Transformación digital para el sector financiero!</strong></p>`,
        new _link('Quiero hablar con Ariel', 'http://api.whatsapp.com/send?phone=50765095151'),
        new avatar('ariel.png', ),
        new avatar('image-ariel.jpg'),
        'caso-ariel'
    ),

    new caseStudies(
        'Isa',
        'Do It Center Panamá',
        `ISA, asistente virtual de Do it Center, genera un canal de atención digital a través de WhatsApp, en donde los usuarios tienen posibilidades como: compras, ofertas, cotizaciones, seguimiento de pedidos, preguntas frecuentes, garantías-servicio técnico y más…
        ISA hace parte de un ecosistema digital que va en pro hacia la optimización de la experiencia de usuario y las tendencias de la nueva economía digital.`,
        new _link('Quiero hablar con Isa', 'https://api.whatsapp.com/send?phone=50765507413&text=%C2%A1Hola!'),
        new avatar('gaby.png', ),
        new avatar('image-gaby.jpg'),
        'caso-gaby'
    ),

    new caseStudies(
        'Becky',
        'Instituto de Becas y Crédito Educativo de Sonora, México',
        `<p>Becky es una <strong>asistente virtual</strong> enfocada en la <strong>atención ciudadana</strong> y para dar respuesta en el sector académico.</p><p>Los usuarios pueden conocer el estatus de alguna solicitud ya sea beca y/o crédito realizada en el instituto.Esto permite al ciudadano obtener esta <strong>información de manera rápida y segura</strong>.</p>`,
        new _link('Quiero hablar con Becky', 'https://api.whatsapp.com/send?phone=5216629361843&text=%C2%A1Hola!'),
        new avatar('becky.png', ),
        new avatar('image-becky.jpg'),
        'caso-becky'
    ),

]
