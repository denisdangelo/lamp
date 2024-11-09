/**
 * simulador simples de uma lampada
 * @author Denis D'Angelo
 */
let chave = false
let lampada = true //a lampada esta ok

//precarregamento do arquivo de audio
let som = new Audio("sound/breaking-glass.mp3")
    //som.src = "sound/glassbreaking.wav" - outra forma de chamar o som, para quando tiver mais de um audio

// lanterna (pré carregamento)
let stream, track //variaveis de apoio à lanterna
inicializarLanterna()

function quebrar() {
    if (lampada === true) {
        document.getElementById('lamp').src = "img/broken.jpg"
        //reproduzindo um arquivo de audio no JS
        //passo 1: copiar o arquivo de audio para o projeto
        //passo 2: usar a classe Audio (biblioteca interna do JS)
        //passo 3: precarregar o arquivo de audio para sincronizar com a troca de imagem (UX)
        
        som.play()
        
        lampada = false //variavel lampada está quebrada
    }
}



//variavel recebe o valor de false
//a função recebe o if else
// se o valor de chave for = à false ao clicar (está no html) na imagem
function onoff() {
    

    if (chave === false) {
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true //o JS agora sabe que a chave está ligada

        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg" // muda a imagem da liuz para acesa
        }
    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false //o JS agora sabe que a chave está ligada

        if (lampada === true) {
            document.getElementById('lamp').src = "img/off.jpg" // muda a imagem da luz para acesa
        }
    }
    
}

//estudo de eventos relacionados à click do mouse (pressionado ou não pressionado) e telas touch
//Passo 1: capturar os elementos do HTML (DOM)
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

//passo 2: manipular o evento mouse pressionado
//eddEventLister "escuta de eventos em tempo real"
//mousedown - mouse pressionado constantemente
//mouseup - soltar o botão do mouse
//touchstart - tocar na tela e manter
//touchend - deixar de pressionar a tela touch

//pressionar o botão do mouse e manter no botão
botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    console.log("botão do mouse pressionado")
    //se a lampada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && chave === false){
        lampadaImg.src = "img/on.jpg"
    }
})

//deixar de pressionar o mouse no botão
botao.addEventListener('mouseup', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    console.log("botão do mouse solto")
    if (lampada === true && chave === false){
        lampadaImg.src = "img/off.jpg"
    }
})

//pressionar a tela touch e manter no botão
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    console.log("tela pressionada no botão")
    if (lampada === true && chave === false){
        lampadaImg.src = "img/on.jpg"
    }
})

//deixar de pressionar a tela touch no botão
botao.addEventListener('touchend', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    console.log("a tela não está presionada no botão")
    if (lampada === true && chave === false){
        lampadaImg.src = "img/off.jpg"
    }
})

//lanterna (torch)
//try cat - tratamento de excessões
async function incializarLanterna(){
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

async function ligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}

async function desligar(){

}
