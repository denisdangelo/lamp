/**
 * simulador simples de uma lampada
 * @author Denis D'Angelo
 */
let chave = false
let lampada = true //a lampada esta ok

//precarregamento do arquivo de audio
let som = new Audio("sound/breaking-glass.mp3")
    //som.src = "sound/glassbreaking.wav" - outra forma de chamar o som, para quando tiver mais de um audio


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

