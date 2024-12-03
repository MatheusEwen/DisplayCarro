window.onload = function() {
  var estadoLuz = true
  var estadoGaragem = true
  let objBotaoLuz = document.getElementById("botaoLuz")
  let objBotaoSensor = document.getElementById("botaoSensor")
  let objBotaoGaragem = document.getElementById("botaoGaragem")

  objBotaoGaragem.onclick = function(){
    AbreFechaGaragem()
  }

  objBotaoLuz.onclick = function(){
    trocaEstado()
  }

  objBotaoSensor.onclick = function(){
    chamaSensor()
  }

  function AbreFechaGaragem(){
    if(estadoGaragem){
      document.getElementById("garagem").src = "../imgs/garagemAberta.png"
      estadoGaragem = false
    } else {
      document.getElementById("garagem").src = "../imgs/garagemFechada.png"
      estadoGaragem = true
    }
  }

  function trocaEstado() {
    if (estadoLuz){
      document.getElementById("luz").src = "../imgs/lampAcessa.png"
      estadoLuz = false
    } else{
      document.getElementById("luz").src = "../imgs/lampApagada.png"
      estadoLuz = true

    }
  }

  function chamaSensor(){
    const opcao1 = "Sem movimentação em frente de casa"
    const opcao2 = "Há movimentação em frente de casa"
    var Aleatorio = Math.floor(Math.random() * 2)
    if(Aleatorio == 1){
      document.getElementById("txtSensor").innerHTML = opcao1
    } else {
      document.getElementById("txtSensor").innerHTML = opcao2
    }

    document.getElementById("sensor").style.display = "flex"
    setTimeout(desativaSensor, 2000 )
  
  }

  function desativaSensor(){
    document.getElementById("sensor").style.display = "none"
  }

}