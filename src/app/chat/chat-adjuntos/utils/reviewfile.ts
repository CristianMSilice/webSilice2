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
        this.file.errormessage.message = 'Tipo de archivo no permitido'
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
        reader.addEventListener('load', function () {
          let filereader: any = this.result;
          document
            .querySelector(`#archivo-preview-image`)
            .setAttribute('src', filereader)
        })
        reader.readAsDataURL(file)
        break
      case 'video':
        reader.addEventListener('load', function () {
          let source:HTMLSourceElement = document.querySelector(`#archivo-preview-video`);
          let blobURL = URL.createObjectURL(file);
          source.setAttribute('src', blobURL);
          // source.setAttribute('type', file.type);
        })
        reader.readAsDataURL(file)
      break;

      default:
        break
    }
  }
  public resetfile(){
    this.file ={
      errormessage: {
        showError: true,
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
