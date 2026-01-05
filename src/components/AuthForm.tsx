// AuthForm.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../redux/features/thunks";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (state === "login") {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ firstName, lastName, email, password }));
    }
  };

  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-4"
  >
    {state === "register" && (
      <>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </>
    )}
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className="w-full p-2 border border-gray-300 rounded"
    />
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      type="password"
      className="w-full p-2 border border-gray-300 rounded"
    />
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition"
    >
      {state === "login" ? "Login" : "Register"}
    </button>
  </form>
</div>

  );
};

export default AuthForm;
