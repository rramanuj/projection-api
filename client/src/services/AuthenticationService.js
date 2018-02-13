import API from '@/services/API'



export default {
        register (credentials){
        return API().post('signup', credentials)         //post method of Axios module. 

    }
}


