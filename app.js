/**
 * simulador simples de uma lampada
 * @author Denis D'Angelo
 */
let chave = false
let lampada = true //a lampada esta ok



function quebrar(){
    //reproduzindo um arquivo de audio no JS
    //passo 1: copiar o arquivo de audio para o projeto
    //passo 2: usar a classe Audio (biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
    document.getElementById('lamp').src="img/broken.jpg"
    lampada = false //variavel lampada está quebrada
}



//variavel recebe o valor de false
//a função recebe o if else
// se o valor de chave for = à false ao clicar (está no html) na imagem
function onoff(){
    if (chave === false && lampada === true) {
        document.getElementById('interruptor').src="img/swon.png"
        chave = true //o JS agora sabe que a chave está ligada
        document.getElementById('lamp').src="img/on.jpg" // muda a imagem da liuz para acesa
    } else if (lampada === true){
        document.getElementById('interruptor').src="img/swoff.png"
        chave = false //o JS agora sabe que a chave está ligada
        document.getElementById('lamp').src="img/off.jpg" // muda a imagem da luz para acesa
    } else if (lampada === false && chave === false) {
        document.getElementById('lamp').src="img/broken.jpg" //está errado
        document.getElementById('lamp').src="img/off.jpg" // muda a imagem da luz para acesa
    } else {
        document.getElementById('lamp').src="img/broken.jpg" //está errado
        document.getElementById('interruptor').src="img/swon.png" 
    }
    }

