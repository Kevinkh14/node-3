module.exports ={
 create: (req,res)=>{
    const {name,description,price,image_url} =req.body
    const db = req.app.get('db')

    db.create_product([name, description, price, image_url])
    .then(response =>{
        console.log('hit')
        res.status(200).json(response)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({errorMessage: "something went wrong "})
    })
},

 getOne:(req,res)=>{
    const db = req.app.get('db')
    const {id} = req.params

    db.read_product(id)
    .then((product)=>{
        res.sendStatus(200)(product)
    })
    .catch(err =>{
        res.status(500).json({errorMessage:"something went wrong"})
        console.log(err)
    })

},

 getAll:(req,res)=>{
    const db = req.app.get('db')
    db.read_products()
    .then((products) =>{
        res.status(200).json(products)
    })
    .catch(err =>{
        res.status(500).json({errormessage:'something is wrong'})
        console.log(err)
    })
},

 update:(req,res)=>{
    const db = req.app.get('db')
    const {params,query}=req;

    db.update_product([params.id,query.desc])
    .then(()=>{res.sendStatus(200)})
    .catch(err=>{
        res.status(500).json({errorMessage:"something went wrong"})
        console.log(err)
    })
},

 delete :(req,res)=>{
    const db = req.app.get('db')
    const{id}=req.params

    db.delete_product(id)
    .then(()=>{res.sendStatus(200)})
    .catch(err =>{
        res.status(500).json({errorMessage:"something went wrong"})
        console.log(err)
    })
}
}