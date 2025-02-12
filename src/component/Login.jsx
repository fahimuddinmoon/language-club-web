import { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "./ContextAPI";
import Swal from "sweetalert2";


const Login = () => {
  const {login}  = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        login(email, password)
        .then(result=>{

            Swal.fire({
                title: "Login SuccessFully!",
                icon: "success",
                draggable: true
              });
           

        }).catch((error) => {
            
            Swal.fire({
                title: "Something Else . Please Try Again!",
                icon: "error",
                draggable: true
              });
        });
    }

    return (
        <div className="w-10/12 mx-auto pt-24">
            <h1 className="text-center text-2xl font-bold my-5">Login</h1>
            <div class="card bg-base-100 w-8/12 mx-auto my-7 shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" class="input input-bordered" required />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>

                </form>
                <p className="text-sm font-bold text-gray-600 text-center pb-6">You have no account please . <Link to='/register' className="text-lg font-bold text-red-600 "> Register </Link></p>
            </div>

        </div>
    );
};

export default Login;