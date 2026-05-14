import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const GoogleLogin = () => {

    const { signInWithGoogle } = useAuth()

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-xs text-gray-500">OR</span>
                <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Google Login */}
            <button
                onClick={handleGoogleSignIn}
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
        </div>
    );
};

export default GoogleLogin;