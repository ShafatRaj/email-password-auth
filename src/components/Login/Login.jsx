import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const Login = () => {
    const [success,setSuccess] =useState(false)
    const [loginError,setLoginError] = useState('');
const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    //reset status
    setSuccess(false);
    setLoginError('');
//login user
signInWithEmailAndPassword(auth,email,password)
.then(result=>{
    console.log(result.user);
    setSuccess(true);
})
.catch(error=>{
    console.log("Error",error.message);  
    setLoginError(error.message);
})

}

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        success && <p className='text- bg-green-600'>User login Successful.</p>
                    }
                    {
                        loginError && <p className='text-red-700'>{loginError}</p>
                    }
                    <p>New to this website please <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;