import React from "react";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { userSignIn } from "../Slices/userReducer";

export default function SignIn() {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(userSignIn(formData));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-700">
      <div className="bg-orange-500 px-20 py-10 rounded-lg">
        <form>
          <h2 className="text-2xl font-bold">Sign In</h2>

          <InputField
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
          <InputField
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="px-2 px-4 bg-indigo-800 h-10 w-20 hover:rounded-full mt-2 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
