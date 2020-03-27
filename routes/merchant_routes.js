
module.exports = function(router, db){

    router.get("/notes/:id", (request, response) => {
        const id = request.params.id
        const details = { _id: new ObjectID(id) }
        db.collection("merchant").findOne(details, (err, merchant) => {
          if (err) 
          response.send({ error: "An error has occurred " + err})
          else 
          response.send(merchant)
        })
      })

      router.get("/notes", (request, response) => {
        db.collection("merchant").find({}).toArray((err, merchants) => {
            if(err) {
                return response.status(500).send(err);
            }
            response.send(merchants)
        });
      })

      router.delete("/notes/:id", (request, response) => {
        const id = request.params.id
        const details = { _id: new ObjectID(id) }
        db.collection("merchant").remove(details, (err, note) => {
          if (err) 
            response.send({ error: "An error has occurred " + err })
          else 
            response.send(merchant)
        })
      })

      router.put("/notes/:id", (request, res) => {
        const id = request.params.id
        const details = { _id: new ObjectID(id) }
        const note = { text: request.body.body, title: request.body.title }
        db.collection("merchant").update(details, note, (err, result) => {
          if (err) {
            response.send({ error: "An error has occurred " + err})
          } else {
            response.send(merchant)
          }
        })
      })

    router.post('/merchants', (request, response)=> { 
        const merchat = {
            name: request.body.name,
            category: requesrequesttuest.body.category
        }
        db.collection('merchants').insert(merchat, (err, result) => {
            if(err)
                response.send({ 'error': 'An error has occurred' })
            else
                response.send(result.ops[0])
            
        })
        
    })
}