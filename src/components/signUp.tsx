import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import InputField from "./input-field/inputField";
import { userSignUp } from "../api/auth";
import { signUpFormData } from "../types/type";
import { useSnackbar } from "notistack";


function SignUp() {
    const [formData, setFormData] = useState<signUpFormData>({
        email: "",
        name: "",
        password: "",
    });
    const { login } = useAuth();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (
            formData.password.length >= 8 &&
            /[a-zA-Z]/.test(formData.password) &&
            /\d/.test(formData.password) &&
            /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(formData.password)
        ) {
            userSignUp(formData).then((data) => {
                login(data?.data?.data?.accessToken);
                navigate("/application");
                enqueueSnackbar("User added successfully!", { variant: 'success' });
            }).catch((e) => {
                enqueueSnackbar(e?.response?.data?.message, { variant: 'error' });
            })
        } else {
            enqueueSnackbar("Password does not meet the requirements.", { variant: 'error' });
        }
    };


    return (
        <div className="signup-container">
            <h2 className="text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <InputField label={'Email'} name={'email'} type={'email'} value={formData.email} placeholder={'Enter Email'} handleChange={handleChange} required={true} />
                <InputField label={'Name'} name={'name'} type={'text'} value={formData.name} placeholder={'Enter Name'} handleChange={handleChange} required={true} />
                <InputField label={'Password'} name={'password'} type={'password'} value={formData.password} placeholder={'Enter Password'} handleChange={handleChange} required={true} />
                <div className="text-center mt-20">
                    <button type="submit" className="submit-btn cursor-pointer">Sign Up</button>
                </div>
                <p className="text-center">Already registered? <strong className="cursor-pointer text-link" onClick={() => { navigate("/signin"); }}>SignIn</strong></p>
            </form>
        </div>
    );
};

export default SignUp;
