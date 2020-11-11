export class reviewFile {
  acceptedfiles;
  public file = {
    errormessage: {
      showError: false,
      message: '',
    }, // si el tipo de archivo genera algún error por no se valido para enviar
    kindfile: null, // tipo de archivo, un valor de acceptedfiles
    enabled: false, //Si el archivo está listo para enviar
  }
  input; 
  LoadedFile; //archivo cargado
  constructor(input: Element, acceptedfiles:Array<string>) {
    this.acceptedfiles=acceptedfiles;
    this.input=input;
    this.listener(input)
  }

  public listener(input: Element) {
    input.addEventListener('change', () => {
      let accepted = this.reviewFile(input)
      if (!accepted) {
        this.file.errormessage.showError = true
        this.file.errormessage.message = 'Solo se permiten PDF, Video e Imagenes'
      }
    })
  }
  private reviewFile(input): Boolean {
    let accepted = false
    this.file.enabled = false
    this.acceptedfiles.forEach((kind) => {
      if (input.files[0]) {
        if (input.files[0].type.includes(kind)) {
          accepted = true
          this.file.enabled = true
          this.file.kindfile = kind
          this.file.errormessage.showError = false
          this.generarVistaPrevia(kind, input.files[0])
        }
      } 
    })
    return accepted
  }

  private generarVistaPrevia(kind, file) {

    const reader = new FileReader()
    switch (kind) {
      case 'image':
        reader.addEventListener('load',  (event:any) => {
          this.LoadedFile = event.target.result;
          document
            .querySelector(`#archivo-preview-image`)
            .setAttribute('src', this.LoadedFile)
        })
        reader.readAsDataURL(file)
        break
      case 'video':
        reader.addEventListener('load',  (event :any) => {
          this.LoadedFile = event.target.result;
          let source:HTMLSourceElement = document.querySelector(`#archivo-preview-video`);
          source.setAttribute('src', this.LoadedFile);
          source.setAttribute('type', file.type);
        })
        reader.readAsDataURL(file)
      break;
      case 'pdf':
        reader.addEventListener('load',  (event:any) => {
          let blob = new Blob([file], { type: "application/pdf" });
          let objectURL = window.URL.createObjectURL(blob);
          this.LoadedFile = event.target.result;
          document
            .querySelector(`#archivo-preview-pdf`)
            .setAttribute('href', objectURL)
        })
        reader.readAsDataURL(file)
        break
      default:
        break
    }
  }
  public resetfile(){
    this.file ={
      errormessage: {
        showError: false,
        message: '',
      }, 
      kindfile: null,
      enabled: false,
    }
  }
  public sendfile(){
    this.file.enabled= true;
  }
  getMime(){
    try{
      return this.input.files[0].type;
    }catch{
      return false;
    }
  }
}
