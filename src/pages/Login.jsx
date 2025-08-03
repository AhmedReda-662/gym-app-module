import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";

function Login() {
  const { dispatch } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-9">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
        <header>
          <h3 className="text-slate-300 capitalize font-bold animate-bounce text-3xl text-center">
            Join Now The
            <span className="animate-pulse text-red-600"> Live</span> Session
          </h3>
        </header>
        <form
          className="mt-8 flex flex-col gap-5 text-white"
          onSubmit={handleSubmit(function (data) {
            const fixData = {
              name: data.name.trim().toLowerCase(),
              email: data.email.trim(),
            };
            dispatch({ type: "login/setdata", payload: fixData });
            dispatch({ type: "login/sendMessage" });
            navigate("/livestream");
          })}
        >
          <div className="box">
            <p className="text-sm text-red-500 mb-1">{errors?.name?.message}</p>
            <input
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              type="text"
              placeholder="Type Your Name Please"
              {...register("name", {
                required: "This field is required",
                validate: (value) => {
                  if (value.length > 20) {
                    return "Name Should Be Less Than 20 Character";
                  } else {
                    return;
                  }
                },
              })}
            />
          </div>
          <div className="box">
            <p className="text-sm text-red-500 mb-1">
              {errors?.email?.message}
            </p>
            <input
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              type="email"
              placeholder="Type Your Email Please"
              {...register("email", {
                required: "This field is required",
                validate: (value) => {
                  let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                  if (re.test(value)) {
                    return;
                  } else {
                    return "Please Revalidate Your Email";
                  }
                },
              })}
            />
          </div>
          <div className="box">
            <button className="w-full bg-green-900 rounded-md px-1.5 py-2 cursor-pointer uppercase">
              Join
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
