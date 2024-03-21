import { Model, createServer } from "miragejs"
import { cateloryItems } from "../../contans"


export const setupServer = () =>{
	let server =  createServer({

		models: { 					// 1 model = 1 table 
			product: Model,
		},

		seeds(server) {
            server.db.loadData({
                products: cateloryItems
            });
        },		

		routes() {

			//Method GET	
			this.get("/contans/products", (schema) => {
				return schema.db.products;
			})
		  
          	//Method POST
			this.post("/contans/products", (schema, request) => {
                return schema.db.products.create(request.body);
            })
			//Method PUT
			// this.put("/api/product/:id", (schema, request) => {
            //     return schema.product.update(request.params.id, request.body)
            // })
            //Method DELETE
            // this.delete("/api/product/:id", (schema, request) => {
            //     return schema.product.destroy(request.params.id)
            // })

		},
	})
	return server
}