import http from  "./http.js"

class Api{
    search(auth){
        if(auth=="") return http.get('home')
        return http.get(`home?auth=${auth}`)
    }
}
export default new Api()