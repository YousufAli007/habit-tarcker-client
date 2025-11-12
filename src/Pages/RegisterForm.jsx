 
import { Mail, Lock, User, Link2, ArrowRight, Camera } from "lucide-react";
import { use } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";

export default function RegisterForm() {
  const navigate =useNavigate()
  const { crateAuth, signInGoogle } = use(AuthContext);
  // Google Login
  const handleGoogleLogin =()=>{
    signInGoogle()
    .then(() => {
       navigate('/')
    })
    .catch(error =>{
       toast.error(error.message)
    })
  }
   
  // handeRegister Form
 const handleRegiseUser =(e)=>{
  e.preventDefault()
   const name =e.target.name.value;
   const email=e.target.email.value;
   const photoURL = e.target.photoURL.value;
   const password =e.target.password.value;
    
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
   if (!passwordRegex.test(password)){
    toast.success(
      "Password must have at least one uppercase, one lowercase, and be at least 6 characters long."
    );
    // alert(
    //   "Password must have at least one uppercase, one lowercase, and be at least 6 characters long."
    // );
    return;
   }
     crateAuth(email, password)
       .then((res) => {
         updateProfile(res.user, {
           displayName: name,
           photoURL: photoURL,
         })
         .then(()=>{

         })
         .catch(()=>{});
         toast.success("Register successfully");
         navigate('/')
       
       })
       .catch((error) => {
         toast.error(error.message) 
       });
 }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Glassmorphic Card */}
      <div className="w-full max-w-md">
        <div
          className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 
                        transform transition-all duration-300 hover:scale-[1.01]"
        >
          {/* Logo / Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
              <span className="text-2xl font-bold text-white">R</span>
            </div>
            <h1 className="text-3xl font-bold text-white">Create Account</h1>
            <p className="text-purple-200 mt-2">
              Join us and get started in seconds
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegiseUser} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-purple-100 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  className="w-full pl-11 pr-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder-purple-300 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-purple-100 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  className="w-full pl-11 pr-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder-purple-300 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-purple-100 mb-2">
                Photo URL{" "}
                <span className="text-purple-300 text-xs">(optional)</span>
              </label>
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                <input
                  type="url"
                  name="photoURL"
                  className="w-full pl-11 pr-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder-purple-300 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-200"
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              {/* {photoURL && (
                <div className="mt-3 flex justify-center">
                  <img
                    src={photoURL}
                    alt="Preview"
                    className="w-20 h-20 rounded-full object-cover border-2 border-purple-500 shadow-lg"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
              )} */}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-purple-100 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
                <input
                  type="password"
                  name="password"
                  className="w-full pl-11 pr-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder-purple-300 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                           transition-all duration-200"
                  placeholder="Create a strong password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold 
                       rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 
                       transition-all duration-200 flex items-center justify-center gap-2"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="px-4 text-sm text-purple-300">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/30 
                           text-white font-medium rounded-xl flex items-center justify-center gap-3 
                           transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 6.75c1.53 0 2.9.66 3.98 1.73l2.99-2.99C17.14 3.83 14.65 3 12 3c-4.3 0-8.01 2.47-9.82 6.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-8 text-purple-200">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-white hover:text-purple-300 underline underline-offset-4 
                       transition-colors duration-200"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* Subtle Background Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
