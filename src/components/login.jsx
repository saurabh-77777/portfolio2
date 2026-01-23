import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const registerUser = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/register",
      formData
    );
    console.log("Success:", response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error:", error.response.data.message);
    } else {
      console.error("Network Error:", error.message);
    }
  }
};
  const loginUser = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      formData
    );
    console.log("Success:", response.data);
    navigate("/");
  } catch (error) {
    if (error.response) {
      console.error("Error:", error.response.data.message);
    } else {
      console.error("Network Error:", error.message);
    }
  }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isLogin){
      loginUser();
    } else {
      registerUser();
    }
    
    setFormData(
      {
        name: "",
        email: "",
        password: "",
      }
      
    )
    // if (isLogin) {
    //   console.log("Login:", {
    //     email: formData.email,
    //     password: formData.password,
    //   });
    // } else {
    //   console.log("Register:", formData);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-semibold ml-2 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

