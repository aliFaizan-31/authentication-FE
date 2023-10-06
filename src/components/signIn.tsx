import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogIn } from "../api/auth";
import { useAuth } from "../context/authContext";
import { signInFormData } from "../types/type";
import InputField from "./input-field/inputField";

function SignIn() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { login } = useAuth();
    const [formData, setFormData] = useState<signInFormData>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userLogIn(formData).then((data) => {
            login(data?.data?.data?.accessToken);
            navigate("/application");
            enqueueSnackbar("User logged in successfully!", { variant: 'success' });
        }).catch((e) => {
            enqueueSnackbar("Invalid credentials!", { variant: 'error' });
        })
    };

    return (
        <div className="signup-container">
            <h2 className="text-center">Sign In</h2>
            <form onSubmit={handleSubmit}>
                <InputField label={'Email'} name={'email'} type={'email'} value={formData.email} placeholder={'Enter Email'} handleChange={handleChange} required={true} />
                <InputField label={'Password'} name={'password'} type={'password'} value={formData.password} placeholder={'Enter Password'} handleChange={handleChange} required={true} />
                <div className="text-center mt-20">
                    <button type="submit" className="submit-btn cursor-pointer">Sign In</button>
                </div>
                <p className="text-center">Are you not registered? <strong className="cursor-pointer text-link" onClick={() => { navigate("/signup"); }}>SignUp</strong></p>
            </form>
        </div>
    );
};

export default SignIn;
