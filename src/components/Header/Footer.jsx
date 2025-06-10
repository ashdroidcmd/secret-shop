import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-t-stone-700 bg-stone-950 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Footer Links */}
        <div className="border-b border-b-stone-400">
          <div className="mb-8 flex flex-col justify-between space-y-4 sm:flex-row">
            <div>
              <Link to="/" className="mb-4 inline-flex items-center">
                <img
                  className="h-auto w-60 md:w-80"
                  src="/images/logo-light.png"
                  alt="Secret Shop Logo"
                />
              </Link>
              <p className="text-lg">Bohol, Philippines</p>
              <p className="text-lg">secret.shop@gmail.com</p>
              <p className="text-lg">0991 234 5678</p>
            </div>

            <div>
              <h5 className="mb-2 text-lg font-bold">Secret Shop</h5>
              <ul className="space-y-1 text-lg">
                {[
                  "About Us",
                  "Contact Us",
                  "Location",
                  "How to Order",
                  "Payment FAQ",
                  "Order Tracking",
                  "Request an item",
                ].map((text, i) => (
                  <li key={i}>
                    <Link to="/coming-soon" className="hover:underline">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-2 text-lg font-bold">Legal</h5>
              <ul className="space-y-1 text-lg">
                {[
                  "Terms and Condition",
                  "Cancellation Policy",
                  "Return and Refund Policy",
                ].map((text, i) => (
                  <li key={i}>
                    <Link to="/coming-soon" className="hover:underline">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links and Copyright */}
        <div className="border-neutral flex flex-col items-center justify-between border-t pt-4 text-sm sm:flex-row">
          <p>© 2025 Secret Shop. All rights reserved.</p>
          <div className="mt-4 flex gap-3 sm:mt-0">
            <Link to="/coming-soon" className="hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </Link>
            <Link to="/coming-soon" className="hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-browser-chrome"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                />
              </svg>
            </Link>
            <Link to="/coming-soon" className="hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-shop"
                viewBox="0 0 16 16"
              >
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
