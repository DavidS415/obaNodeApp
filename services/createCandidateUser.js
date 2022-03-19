const Obrf = require("../models/Obrf");
const User = require("../models/User");
const bcrypt = require("bcryptjs");   

async function createCandidateUser (x) {
    const id = x;
    const currentStatus = await Obrf.findOne({ _id: id })
        .then(function(result){
            const status = result.current_status;
            return status;
        });
    
    if (currentStatus === 'OBRF Created') {
        const userName = await Obrf.findOne({ _id: id })
            .then(function(result){
                const firstName = result.first_name;
                const lastName = result.last_name;
                const name = firstName + ' ' + lastName;
                return name;
        });
        const userEmail = await Obrf.findOne({ _id: id })
            .then(function(result){
                const email = result.email_address;
                return email;
        });
        const userPassword = await Obrf.findOne({ _id: id })
            .then(function(result){
                const firstName = result.first_name;
                const lastName = result.last_name;
                const phoneNumber = result.cell_phone;
                let pNmber = phoneNumber.substring(6,10);
                let fName = firstName.substring(0,2);
                let lName = lastName.substring(0,2);
                let pWord = fName + lName + pNmber;
                return pWord;
        });
        const userLocation = await Obrf.findOne({ _id: id })
            .then(function(result){
                const address = result.mailing_address;
                return address;
        });
    
        const newUser = User({
            name: userName,
            email: userEmail,
            password: userPassword,
            location: userLocation,
            role: 'Candidate',
            obrf_id: id,
        });
            bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then()
                    .catch((err) => console.log(err));
            })
        );
    }
}
module.exports = {
    createCandidateUser,
  };