import validator from "validator";
import isEmpty from "lodash/isEmpty"

export default credentials => {
    const errors = {}

    if(validator.isEmpty(credentials.businessShortcode)){
        errors.businessShortcode = "This field is required."
    }

    if(validator.isEmpty(credentials.password)){
        errors.password = "This field is required."
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}