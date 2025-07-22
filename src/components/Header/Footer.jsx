import { FacebookIcon, Globe, Store } from "lucide-react";
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
            <Link to="/page-not-found" className="hover:text-primary">
              <FacebookIcon />
            </Link>
            <Link to="/page-not-found" className="hover:text-primary">
              <Globe />
            </Link>
            <Link to="/page-not-found" className="hover:text-primary">
              <Store />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
