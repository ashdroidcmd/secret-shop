import { FacebookIcon, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="invisible border-b border-b-stone-700 bg-stone-950 p-4 md:visible">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row">
            <div className="flex grow flex-row space-x-6  ">
              <div className="flex flex-row items-center space-x-2">
                <Phone /> <p className="text-lg">: 0991 234 5678</p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <Mail /> <p className="text-lg">: secret.shop@gmail.com</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <MapPin /> <p className="text-lg">: Bohol, Philippines</p>
              </div>
            </div>

            <div className="flex flex-row space-x-4">
              <FacebookIcon />
              <Instagram />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
