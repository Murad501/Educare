import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LogIn = () => {
  return (
    <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold my-5 text-center">Please Login</h1>
      <Card>
        <form className="flex flex-col gap-4">
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
          <Button type="submit">Log in</Button>
        </form>
        <p className="text-center">New here? <Link to='/register' className="text-blue-700">create account</Link></p>
        <p className="text-center">or Log in with</p>
        <div className="flex gap-4 mx-auto">
            <FaGoogle className="h-10 w-10 bg-red-600 p-2 rounded-full text-white"></FaGoogle>
            <FaGithub className="h-10 w-10 bg-gray-600 p-2 rounded-full text-white"></FaGithub>
        </div>
      </Card>
    </div>
  );
};

export default LogIn;
