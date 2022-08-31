import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItem = (
    <>
      <li>
        <NavLink className="rounded-lg mr-2" to="/home">
          Home
        </NavLink>
        <NavLink className="rounded-lg mr-2" to="/course">
          Our Course
        </NavLink>
        <NavLink className="rounded-lg mr-2" to="/about">
          About
        </NavLink>

        {user ? (
          <button
            onClick={logout}
            className="rounded-lg btn btn-error text-white"
          >
            Sign Out
          </button>
        ) : (
          <NavLink className="rounded-lg mr-2" to="/signin">
            SignIn
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar bg-base-300 ">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-1 px-2 mx-2 text-3xl font-bold">STUDY 360</div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {menuItem}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}

        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menuItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
