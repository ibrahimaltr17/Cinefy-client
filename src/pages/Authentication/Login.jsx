import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import GoogleLogin from "./AuthComponents/Shared/GoogleLogin";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#140f1f] px-4">

            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">

                <fieldset className="bg-[#140f1f] border border-white/10 rounded-2xl p-8 shadow-lg">

                    {/* Title */}
                    <legend className="text-xl font-medium text-white text-center mb-6">
                        Login
                    </legend>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="text-xs text-gray-400">Email</label>
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-[#120d1c] border border-white/10 text-white outline-none focus:border-white/30 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="text-xs text-gray-400">Password</label>

                        <input
                            {...register('password', { required: true, minLength: 6 })}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-[#120d1c] border border-white/10 text-white outline-none focus:border-white/30 transition"
                        />

                        {errors.password?.type === "required" && (
                            <p className="text-red-500 mt-1 text-sm">
                                Password is required
                            </p>
                        )}

                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500 mt-1 text-sm">
                                Password must be at least 6 characters
                            </p>
                        )}
                    </div>

                    {/* Forgot */}
                    <div className="text-right mb-6">
                        <a href="#" className="text-xs text-gray-400 hover:text-white transition">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition cursor-pointer">
                        Login
                    </button>

                    <GoogleLogin/>

                    {/* Signup */}
                    <p className="text-center text-xs text-gray-500 mt-6">
                        Don’t have an account?{" "}
                        <Link className="text-white hover:underline" to='/register'>Sign up</Link>
                    </p>

                </fieldset>
            </form>

        </div>
    );
};

export default Login;