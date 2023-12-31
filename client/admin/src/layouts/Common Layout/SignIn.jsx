import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(empId + " " + password);
    try {
      axios
        .post("http://localhost:8080/login/", {
          empId,
          password,
        })
        .then((res) => {
          console.log(res.data);

          if (res.data === "Not exist") {
            alert("User doesn't exist");
          } else if (res.data === "Invalid Password") {
            alert("Invalid password");
          } else if (res.data.type === "procurement") {
            window.localStorage.setItem(
              "ProcurementInfo",
              JSON.stringify(res.data.user)
            );
            window.location.replace("/purchaseRequisition/view-requisition");
          } else if (res.data.type === "accountant") {
            window.localStorage.setItem(
              "AccountantInfo",
              JSON.stringify(res.data.user)
            );
            window.location.replace("/accountant");
          } else if (res.data.type === "senior") {
            window.localStorage.setItem(
              "AccountantInfo",
              JSON.stringify(res.data.user)
            );
            window.location.replace(
              "/purchaseRequisitionSenior/view-requisition"
            );
          } else if (res.data.type === "supplier") {
            window.localStorage.setItem(
              "supplierInfo",
              JSON.stringify(res.data.user)
            );
            window.location.replace("/supplier/view-orders");
          }
        })
        .catch((e) => {
          alert("invalid credentials");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div
        className="flex min-h-screen justify-center items-center bg-cover bg-center bg-cyan-700"
        style={{
          // backgroundImage: `url('https://www.chashmay.com.pk/images/blogs/8738Thickvs.ThinSunglassesFrames.jpg')` // Replace with the actual path to your background image
          backgroundColor: "#0e7490",
        }}
      >
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="mt-6 space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="empId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  empId
                </label>
                <div className="mt-2">
                  <input
                    id="empId"
                    name="empId"
                    type="empId"
                    autoComplete="empId"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setEmpId(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-cyan-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
