import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [email, emailChange] = useState("");
  const [number, numberChange] = useState("");
  const [country, countryChange] = useState("Nepal");
  const [address, addressChange] = useState("");
  const [gender, genderChange] = useState("male");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    // let errorMessage = "Please Enter the value in ";

    if (!name.trim()) {
      isProceed = false;
      toast.warning("Please enter your full name");
    }

    if (!id.trim()) {
      isProceed = false;
      toast.warning("Please enter your user name");
    }

    if (!email.trim() || !validateEmail(email.trim())) {
      isProceed = false;
      toast.warning("Please enter your email");
    }

    if (!password.trim()) {
      isProceed = false;
      toast.warning("Please enter your password");
    }

    if (!number.trim()) {
      isProceed = false;
      toast.warning("Please enter your phone number");
    }

    if (!address.trim()) {
      isProceed = false;
      toast.warning("Please enter your Address");
    }

    return isProceed;
  };

  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
    const regObj = {
      id,
      name,
      password,
      email,
      number,
      country,
      address,
      gender,
    };

    if (isValidate()) {
      try {
        const response = await fetch("http://localhost:4000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(regObj),
        });

        if (response.ok) {
          toast.success("Registered successfully");
          navigate("/login");
        } else {
          throw new Error("Failed to register");
        }
      } catch (error) {
        toast.error("Failed");
      }
    }
  };

  return (
    <div className="border border-[#28ABD8] rounded-md flex justify-center items-center w-1/2 mx-auto my-12">
      <form className="w-full p-4" onSubmit={handleSubmit}>
        <h2 className="text-3xl text-center font-bold py-8 underline">
          User Register
        </h2>
        <div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => nameChange(e.target.value)}
                placeholder="John"
                // className="border w-full p-2 rounded-md my-1"
                className={`border w-full p-2 rounded-md my-1 ${submitted && !name.trim() ? 'border-red-500' : ''}`}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                User Name
              </label>
              <input
                value={id}
                onChange={(e) => idChange(e.target.value)}
                placeholder="John"
                className={`border w-full p-2 rounded-md my-1 ${submitted && !name.trim() ? 'border-red-500' : ''}`}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Email 
              </label>
              <input
                value={email}
                onChange={(e) => emailChange(e.target.value)}
                placeholder="John@email.com"
                className={`border w-full p-2 rounded-md my-1 ${submitted && !name.trim() ? 'border-red-500' : ''}`}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => passwordChange(e.target.value)}
                placeholder="password"
                className={`border w-full p-2 rounded-md my-1 ${submitted && !name.trim() ? 'border-red-500' : ''}`}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Phone Number
              </label>
              <input
                value={number}
                onChange={(e) => numberChange(e.target.value)}
                className={`border w-full p-2 rounded-md my-1 ${submitted && !name.trim() ? 'border-red-500' : ''}`}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                {" "}
                Country
              </label>
              <select
                value={country}
                onChange={(e) => countryChange(e.target.value)}
                className={`border w-full p-2 rounded-md my-1 ${submitted && !name.trim() ? 'border-red-500' : ''}`}
              >
                <option>Nepal</option>
                <option>India</option>
                <option>China</option>
                <option>UK</option>
                <option>UAE</option>
              </select>
            </div>
          </div>
          <div>
            <label className="font-semibold">
              Address
            </label>
            <textarea
              value={address}
              onChange={(e) => addressChange(e.target.value)}
              className={`border w-full p-2 rounded-md my-1 ${submitted && !name.trim() ? 'border-red-500' : ''}`}
            ></textarea>
          </div>
        </div>
        <div className="">
          <label className="font-semibold">Gender</label>
          <div className="flex gap-4">
            <div>
              <input
                checked={gender === "male"}
                onChange={(e) => genderChange(e.target.value)}
                type="radio"
                name="gender"
                value={"male"}
              ></input>
              <label className="ml-2">Male</label>
            </div>
            <div>
              <input
                checked={gender === "female"}
                onChange={(e) => genderChange(e.target.value)}
                type="radio"
                name="gender"
                value={"female"}
              ></input>
              <label className="ml-2">Female</label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-sky-600 px-4 py-2 text-white text-[18px] rounded-md flex justify-center mx-auto w-2/6 my-6 "
        >
          Register
        </button>
        <span className="flex justify-center">
          If you have account Please &nbsp;{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
        <Link to="/">
          <button className="bg-red-600 px-4 py-2 text-white text-[18px] rounded-md flex justify-center mx-auto w-2/6 my-6 ">
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
