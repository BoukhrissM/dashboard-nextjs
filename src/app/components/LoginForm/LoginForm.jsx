"use client";
import Image from "next/image";
import $ from "jquery";
import schoolpng from "@/app/assets/school.png";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  return (
    <div className="max-w-md w-full p-6 bg-white dark:bg-slate-950 rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <Image src={schoolpng} width={130} height={130} />
      </div>
      <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6 dark:text-gray-200">
        Start session
      </h1>
      <form>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-100"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500  dark:bg-slate-900 dark:border-slate-900 dark:text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-100"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-900 dark:border-slate-900 dark:text-white"
            required
          />
          <a href="#" className="block text-right text-xs text-cyan-600 mt-2">
            Forgot Password ?
          </a>
        </div>
        <button
          type="submit"
          className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
          onClick={(e) => {
            e.preventDefault();
            router.push("/dashboard");
          }}
        >
          login
        </button>
      </form>
      <div className="text-center">
        <p className="text-sm dark:text-gray-300">
          don't have an account ?{" "}
          <a href="#" className="text-cyan-600">
            register
          </a>
        </p>
      </div>
      <p className="text-xs text-gray-600 text-center mt-10">
        &copy; 2023 E-School
      </p>
    </div>
  );
};

export default LoginForm;
