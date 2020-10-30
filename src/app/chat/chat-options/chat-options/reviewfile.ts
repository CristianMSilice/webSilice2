export class reviewFile {
  readonly  acceptedfiles :Array<string>= ['pdf', 'image','video']
  public file = {
    errormessage: {
      value: true,
      message: '',
    }, // si el tipo de archivo genera algún error por no se valido para enviar
    kindfile: null, // tipo de archivo, un valor de acceptedfiles
    enabled: false, //Si el archivo está listo para enviar
  }
  constructor(input: Element) {
    this.listener(input)
  }

  public listener(input: Element) {
    input.addEventListener('change', () => {
      let accepted = this.reviewFile(input)
      if (accepted) {
        this.sendfile(input)
      } else {
        this.file.errormessage.value = false
        this.file.errormessage.message = 'Tipo de archivo no permitido'
      }
    })
  }
  private reviewFile(input): Boolean {
    let accepted = false
    this.acceptedfiles.forEach((kind) => {
      if (input.files[0]) {
        console.log(input.files[0].type);
        if (input.files[0].type.includes(kind)) {
          accepted = true
          this.file.enabled = true
          this.file.kindfile = kind
          this.file.errormessage.value = true

          this.generarVistaPrevia(kind, input.files[0])
        } else {
          this.file.enabled = false
        }
      } else {
        this.file.enabled = false
      }
    })
    return accepted
  }
  private sendfile(input) {}

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
        value: true,
        message: '',
      }, 
      kindfile: null,
      enabled: false,
    }
  }
}
