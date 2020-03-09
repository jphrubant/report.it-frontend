import axios from "axios";

class User {
  constructor(){
    this.user = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
      });
  };

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