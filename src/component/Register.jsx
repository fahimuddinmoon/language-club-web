import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { AuthContext } from "./ContextAPI";
import Swal from "sweetalert2";
import auth from "../firebase config";


const Register = () => {
    const {createUser,googleLogin,profileUpdate,setUser,logout} = useContext(AuthContext)
   
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const url = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value
        
        // if (password.length < 6) {
        //      Swal.fire({
        //                     title: "Password Must Have 6 Character!",
        //                     icon: "success",
        //                     draggable: true
        //                   });
        //     return
        // }

        // const reg = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
        // if (!reg.test(password)) {
        //      Swal.fire({
        //                     title: "Please 1 Uppercase & 1 Lowercase Character!",
        //                     icon: "success",
        //                     draggable: true
        //                   });
        //     return
        // }
        createUser(email,password)
        .then(result=>{
            const user = result.user
             
            profileUpdate({ displayName: name, photoURL: url })
            .then(res => {
                 logout(auth)
                 .then((res)=> {

                 }).catch((error) => {
            });
            })
            .catch((error) => {
            });
           
        }).catch((error) => {
        });
       

    }

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-center text-2xl font-bold my-5">Register</h1>
            <div class="card bg-base-100 w-8/12 mx-auto my-7 shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} class="card-body" >
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="name" name="name" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="URL" name="url" class="input input-bordered" required />
                    </div>
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
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">SignUp</button>
                    </div>
                </form>
                <button onClick={googleLogin} className="mb-6"><Link className="text-center text-lg font-bold  border-2 border-blue-700 rounded-full px-4 py-2">Sign With Google</Link></button>
            </div>

        </div>
    );
};

export default Register;