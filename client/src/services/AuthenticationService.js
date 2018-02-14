import API from '@/services/API'



export default {
        register (credentials){
        return API().post('signup', credentials)         //post method of Axios module. 

    },
    login (credentials){
        return API().post('login', credentials)         //post method of Axios module. 
    }
}


