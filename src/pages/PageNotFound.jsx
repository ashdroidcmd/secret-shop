import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-4 text-gray-800">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-2 text-2xl">Page Not Found</h2>
      <p className="mb-6 max-w-md text-center">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn btn-primary btn-lg rounded px-4 py-2 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
