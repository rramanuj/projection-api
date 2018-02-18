import API from '@/services/API'


export default {
        getCardsByProject (projectId, board) {
            return API().post('CardsByProject', projectId, board);          //post method of Axios module. 
    }
}


