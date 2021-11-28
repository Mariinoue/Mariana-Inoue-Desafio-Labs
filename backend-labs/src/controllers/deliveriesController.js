const Delivery = require('../models/delivery') 


const createDelivery = async(req, res) => {
    const { nome, endereco, peso, telefone } = req.body

    try {
        const delivery = await Delivery.create({ nome, endereco, peso, telefone })
        console.log(`Delivery ${delivery.nome} criado`)
        res.status(201).send(delivery)
    }catch(error) {
        res.status(500).send({ message: error.message})
    }
}

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


    module.exports = {
    createDelivery,
    getAllDeliveries,
    deleteDelivery
    }