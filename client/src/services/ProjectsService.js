import API from '@/services/API'


export default {
        getProjectsByUser (userId) {
            return API().post('projectsByUser', userId);          //post method of Axios module. 
    },
        post (project) {
            return API().post('newProject', project);
        },
        show (projectId) {
            return API().post('getProjectById', projectId);
        },
        getTeam (projectId) {
            return API().post('getProjectTeam', projectId);
        },
        postCard (projectId, title, description, deadline, userId, owner, board) {
            return API().post('newCard', projectId, title, description, deadline, userId, owner, board);
        }
}


