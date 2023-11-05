import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import { AuthContext } from "../Providers/AuthProvider";
import app from "../../firebase/firebase.config";


const Login = () => {

    

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res);
                swal("Congrats!!", "You are successfully logged in!", "success");

                navigate(location?.state ? location.state : '/');

            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('Email');
        const password = form.get('Password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                swal("Congrats!!", "Logged in Successfully!", "success")

                navigate(location?.state ? location?.state : '/');
            })
            .catch(error => {
                console.error(error);
                swal("Oops!", "Email or password doesn't match. Please try again.", "error");
            })
    }

    return (
        <div className="mb-10">
            <div className="hero py-40 ">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl text-pink-900 font-bold">Login now!</h1>
                    </div>
                    <div className="card w-96 shadow-sm bg-pink-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name="Password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary bg-pink-700 border-pink-500 normal-case text-lg text-white">Login</button>
                                </div>
                                

                            </form>
                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary normal-case text-lg font-bold bg-pink-200 w-full mt-2 border-pink-300 text-pink-900">
                                <FcGoogle></FcGoogle>
                                Continue with Google
                            </button>
                            <p className="">Do not have an account? <Link className="text-pink-700 font-medium" to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;