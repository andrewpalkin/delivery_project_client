// in case we go to settle out to get all field for validation from common field file
export const requiredCommonValdation = values => {
    const errors = {};
    // case to get all field what should beenn passing to validation 
    const requiredFields = ['email', 'password', 'firstName', 'lastName','agrement','radioGender'];
    requiredFields.forEach(field => {
        if (values[field] === undefined) {
            errors[field] = 'Required'
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values["passwordConfirmation"] !== values["password"]) {
        errors["passwordConfirmation"] = "Passwords do not match";
    }
    return errors;
};

export const passwordsMustMatch = (value, allValues) =>
    value !== allValues.password ? "Passwords do not match" : undefined;

// to ciertain validation for some specific fields
export const required = value => (value ? undefined : "Required");
export const number = value =>
    value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const email = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? "Invalid email address"
        : undefined;
};
