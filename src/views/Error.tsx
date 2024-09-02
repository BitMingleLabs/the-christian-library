import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();

    console.log(error);

    return (
      <div
        className="w-full h-screen bg-neutral-900 flex justify-center items-center flex-col
      absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px]"
      >
        <h1 className="absolute text-semibold text-[20rem] opacity-15 max-md:text-[15rem]">
          {error.status}
        </h1>
        <h1 className="text-6xl font-semibold">😟</h1>
        <h1 className="text-4xl font-semibold align-middle mb-5">Oops!</h1>
        <p className="text-middle align-middle">Something went wrong...</p>
      </div>
    );
}

export default Error