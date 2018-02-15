import API from '@/services/API'


export default {
        getProjectsByUser (userId) {
            return API().post('projectsByUser', userId);          //post method of Axios module. 
    },
        post (project){
            return API().post('newProject', project)
        }
}


