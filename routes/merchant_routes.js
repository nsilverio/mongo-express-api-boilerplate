var ObjectID = require("mongodb").ObjectID

module.exports = function(router, db){


      router.get("/merchants/:id", (request, response) => {
        const id = request.params.id
        const details = { _id: new ObjectID(id) };
        db.collection("merchants").findOne(details, (err, item) => {
          if (err) 
            response.send({ error: "An error has occurred " + err})
          else 
            response.send(item);
        })
      })

      
      router.get("/merchants", (request, response) => {
        db.collection("merchants").find({}).toArray((err, merchants) => {
            if(err) {
                return response.status(500).send(err);
            }
            response.send(merchants)
        });
      })

      router.delete("/merchants/:id", (request, response) => {
        const id = request.params.id
        const details = { _id: new ObjectID(id) }
        db.collection("merchants").remove(details, (err, merchant) => {
          if (err) 
            response.send({ error: "An error has occurred " + err })
          else 
            response.send('Merchant deleted')
        })
      })

      router.put("/merchants/:id", (request, response) => {
        const id = request.params.id
        const details = { _id: new ObjectID(id) }
        const merchant = {
            name: request.body.name,
            category: request.body.category
        }
        db.collection("merchants").update(details, merchant, (err, result) => {
          if (err) {
            response.send({ error: "An error has occurred " + err})
          } else {
            response.send(merchant)
          }
        })
      })

    router.post('/merchants', (request, response)=> { 
        const merchant = {
            name: request.body.name,
            category: request.body.category
        }
        db.collection('merchants').insert(merchant, (err, result) => {
            if(err)
                response.send({ 'error': 'An error has occurred' })
            else
                response.send(result.ops[0])
            
        })
        
    })
}