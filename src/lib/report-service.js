import axios from "axios";

class Report {
  constructor(){
      this.report = axios.create({
        baseURL: "http://localhost:5000",
      });
  };

    // GET ALL REPORTS //
  allReports(){
    return this.report
      .get('/report', {})
      .then(({data}) => data);
  };

  // GET ONE REPORT BY ID //
  oneReport(id){
    return this.report
      .get(`/report/${id}`, {})
      .then(({data}) => data);
  };
    
    // CREATE A REPORT//
  createReport(role, motivation, type, space, description, time, date, location, user){
    return this.report  
      .post('/report', {role, motivation, type, space, description, time, date, location, user})
      .then(({data}) => data);
  };

    // UPDATE A REPORT //
  updateReport(id, role, motivation, type, space, description, time, date, location){
    return this.report
      .put(`/report/${id}`, {role, motivation, type, space, description, time, date, location})
      .then(({data}) => data);
  };

    // DELETE A REPORT //
  deleteReport(id){
    return this.report
      .delete(`/report/${id}`)
      .then(({data}) => data);
  };

};

const reportService = new Report();
export default reportService;