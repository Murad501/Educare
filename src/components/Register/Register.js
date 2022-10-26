import { updateProfile } from "firebase/auth";
import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const Register = () => {
  const [error, setError] = useState('')

  const {createUserViaEmail, auth} = useContext(authContext)

  const navigate = useNavigate()

  const handleRegister = (event) =>{
    event.preventDefault()
    const form = event.target;
    
    const name = form.name.value;
    const imageUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUserViaEmail(email, password)
    .then(result => {
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: imageUrl
      }).then(() => {
        
      }).catch((error) => {
        setError(error.message)
      });
      navigate('/')
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  return (
    <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold my-5 text-center">Please Register</h1>
      <Card>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoUrl" value="Photo url" />
            </div>
            <TextInput
            id="photoUrl"
            name="photoUrl"
            type="text"
            placeholder="Your Photo Url"
            required={true}
            />
          </div>
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
          {
            error && <p className="text-red-700 text-center">{error}</p>
          }
          <Button type="submit">Register</Button>
        </form>
        <p className="text-center">Already have an account? <Link to='/login' className="text-blue-700">Login</Link></p>
      </Card>
    </div>
  );
};

export default Register;
