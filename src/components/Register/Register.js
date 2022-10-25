import { Button, Card, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="max-w-sm mx-auto">
        <h1 className="text-3xl font-bold my-5 text-center">Please Register</h1>
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
          <Button type="submit">Register</Button>
        </form>
        <p className="text-center">Already have an account? <Link to='/login' className="text-blue-700">register</Link></p>
      </Card>
    </div>
  );
};

export default Register;
