import React, { useRef } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Routes, Route, Link } from "react-router-dom";

import admission from "../../image/Gradient Modern Education Admission Open Instagram Post.jpg";
import { async } from "@firebase/util";
const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);

    console.log(data);
  };
  return (
    <div class=" min-h-screen bg-base-200 py-14">
      <div class="  flex justify-evenly items-center">
        <div class="text-center ">
          <img className="w-[500px]" src={admission} alt="" srcset="" />
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email-start */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: { value: true, message: "Enter Your Email" },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* email-end */}
              {/* password-start */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: { value: true, message: "Enter Your password" },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span class="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/* password-end */}
              {/* confirm-password-start */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                <label class="label">
                  {errors.confirmPassword && (
                    <span class="label-text-alt text-red-600">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </label>
              </div>
              {/* confirm-password-end */}
              <input
                type="submit"
                value="Sign Up"
                class="btn w-full max-w-xs"
              />
            </form>

            <p className="text-center mt-4">
              Already have an account?
              <Link className="text-blue-400 pl-2" to="/signin">
                Please Login
              </Link>
            </p>
            <div className="w-full max-w-xs">
              <div class="divider">OR</div>
            </div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent w-full max-w-xs"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
