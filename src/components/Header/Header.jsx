import React from "react";

const Header = () => {
  return (
    <>
      <header className="invisible border-b border-b-stone-700 bg-stone-950 p-4 md:visible">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-row">
            <div className="flex grow flex-row space-x-4">
              <p>Call:</p>
              <p>Email:</p>
              <p>Location:</p>
            </div>

            <div className="flex flex-row space-x-4">
              <p>Facebook</p>
              <p>TikTok</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
