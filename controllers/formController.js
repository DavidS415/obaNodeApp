const Obrf = require("../models/Obrf");
const bcrypt = require("bcryptjs");   
const passport = require("passport");

//Get request to view form

const formView = (req, res) => {
    res.render("User/form", {
      user: req.user
    });
  };

//Post Request that handles form submission
const submitForm = (req, res) => {
    const { branch, contract_type, sdate, onboarding_type, consultant_status, reporting_type, tracker_placement_id, pay_cycle, first_name, last_name, middle_name, nick_name, customer, wf_consumer_lending, mailing_address, email_address, cell_phone, ssn, dob, militray_veteran, militray_spouse, candidate_source, tracker_candidate_id, visa, visa_expiration_date, end_date, candidate_job_title, hiring_manager_name, candidate_work_location, placement_recruiter, placement_sourcer, placement_am, hourly_wage, health_benefits, misc_exp_type, misc_exp_amount, network_partner_name, bill_rate, placement_cto, current_status } = req.body;
    //Required
    if (!branch || !contract_type || !sdate || !onboarding_type || !consultant_status || !reporting_type || !tracker_placement_id || !pay_cycle || !first_name || !last_name || !middle_name || !nick_name || !customer || !wf_consumer_lending || !mailing_address || !email_address || !cell_phone || !ssn || !dob || !militray_veteran || !militray_spouse || !candidate_source || !tracker_candidate_id || !visa || !visa_expiration_date || !end_date || !candidate_job_title || !hiring_manager_name || !candidate_work_location || !placement_recruiter || !placement_sourcer || !placement_am || !hourly_wage || !health_benefits || !misc_exp_type || !misc_exp_amount || !network_partner_name || !bill_rate || !placement_cto) {
      console.log("Please fill in all the fields");
      res.render("form", {branch, contract_type, sdate, onboarding_type, consultant_status, reporting_type, tracker_placement_id, pay_cycle,first_name,last_name, middle_name, nick_name, customer, wf_consumer_lending, mailing_address, email_address, cell_phone, ssn, dob, militray_veteran, militray_spouse, candidate_source, tracker_candidate_id, visa, visa_expiration_date, end_date, candidate_job_title, hiring_manager_name, candidate_work_location, placement_recruiter, placement_sourcer, placement_am, hourly_wage, health_benefits, misc_exp_type, misc_exp_amount, network_partner_name, bill_rate, placement_cto});
    } else {
      const newObrf = new Obrf({branch, contract_type, sdate, onboarding_type, consultant_status, reporting_type, tracker_placement_id, pay_cycle,first_name,last_name, middle_name, nick_name, customer, wf_consumer_lending, mailing_address, email_address, cell_phone, ssn, dob, militray_veteran, militray_spouse, candidate_source, tracker_candidate_id, visa, visa_expiration_date, end_date, candidate_job_title, hiring_manager_name, candidate_work_location, placement_recruiter, placement_sourcer, placement_am, hourly_wage, health_benefits, misc_exp_type, misc_exp_amount, network_partner_name, bill_rate, placement_cto, current_status});
      newObrf
        .save()
        .then(res.redirect("/dashboard"))
        .catch((err) => console.log(err));
    }
  };

  module.exports = {
    formView,
    submitForm,
  };


  //branch, contract_type, sdate, onboarding_type, consultant_status, reporting_type, tracker_placement_id, pay_cycle,first_name,last_name, middle_name, nick_name, customer, wf_consumer_lending, mailing_address, email_address, cell_phone, ssn, dob, militray_veteran, militray_spouse, candidate_source, tracker_candidate_id, visa, visa_expiration_date, end_date, candidate_job_title, hiring_manager_name, candidate_work_location, placement_recruiter, placement_sourcer, placement_am, hourly_wage, health_benefits, misc_exp_type, misc_exp_amount, network_partner_name, bill_rate, placement_cto, current_status