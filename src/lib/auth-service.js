import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  // CREATE A USER//
  signup({ email, password, dateOfBirth, sex, sexualOrientation, ethnicity, nationality }) {
    return this.auth
      .post("/auth/signup", { email, password, dateOfBirth, sex, sexualOrientation, ethnicity, nationality })
      .then(({ data }) => data);
  }

  // LOG USER IN//
  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
  }

  // LOG USER OUT//
  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
  }

  // RETURNS LOGGED USER //
  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
  }
}

const authService = new Auth();
export default authService;
