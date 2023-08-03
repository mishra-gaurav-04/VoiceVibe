
const validateAge = (dob) => {
    const checkDOB = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - checkDOB;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);

    if(ageInYears < 13){
        return false;
    }

    return true;
}

module.exports = validateAge;