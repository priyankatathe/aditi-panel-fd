import React, { useState } from "react";
import { useLoginApiMutation } from "../../Redux/Apis/auth.Api";
import { toast } from "react-toastify";

const Login = () => {
  const [loginMut, { isLoading }] = useLoginApiMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = async () => {
    try {
        if(!email || !password){
            return toast.error("All fields are required");
        }
        const body = {
            email, 
            password
        }
        const response = await loginMut(body)
    } catch (error) {
        toast.error("Error Login");
    }
  }
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button 
      onClick={() => handleLogin()}
      >Login</button>
    </div>
  );
};

export default Login;
