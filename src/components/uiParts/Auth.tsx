import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const Auth = () => {
  const router = useRouter();

  return (
    <>
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-8 lg:text-3xl">
            Login
          </h2>

          <form className="mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="username"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  Username
                </label>
                <input
                  name="username"
                  className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-indigo-300 transition duration-100"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="inline-block mb-2 text-sm text-gray-800 sm:text-base"
                >
                  Password
                </label>
                <input
                  name="password"
                  className="py-2 px-3 w-full text-gray-800 bg-gray-50 rounded border outline-none focus:ring ring-indigo-300 transition duration-100"
                />
              </div>

              {/* ログインボタン */}
              <button
                disabled
                className="block py-3 px-8 text-sm font-semibold text-center text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-600 rounded-lg outline-none focus-visible:ring ring-gray-300 transition duration-100 md:text-base"
              >
                Log in
              </button>

              {/* <div className="flex relative justify-center items-center">
                <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                <span className="relative px-4 text-sm text-gray-400 bg-white">Log in with social</span>
              </div> */}

              <Link href={'/home'} passHref>
                <button className="flex gap-2 justify-center items-center py-3 px-8 text-sm font-semibold text-center text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg outline-none focus-visible:ring ring-blue-300 transition duration-100 md:text-base">
                  ゲストログイン
                </button>
              </Link>

              {/* <button className="flex gap-2 justify-center items-center py-3 px-8 text-sm font-semibold text-center text-gray-800 bg-white hover:bg-gray-100 active:bg-gray-200 rounded-lg border border-gray-300 outline-none focus-visible:ring ring-gray-300 transition duration-100 md:text-base">
                <svg className="shrink-0 w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
                  <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
                  <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
                  <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
                </svg>

                Continue with Google
              </button> */}
            </div>

            <div className="flex justify-center items-center p-4 bg-gray-100">
              <p className="text-sm text-center text-gray-500">
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
