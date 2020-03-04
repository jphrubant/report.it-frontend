import axios from "axios";

class User {
    constructor(){
        this.user = axios.create({
            baseURL: "http://localhost:5000",
        });
    };

    userEdit(id, userObj){
        return this.user
            .put(`/user/${id}`, {...userObj})
            .then(({data}) => data);
    };

    userDelete(id){
        return this.user
            .delete(`/user/${id}`)
            .then(({data}) => data);
    };
};

const userService = new User();
export default userService;