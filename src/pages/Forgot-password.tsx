import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className="relative w-full h-screen bg-[url('/assets/imageone.jpg')] bg-cover bg-center">
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-0" />

      {/* Form container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-full max-w-md border border-white p-8 rounded-xl shadow-xl bg-white/30 backdrop-blur-lg">
          <h2 className="text-2xl font-bold mb-6 text-center uppercase border-b pb-2 border-white text-white">
            Forgot Password
          </h2>

          {submitted ? (
            <p className="text-center text-white">
              🔗 A password reset link has been sent to <br />
              <span className="font-semibold">{email}</span>
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1 text-white"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white bg-white/80 text-black"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-2 rounded hover:bg-black hover:text-white hover:border hover:border-white transition"
              >
                Send Reset Link
              </button>
            </form>
          )}

          <div className="mt-6 text-sm text-center text-white/80">
            <a
              href="/login"
              className="underline hover:text-white transition"
            >
              Back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
