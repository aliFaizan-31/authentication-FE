import { axiosRef } from ".";
import { signInFormData, signUpFormData } from "../types/type";

export const userLogIn = (payload: signInFormData) => {
    return axiosRef.post('/auth/login', payload);
};
export const userSignUp = (payload: signUpFormData) => {
    return axiosRef.post('/auth/signup', payload);
}