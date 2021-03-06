
const nomeInput = document.getElementById('cliente')
const enderecoInput = document.getElementById('delivery-endereco')
const telefoneInput = document.getElementById('delivery-endereco')
const pesoInput = document.getElementById('delivery-peso')

const URL = `https://mariana-inoue-database.herokuapp.com/deliveries`

function getDelivery() {
  fetch(URL)
    .then((resposta) => resposta.json())
    .then((data) => preencherDados(data))
    .catch((erro) => console.error(erro))
}

getDelivery()

function favoriteDelivery() {}

var listing_table = document.getElementById('tabela-lista-corpo')

listing_table.innerHTML = ""

function preencherDados(lista) {
  lista.forEach((element, index) => {
    let linha = document.createElement('tr')
    let itemDaLinhaId = document.createElement('td')
    itemDaLinhaId.innerText = element.id
    let itemDaLinhaNome = document.createElement('td')
    itemDaLinhaNome.innerText = element.nome
    let itemDaLinhaEndereco = document.createElement('td')
    itemDaLinhaEndereco .innerText = element.endereco
    let itemDaLinhaTelefone = document.createElement('td')
    itemDaLinhaTelefone.innerText = element.telefone
    let itemDaLinhaPeso = document.createElement('td')
    itemDaLinhaPeso.innerHTML = element.peso
    let itemDaLinhaDelete = document.createElement('td')


  const btnAdd = document.getElementById('btnAddCadastro')
    btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ 
            nome: nomeInput.value,
            endereco:enderecoInput.value, 
            telefone:telefoneInput.value,
            peso:pesoInput.value
              }) ,
            headers:{
                'Content-Type':'application/json; charset= UTF-8'
            }
        })
        .then(function(response){
          console.log(response);
            return response.json()
         })
        .then(function(data){
            console.log(data)
        })
        .catch((erro) => console.error(erro))
    })
 

    const buttonDel = document.createElement("button")
    buttonDel.addEventListener("click", function () {
      fetch(`${URL}/${element.id}`, {
        method: "DELETE",
      })
        .then((resposta) => resposta.json())
        .then((data) => {
          console.log(data)
          var i = this.parentNode.parentNode.rowIndex
          document.getElementById("tabela-lista").deleteRow(i)
        })
        .catch((erro) => console.error(erro))
    })

    let deleteIcon = document.createElement('i')
    deleteIcon.className = 'far fa-trash-alt'
    buttonDel.appendChild(deleteIcon)
    itemDaLinhaDelete.appendChild(buttonDel)

    linha.appendChild(itemDaLinhaId)
    linha.appendChild(itemDaLinhaNome)
    linha.appendChild(itemDaLinhaEndereco)
    linha.appendChild(itemDaLinhaTelefone)
    linha.appendChild(itemDaLinhaPeso)
    linha.appendChild(itemDaLinhaDelete)
    listing_table.appendChild(linha)
  })
}

