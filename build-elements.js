const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/elements-build/polyfills.js',
        './dist/elements-build/runtime.js',
        './dist/elements-build/main.js'
    ]

    await fs.ensureDir('./dist/elements')

    await concat(files, './dist/elements/chat-widget.js')

    await fs.copy('./demo.html', './dist/elements/index.html')
    await fs.copy('./angular-elements-logo.png', './dist/elements/angular-elements-logo.png')

    await fs.copy('./src/assets/config.json', './dist/elements/config.json')
        //await fs.copy('./src/assets/logoadiper.png', './dist/elements/assets/logoadiper.png')
        // await fs.copy('./src/assets/logochat_white.svg', './dist/elements/assets/logochat_white.svg')
        //await fs.copy('./src/assets/logopau.png', './dist/elements/assets/logopau.png')
    await fs.copy('./src/assets/cancel.png', './dist/elements/assets/cancel.png')
    await fs.copy('./src/assets/bankblanco.png', './dist/elements/assets/bankblanco.png')
    await fs.copy('./src/assets/wa.png', './dist/elements/assets/wa.png')
    await fs.copy('./src/assets/te.png', './dist/elements/assets/te.png')
    await fs.copy('./src/assets/me.png', './dist/elements/assets/me.png')



    console.info('Elements created successfully!')

})()