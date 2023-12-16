import React from 'react';
import Header from '../layouts/Header';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { api } from '../api/api';
import { useDispatch } from 'react-redux';
import { setUser } from "../store/actions/userActions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from 'react';
import axios from 'axios';
import Footer from "../layouts/Footer"

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    let [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (data) => {
        setLoading(true);
        const onSubmitForm = {
            email: data.email,
            password: data.password
        };
        api.post("/login", onSubmitForm)
            .then((response) => {
                const userData = response.data
                localStorage.setItem("token", userData.token);
                dispatch(setUser(userData));
                toast.success("Login successful");

                setTimeout(() => {
                    setLoading(true);
                    history.push({
                        pathname: "/",
                        state: {
                            message: response.data.message
                        }
                    });
                }, 2000);
            })
            .catch((error) => {
                console.error("Login Failed", error);
                toast.error("Login failed. Please check your credentials.");
                setLoading(false);
            })
    }


    return (
        <div className='bg-cover bg-center h-screen'>
            <Header />

            <div className='pt-[2rem] '>
                <h1 className='text-blue-900 font-bold text-[3rem] text-center my-20'>WELCOME TO THE LOGIN PAGE</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full max-w-lg mobile:px-16 mx-auto"
                >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                E-mail
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-blue-900 border ${errors.email ? "border-red-500" : "border-gray-200"
                                    } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                id="grid-password"
                                type="email"
                                placeholder="abc@gmail.com"
                                {...register("email", {
                                    required: "Email should be written",
                                    pattern: { value: /^\S+@\S+$/i, message: "Enter an invalid email address" },
                                })}
                            />

                            {errors.email && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.email ? errors.email.message : ""}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className={`appearance-none block w-full bg-gray-200 text-blue-900 border ${errors.password ? "border-red-500" : "border-gray-200"
                                    } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                                placeholder="*************"
                                id="password"
                                type="password"
                                {...register("password", {
                                    required: "Password is required",

                                })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center mt-10">
                        {loading ? (
                            <div className="mr-4">
                                <ClipLoader
                                    size={30}
                                    color={"#123abc"}
                                    loading={loading}
                                />
                            </div>
                        ) : null}
                        <button type='submit' className="appearance-none block w-full bg-gray-200 text-blue-900 border rounded py-3 leading-tight focus:outline-none focus:bg-blue-600 hover:bg-blue-500 focus:border-gray-500 ">
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
            <Footer/>
        </div>
    );
}
