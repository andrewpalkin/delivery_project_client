import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
    signupRequest: ["signupPayload"],
    signupSuccess: ["signupResponse"],
    signupFailure: ["signupError"]
});

export { Creators, Types };