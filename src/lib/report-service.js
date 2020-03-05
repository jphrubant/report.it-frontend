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
    
    // CREATE A REPORT//
  createReport(reportObj){
    return this.report  
      .post('/report', {...reportObj})
      .then(({data}) => data);
};

    // UPDATE A REPORT //
  updateReport(id, reportObj){
    return this.report
      .put(`report/${id}`, {...reportObj})
      .then(({data}) => data);
  };

    // DELETE A REPORT //
  deleteReport(id){
    return this.report
      .delete(`report/${id}`)
      .then(({data}) => data);
  };
};

const reportService = new Report();
export default reportService;