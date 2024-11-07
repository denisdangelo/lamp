/**
 * simulador simples de uma lampada
 * @author Denis D'Angelo
 */

function quebrar(){
    document.getElementById('lamp').src="img/broken.jpg"
    //reproduzindo um arquivo de audio no JS
    //passo 1: copiar o arquivo de audio para o projeto
    //passo 2: usar a classe Audio (biblioteca interna do JS)
    let som = new Audio()
    som.src = "sound/glassbreaking.wav"
    som.play()
}