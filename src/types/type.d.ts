export interface signInFormData {
    email: string;
    password: string;
}
export interface signUpFormData extends signInFormData {
    name: string;
}