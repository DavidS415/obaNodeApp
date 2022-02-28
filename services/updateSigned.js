const Obrf = require("../models/Obrf");

const updateSigned = (x) => {
    var id = x;
    
    let makeUpdate = function(data) {
        return Obrf.findByIdAndUpdate(data, { current_status: 'Offer Letter Signed' }, function(err) {
            if (err)  {
                console.log(err);
            } else {
                console.log('Candidate status updated');
            }
        });
    }
    makeUpdate(id);
}

module.exports = {
    updateSigned,
  };