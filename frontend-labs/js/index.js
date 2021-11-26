const URL = `http://localhost:8000/deliveries`;

function getDelivery() {
  fetch(URL)
    .then((resposta) => resposta.json())
    .then((data) => preencherDados(data))
    .catch((erro) => console.error(erro))
}

getDelivery();

function favoriteDelivery() {}

var listing_table = document.getElementById("tabela-lista-corpo");

listing_table.innerHTML = "";

function createButtonFavorite(favorite) {
  const buttonFav = document.createElement("button");
  let favoriteIcon = document.createElement("i");
  favoriteIcon.className = "far fa-star";
  buttonFav.innerHTML = favoriteIcon;
  document.body.appendChild(buttonFav);
}

function preencherDados(lista) {
  lista.forEach((element, index) => {
    let linha = document.createElement("tr");
    let itemDaLinhaId = document.createElement("td");
    itemDaLinhaId.innerText = element.id;
    let itemDaLinhaNome = document.createElement("td");
    itemDaLinhaNome.innerText = element.nome;
    let itemDaLinhaEndereco = document.createElement("td");
    itemDaLinhaEndereco .innerText = element.endereco;
    let itemDaLinhaTelefone = document.createElement("td");
    itemDaLinhaTelefone.innerText = element.telefone;
    let itemDaLinhaPeso = document.createElement("td");
    itemDaLinhaPeso.innerHTML = element.peso;
    let itemDaLinhaDelete = document.createElement("td");

    


        let cliente = document.getElementById('cliente').value
        let endereco= document.getElementById('delivery-endereco').value
        let telefone= document.getElementById('delivery-telefone').value
        let peso= document.getElementById('delivery-peso').value

    const btnAdd = document.getElementById('btnAddCadastro')
    btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
        fetch(`http://localhost:8000/deliveries`, {
            method: 'POST',
            body: JSON.stringify({
                cliente:cliente,
                endereco:endereco,
                telefone:telefone,
                peso:peso
            }),
            headers:{
                'Content-Type':'application/json; charset= UTF-8'
            }
        })
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            location.reload()
        })
    })


    const buttonDel = document.createElement("button");
    buttonDel.addEventListener("click", function () {
      fetch(`${URL}/${element.id}`, {
        method: "DELETE",
      })
        .then((resposta) => resposta.json())
        .then((data) => {
          var i = this.parentNode.parentNode.rowIndex;
          document.getElementById("tabela-lista").deleteRow(i);
        })
        .catch((erro) => console.error(erro));
    });

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "far fa-trash-alt";
    buttonDel.appendChild(deleteIcon);
    itemDaLinhaDelete.appendChild(buttonDel);

    linha.appendChild(itemDaLinhaId);
    linha.appendChild(itemDaLinhaNome);
    linha.appendChild(itemDaLinhaEndereco);
    linha.appendChild(itemDaLinhaTelefone);
    linha.appendChild(itemDaLinhaPeso);
    linha.appendChild(itemDaLinhaDelete);
    listing_table.appendChild(linha);
  });
}