import { isEmpty, equals } from "validator";


export const validateLoginInput = credentials => {
    const errors = {}

    if (isEmpty(credentials.businessShortcode)) {
        errors.businessShortcode = "This field is required."
    }

    if (isNaN(Number(credentials.businessShortcode))) {
        errors.businessShortcode = "Only numeric characters are allowed."
    }

    if (isEmpty(credentials.password)) {
        errors.password = "This field is required."
    }
    return errors;
}


export const validateForgotPasswordInput = data => {
    const errors = {}

    if (isEmpty(data.businessShortcode)) {
        errors.businessShortcode = "This field is required."
    }
    if (isNaN(Number(data.businessShortcode))) {
        errors.businessShortcode = "Only numeric characters are allowed."
    }
    return errors;
}

export const validateResetPasswordInput = data => {
    const errors = {}

    if (isEmpty(data.password)) {
        errors.password = "This field is required."
    }
    if (isEmpty(data.confirmPassword)) {
        errors.confirmPassword = "This field is required."
    } if (!Object.keys(errors).length) {
        if (!equals(data.password, data.confirmPassword)) {
            errors.global = "Passwords must match."
        }
    }

    return errors;
}


