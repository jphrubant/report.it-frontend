import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  // CREATE A USER//
  signup({ email, password, dateOfBirth, sex, sexualOrientation, ethnicity, nationality }) {
    return this.auth
      .post("/auth/signup", { email, password, dateOfBirth, sex, sexualOrientation, ethnicity, nationality })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  // LOG USER IN//
  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  // LOG USER OUT//
  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  // RETURNS LOGGED USER //
  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }
}

const authService = new Auth();
// `authService` is the object with the above axios request methods

export default authService;
