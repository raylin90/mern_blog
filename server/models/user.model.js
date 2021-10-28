const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        // regex validation
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"],
    },
}, { timestamps: true })

// Mongoose Virtuals, due to we dont want to save this piece of info. into db, but still need it (add after the model)
UserSchema.virtual("confirmPassword")
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

// before want validation, we want to validate/compare that pw and conf_pw are matching first
UserSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Password must match Confirm Password");
    }
    next();
});

// before saving the User ubj, we want to hash pw using bcrypt
UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(err => console.log("something went wrong when hashing the password", err))
});

const User = mongoose.model("User", UserSchema);
module.exports = User;