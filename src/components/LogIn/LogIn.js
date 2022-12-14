import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../../Context/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
    const {popUpSignIn, signInUserViaEmail} = useContext(authContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogIn = () =>{
        popUpSignIn(googleProvider)
        .then((result) => {
          setError('')
          navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const handleGithubLogIn = () =>{
      popUpSignIn(githubProvider)
      .then((result) => {
        setError('')
        navigate(from, {replace: true})
    })
    .catch(error => {
      setError(error.message)
    })
  }

  const handleSignIn = (event) =>{
    event.preventDefault()
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUserViaEmail(email, password)
    .then(result=>{
      setError('')
      form.reset()
      navigate(from, {replace: true})
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  return (
    <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold my-5 text-center">Please Login</h1>
      <Card>
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
            id="email1"
            name="email"
            type="email"
            placeholder="your email"
            required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
            id="password1"
            name="password"
            type="password" 
            placeholder="your password"
            required={true} 
            />
          </div>
          <Link className="text-sm text-right text-blue-700">Forgot password?</Link>
          {
            error && <p className="text-red-700 text-center">{error}</p>
          }
          <Button type="submit">Log in</Button>
        </form>
        <p className="text-center">New here? <Link to='/register' className="text-blue-700">create account</Link></p>
        <p className="text-center">or Log in with</p>
        <div className="flex gap-4 mx-auto">
            <FaGoogle onClick={handleGoogleLogIn} className="h-10 w-10 bg-red-600 p-2 rounded-full text-white"></FaGoogle>
            <FaGithub onClick={handleGithubLogIn} className="h-10 w-10 bg-gray-600 p-2 rounded-full text-white"></FaGithub>
        </div>
      </Card>
    </div>
  );
};

export default LogIn;
