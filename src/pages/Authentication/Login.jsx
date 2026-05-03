import React from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router";

const Login = () => {
    const { register, handleSubmit } = useForm()

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
                            {...register('password')}
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-[#120d1c] border border-white/10 text-white outline-none focus:border-white/30 transition"
                        />
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

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-white/10"></div>
                        <span className="text-xs text-gray-500">OR</span>
                        <div className="flex-1 h-px bg-white/10"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-white/10 bg-transparent text-white hover:bg-white/5 transition cursor-pointer"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>

                    {/* Signup */}
                    <p className="text-center text-xs text-gray-500 mt-6">
                        Don’t have an account?{" "}
                        <a href="#" className="text-white hover:underline">
                            Sign up
                        </a>
                    </p>

                </fieldset>
            </form>

        </div>
    );
};

export default Login;