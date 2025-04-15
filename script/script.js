function mudarTexto() {
    document.getElementById("texto").textContent = "Texto alterado!";
  }

  let valor = 0;
  function alterarContador(num){
    valor += num;
    document.getElementById("contador").textContent = valor;
  }

  document.getElementById("botaoCor").addEventListener("click",
    () => {
        document.body.style.backgroundColor = "rgb(" + Math.random()*255 + ", " + Math.random()*255 + ", " + Math.random()*255 + ")";
    }
  );

  function coisarTexto(){
    const texto = document.getElementById("segredo");
    texto.style.display = texto.style.display === "none" ? "block" : "none";
  }

  function validar(){
    const nome = document.getElementById("nome").value;
    const msg = document.getElementById("mensagem");
    msg.textContent = nome === "" ? "Campo Obrigatório!" : `Olá ${nome}!`
  }

  function mudarCor(){
    const p = document.getElementById("estilo");
    p.style.color = "red";
    p.style.fontWeight = "bold"; 
  }

  document.getElementById("addTarefa").addEventListener(
    "click", () => {
        const texto = document.getElementById("tarefa").value;
        if(texto !== ""){
            const li = document.createElement("li");
            li.textContent = texto;
            document.getElementById("lista").appendChild(li);
            document.getElementById("tarefa").value = "";
        }
    }
  );

const caixa = document.getElementById("caixa");

function corAleatoria(){
    return "rgb(" + Math.random()*255 + ", " + Math.random()*255 + ", " + Math.random()*255 + ")";
}

caixa.addEventListener("mouseover", () => {
    caixa.style.backgroundColor = corAleatoria();
  }
);

caixa.addEventListener("mouseout", () => {
    const caixa = document.getElementById("caixa");
    caixa.style.backgroundColor = "gray";
  }
);