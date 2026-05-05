import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = watch("password"); // ✅ FIXED (was Watch → now watch)

    const { createUser } = useAuth()

    const onSubmit = (data) => {
        console.log(data)
        const { email, password } = data
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>
            console.error(error)
        )

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#140f1f] px-4">

            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">

                <fieldset className="bg-[#140f1f] border border-white/10 rounded-2xl p-8 shadow-lg">

                    <legend className="text-xl font-medium text-white text-center mb-6">
                        Create an Account
                    </legend>

                    {/* Name */}
                    <div className="mb-5">
                        <label className="text-xs text-gray-400">Name</label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-[#120d1c] border border-white/10 text-white outline-none focus:border-white/30 transition"
                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-500 mt-1 text-sm">
                                Name is required
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="text-xs text-gray-400">Email</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-[#120d1c] border border-white/10 text-white outline-none focus:border-white/30 transition"
                        />
                        {errors.email?.type === "required" && (
                            <p className="text-red-500 mt-1 text-sm">
                                Email is required
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className="text-xs text-gray-400">Password</label>
                        <input
                            {...register('password', {
                                required: true,
                                minLength: 6
                            })}
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

                    {/* Confirm Password */}
                    <div className="mb-5">
                        <label className="text-xs text-gray-400">Confirm Password</label>
                        <input
                            {...register('confirmPassword', {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === password || "Passwords do not match"
                            })}
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-[#120d1c] border border-white/10 text-white outline-none focus:border-white/30 transition"
                        />

                        {errors.confirmPassword && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    <button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition cursor-pointer">
                        Register
                    </button>

                </fieldset>
            </form>
        </div>
    );
};

export default Register;