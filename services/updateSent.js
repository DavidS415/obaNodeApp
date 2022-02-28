const Obrf = require("../models/Obrf");

const updateSent = (x) => {
    var id = x;
    
    let returnEmail = function(data) {
        return Obrf.findByIdAndUpdate(data, { current_status: 'Offer Letter Sent' }, function(err) {
            if (err)  {
                console.log(err);
            } else {
                console.log('Candidate status updated');
            }
        }).then(data => data);
    }
    returnEmail(id);
}

module.exports = {
    updateSent,
  };