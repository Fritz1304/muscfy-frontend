import { assets } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Register = ({ onSwitchToLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            toast.error("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            toast.error("Passwords do not match");
            return;
        }
        setLoading(true);
        try {
            const result = await register(email, password);
            if (result.success) {
                toast.success(result.message);
                onSwitchToLogin();
            } else {
                toast.error(result.message);
                setError(result.message);
            }

        } catch (e) {
            toast.error("an unexpected error occurred. Please try again later");
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen bg-linear-to-br from-green-800 via-black to-green-800 flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8">
                {/* Header  */}
                <div className="text-center">
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex items-center justify-center mb-6">
                            <img src={assets.logo} alt="Logo" className="w-16 h-16" />
                            <h1 className="ml-3 text-3xl font-bold text-white">Musicfy</h1>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 items-center justify-center">Join Musicfy</h2>
                    <p className="text-gray-300">Create Your account to start listening to music</p>
                </div>
                {/* Register Form */}
                <div className="gb-gray-900/80 backdrop-blug-lg rounded-2xl p-8 shadow-2xl border border-gray-700 text-white">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-500/20 border-red-500 rounded-lg p-3 text-red-300 text-sm">
                                {error}
                            </div>
                        )}
                        {/* Email Field*/}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Adress</label>
                            <input
                                type="text"
                                name="email"
                                id="emailRegister"
                                autoComplete="email"
                                required
                                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/5 text-white placeholdeer-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focues:border-transparent transition-all duration-200"
                                placeholder="Enter your email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        {/* Password Field*/}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="passwordRegister"
                                autoComplete="create-password"
                                required
                                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/5 text-white placeholdeer-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focues:border-transparent transition-all duration-200"
                                placeholder="Enter your password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Confirm Password Field*/}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                autoComplete="confirm-password"
                                required
                                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/5 text-white placeholdeer-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focues:border-transparent transition-all duration-200"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        {/* Submit button  */}
                        <button
                            disabled={loading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105">
                            {loading ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    creating account...
                                </div>
                            ) : ('Create Account')}
                        </button>
                    </form>
                    {/* Switch to login */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account?
                            <button
                                onClick={onSwitchToLogin}
                                className="text-green-400 hover:text-green-300 font-medium transition-colors cursor-pointer">
                                Sign in Here
                            </button>
                        </p>
                    </div>

                    {/* Terms and conditions */}

                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500">By creating an account, You agree to our Terms of service and privacy policy</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;