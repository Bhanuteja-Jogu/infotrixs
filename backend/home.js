var quote;
export default class home{
    static async ref(client){
        quote= client.db("sample_quotes").collection("quotes")
    }
    static async getQuote(req,res,next){
        try{
            const query= await req.query.auth? {"author": req.query.auth}:null
            if(query){
                console.log(query)
                const data= await quote.find({$text:{$search:query.author}})
                const ans= await data.toArray()
                res.send(ans)
            }
            else{
                const data= await quote.aggregate([{$sample: {size:1}}])
                const ans= await data.toArray();
                res.send(ans)
            }
        } catch(e){
            console.log(e)
        }
    }
};