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
    await fs.copy('./src/styles.scss', './dist/elements/_chat.scss')
    await fs.copy('./src/assets/config.json', './dist/elements/config.json')
    await fs.copy('./src/assets/logochat_red.svg', './dist/elements/assets/logochat_red.svg')
    await fs.copy('./src/assets/logochat_white.svg', './dist/elements/assets/logochat_white.svg')
    await fs.copy('./src/assets/cancel.png', './dist/elements/assets/cancel.png')
    await fs.copy('./src/assets/logobanco.png', './dist/elements/assets/logobanco.png')
    await fs.copy('./src/assets/sendIcon.svg', './dist/elements/assets/sendIcon.svg')
    await fs.copy('./src/assets/user.svg', './dist/elements/assets/user.svg')
    await fs.copy('./src/assets/pdfIcon.svg', './dist/elements/assets/pdfIcon.svg')
    await fs.copy('./src/assets/attachedIcon.svg', './dist/elements/assets/attachedIcon.svg')
    await fs.copy('./src/assets/emojiIcon.svg', './dist/elements/assets/emojiIcon.svg')
    await fs.copy('./src/assets/wa.png', './dist/elements/assets/wa.png')
    await fs.copy('./src/assets/te.png', './dist/elements/assets/te.png')
    await fs.copy('./src/assets/me.png', './dist/elements/assets/me.png')
    await fs.copy('./src/assets/BotBody.svg', './dist/elements/assets/BotBody.svg')
    await fs.copy('./src/assets/silice-09.png', './dist/elements/assets/silice-09.png')



    console.info('Elements created successfully!')

})()