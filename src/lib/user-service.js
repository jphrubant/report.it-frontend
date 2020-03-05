import axios from "axios";

class User {
    constructor(){
        this.user = axios.create({
            baseURL: "http://localhost:5000",
            withCredentials: true
        });
    };

    // // GET CURRENT USER //
    // oneUser(id){
    //     return this.user
    //         .get(`/user/${id}`)
    //         .then(({data}) => data);
    // };

    // EDIT USER //
    userEdit(id, email, dateOfBirth, sex, sexualOrientation, ethnicity, nationality){
        return this.user
            .put(`/user/${id}`, {email, dateOfBirth, sex, sexualOrientation, ethnicity, nationality})
            .then(({data}) => data);
    };

    // DELETE USER //
    userDelete(id){
        return this.user
            .delete(`/user/${id}`)
            .then(({data}) => data);
    };
};

const userService = new User();
export default userService;