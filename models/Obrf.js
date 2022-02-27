const mongoose = require("mongoose");
const ObrfSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  contract_type: {
    type: String,
    required: true,
  },
  sdate: {
    type: Date,
    required: true,
  },
  onboarding_type: {
      type: String,
      required: true,
  },
  consultant_status: {
      type: String,
      required: true,
  },
  reporting_type: {
      type: String,
      required: true,
  },
  tracker_placement_id: {
      type: Number,
      required: true,
  },
  pay_cycle: {
      type: String,
      required: true,
  },
  first_name: {
      type: String,
      required: true,
  },
  last_name: {
      type: String,
      required: true,
  },
  middle_name: {
      type: String,
      required: true,
  },
  nick_name: {
      type: String,
      required: true,
  },
  customer: {
      type: String,
      required: true,
  },
  wf_consumer_lending: {
      type: String,
      required: true,
  },
  mailing_address: {
      type: String,
      requreid: true,
  },
  email_address: {
      type: String,
      required: true,
  },
  cell_phone: {
      type: String,
      required: true,
  },
  ssn: {
      type: Number,
      required: true,
  },
  dob: {
      type: Date,
      required: true,
  },
  militray_veteran: {
      type: String,
      required: true,
  },
  militray_spouse: {
      type: String,
      required: true,
  },
  candidate_source: {
      type: String,
      required: true,
  },
  tracker_candidate_id: {
      type: String,
      required: true,
  },
  visa: {
      type: String,
      required: true,
  },
  visa_expiration_date: {
      type: Date,
      required: true,
  },
  end_date: {
      type: Date,
      required: true,
  },
  candidate_job_title: {
      type: String,
      required: true,
  },
  hiring_manager_name: {
      type: String,
      required: true,
  },
  candidate_work_location: {
      type: String,
      required: true,
  },
  placement_recruiter: {
      type: String,
      required: true,
  },
  placement_sourcer: {
      type: String,
      required: true,
  },
  placement_am: {
      type: String,
      required: true,
  },
  hourly_wage: {
      type: Number,
      required: true,
  },
  health_benefits: {
      type: String,
      required: true,
  },
  misc_exp_type: {
      type: String,
      required: true,
  },
  misc_exp_amount: {
      type: Number,
      required: true,
  },
  network_partner_name: {
      type: String,
      required: true,
      default: "N/A",
  },
  bill_rate: {
      type: Number,
      required: true,
  },
  placement_cto: {
      type: Number,
      required: true,
  },
  current_status: {
      type: String,
      required: true,
      default: "OBRF Created",
  },
  file_paths: {
      type: Array,
  },

  signature_image: {
      type: String,
  }
});
const Obrf = mongoose.model("Obrf", ObrfSchema);
module.exports = Obrf;