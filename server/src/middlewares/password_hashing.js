const bcrypt = require('bcryptjs');

const password_hashing = {

    genSalt: async function (){
        const salt = await bcrypt.genSalt(12);
        return salt
    },

    encryptPassword: async function (password) {

        const hash = await bcrypt.hash(password, process.env.passwordSalt);
        return hash

    },
    comparePassword: async function (password, hash) {
        const result = await bcrypt.compare(password, hash);
        return result;
    },

}

module.exports = password_hashing;