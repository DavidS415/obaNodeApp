const Obrf = require("../models/Obrf");

async function updateSent (x) {
    var id = x;
    const offerSent = await Obrf.findByIdAndUpdate(id, { current_status: 'Offer Letter Sent' }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Candidate status updated');
        }
    })
    .then(function(result) {
        result = result;
    })
    return offerSent;
}

module.exports = {
    updateSent,
  };