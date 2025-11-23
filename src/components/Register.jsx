import { assets } from "../assets/assets";

const Register = () => {
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
                    <form className="space-y-6">
                        {/* Email Field*/}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Adress</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/5 text-white placeholdeer-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focues:border-transparent transition-all duration-200"
                                placeholder="Enter your email"

                            />
                        </div>
                        {/* Password Field*/}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="create-password"
                                required
                                className="block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800/5 text-white placeholdeer-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focues:border-transparent transition-all duration-200"
                                placeholder="Enter your password"
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
                            />
                        </div>

                        {/* Submit button  */}
                        <button className="w-full flex justify-center py-3 px-4 broder border-transparent rounded-lg shdows-sn text-sm font-medium text-black bg-green-500 hover:gb-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disable:opacity-50 disable:cursos-not-allowed transiton-all duration-200 transform hover:scale-105">Register</button>
                    </form>
                    {/* Switch to login */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account?
                            <button className="text-green-400 hover:text-green-300 font-medium transition-colors cursor-pointer">
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