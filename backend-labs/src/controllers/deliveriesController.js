const Delivery = require('../models/delivery') 
// const tabelaDeliveries = Delivery.delivery

const createDelivery=async(req,res)=>{
    const { nome, endereco, peso, telefone } = req.body

    const diretorJaExiste=await Diretor.findOne({ nome, endereco, peso, telefone })
    if(diretorJaExiste){
        return res.status(409).json({error:'Diretor ja cadastrado'})
    }
    try{
        const novoDiretor=await diretor.save()
        res.status(201).json(novoDiretor)

    }catch(err){
        res.status(400).json({ message:err.message })
    }

}

// const createDelivery = async(req, res) => {
//     const { nome, endereco, peso, telefone } = req.body

//     try {
//         const delivery = await Delivery.create({ nome, endereco, peso, telefone })
//         console.log(`Delivery ${delivery.nome} criado`)
//         res.status(201).send(delivery)
//     }catch(error) {
//         res.status(500).send({ message: error.message})
//     }
// }

const getAllDeliveries = async(req, res) => {
    try{
        const delivery = await Delivery.findAll()
        if(delivery){
            res.status(200).send(delivery)
        }else{
            res.status(204)
        }
    }catch(error) {
        res.status(500).send({ message: error.message})
    }
}

const deleteDelivery = async(req, res) => {
    const deliveryId = req.params.id
    try{
        const rowsDeleted = await Delivery.destroy({ where: { id: deliveryId } })
        if(rowsDeleted) {
            res.status(200).send({ message: `Delivery deletado com sucesso` })
            console.log(deliveryId)
        }else{
            res.status(404).send({ message: `Delivery com id ${deliveryId} não encontrado para deletar`})
        }
    }catch(error){
        res.status(500).send({ message:({ message: error.message })})
    }
}

// const postDeliveries = (req, res) => {
//     const requiredName = req.body.nome
//     const requiredAddress = req.body.endereco
//     const requiredWeight = req.body.peso
//     const requiredPhone = req.body.telefone
    

//     const newTeste ={
//         id: Math.random().toString(32).substr(2, 9),
//         nome: requiredName,
//         peso: requiredWeight,
//         endereco: requiredAddress,
//         telefone: requiredPhone
        
//     }

//     deliveriesController.push(newTeste)


//     res.status(200).send(`Publicado`)
//     console.log(newTeste);
// }


// // DELETE - Excluir uma entrega, removendo-a do banco de dados e da lista. 
// // DELETE /deliveries 
// // O botão Excluir na tabela deverá remover a entrega tanto do banco de dados quanto da lista. 
// // Algumas dicas e observações 
// const deleteDeliveries = (req, res) => {
//     res.send('delete tá pegando')
// }

// module.exports = {
//     getAllDeliveries,
//     postDeliveries
// }
// exports.findAll = (req, res) => {
//     tabelaDeliveries
//       .findAll()
//       .then(function (data) {
//         res.send(data);
//       })
//       .catch(function () {
//         res
//           .status(500)
//           .send({ message: "Ocorreu um erro aos buscar todos as entregas." });
//       });
//   };

    // exports.create=(req, res)=> {
    // const delivery = {
    //     nome: req.body.nome,
    //     peso: req.body.peso,
    //     endereco:req.body.endereco,
    //     telefone:req.body.telefone
    // }

    
    // tabelaDeliveries.create(delivery)
    // .then(() => res.send('criado com sucess'))
    // .catch(() => res.status(500).send('ocorreu um erro ao salvar o cadastro'))
    // }

    // exports.delete = (request, response) => {
    //     const { id: idDelivery } = request.params;
    //     tabelaDeliveries
    //       .destroy({ where: { id: idDelivery } })
          
    //       .then(function (itemsDeletados) {
    //         if (itemsDeletados === 0) {
    //           response.send("O item com ID " + idDelivery + "não foi encontrado");
    //         } else {
    //           response.send("Entrega " + idDelivery + "deletada com sucesso");
    //         }
    //       })
    //       .catch(function (error) {
    //         response
    //           .status(500)
    //           .send("Ocorreu um erro ao tentar deletar a entrega " + idDelivery);
    //       });
    //   };

      module.exports = {
        createDelivery,
        getAllDeliveries,
        deleteDelivery
      }