import Draggable from 'react-draggable';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none mt-8 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://f-m-r.fr/wp-content/uploads/2020/02/logov5.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-black-900">Connectez vous </h2>
            <p className="mt-2 text-sm text-black-600">
              ou{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Inscrivez vous !
              </a>
            </p>
          </div>

          <div className="mt-8 inline">
            <div>
              <div>
                <p className="text-sm font-medium text-black-700">Sign in with</p>

                <div className="mt-1 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <img src="https://img.icons8.com/color/48/000000/facebook.png"/>                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                    >
                      <span className="sr-only">Sign in with instagram</span>
                      <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"/>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                    >
                      <span className="sr-only">Sign in with Linkedin</span>
                      <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                    </a>
                  </div>
                </div>
                <Draggable>       
        <div className="handle"><i className='far fa-hand-point-down' ></i> 
        <img alt="..." src={require("assets/img/foot.png").default} />
        </div>
      </Draggable>
              </div>

              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-purple text-black-500">Or continue with</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-black-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-black-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-black-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>

      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://cdn.pixabay.com/photo/2013/07/12/12/29/soccer-145794_960_720.png"
          alt=""
        />
    </div>
    </div>
  )
}