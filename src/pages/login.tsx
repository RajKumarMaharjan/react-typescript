import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const navigate = useNavigate();

  const ProceedLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:4000/users/" + username)
        .then((res) => {
          return res.json();
        }).then((resp)=>{
          if(Object.keys(resp).length === 0){
            toast.error('Please Enter Valid User Name')
          }else {
            if(resp.password === password){
              toast.success('success');
              navigate('/home');
            }else {
              toast.error('Please Enter Correct Password')
            }
          }
        }).catch((error) => {
          if (error.message === 'User not found') {
            toast.error('User not found');
          } else {
            toast.error('Login Failed due to :' + error.message);
          }
        });
    }
  };
  

  const validate = () => {
    let result = true;
    if(username === null || username === ""){
      result = false;
      toast.warning('Please Enter Correct User Name')
    }
    if(password === null || password === ""){
      result = false;
      toast.warning('Please Enter Correct Password')
    }
    return result;
  }

  return (
    <div className="w-1/2 grid mx-auto border rounded-lg py-4 px-8 my-24">
      <form onSubmit={ProceedLogin}>
        <h2 className="text-3xl text-center font-bold py-8 underline">
          User Login
        </h2>
        <div className="">
          <div className="flex flex-col">
            <label>
              User Name 
            </label>
            <input
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
              className="border w-full p-2 rounded-md my-1"
            ></input>
          </div>
          <div className="flex flex-col">
            <label>
              Password
            </label>
            <input
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              type="password"
              className="border w-full p-2 rounded-md my-1"
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="bg-sky-600 px-4 py-1 text-white text-[18px] rounded-md flex justify-center mx-auto w-2/6 my-6 "
        >
          Login
        </button>
        <span className="flex justify-center">If you don't have account Please &nbsp; <Link to="/register" className="text-blue-500">Register</Link></span>
      </form>
    </div>
  );
}

export default Login;
