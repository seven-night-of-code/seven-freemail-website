import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex  justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="/sevenfreemail-removebg-preview.png"
                alt="Logo"
                className="h-10 mr-2"
              />
              <h1 className="text-2xl font-bold">Hiring.co</h1>
            </div>
            <p className="text-gray-400 mb-4">Catch your dream company</p>
            <h2 className="text-lg font-bold mb-2">Subscribe Our Newsletter</h2>
            <p className="text-gray-400 mb-4">
              Be the first one to know about discounts, offers and events.
              Unsubscribe whenever you like.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg">
                Subscribe now
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/3 flex  justify-between ml-7">
            <div className="w-1/2 md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    In Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="w-1/2 md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Online Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Ticketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Call center
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="w-1/2 md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4">FAQ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; All Copyright reserved 2022</p>
          <p className="text-gray-400 mt-2">Created By Krunal Modi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
