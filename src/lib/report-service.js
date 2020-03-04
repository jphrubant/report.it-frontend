import axios from "axios";

class Report {
    constructor(){
        this.report = axios.create({
            baseURL: "http://localhost:5000",
            });
    };

    allReports(){
        return this.report
            .get('/report', {})
            .then(({data}) => data);
    };

    userReports(id){
        return this.report
            .get(`/report/${id}`, {})
            .then(({data}) => data);
    };

    createReport(reportObj){
        return this.report  
            .post('/report', {...reportObj})
            .then(({data}) => data);
    };

    updateReport(id, reportObj){
        return this.report
            .put(`report/${id}`, {...reportObj})
            .then(({data}) => data);
    };

    deleteReport(id){
        return this.report
            .delete(`report/${id}`, {})
            .then(({data}) => data);
    };
};

const reportService = new Report();
export default reportService;