// import React from "react";
// import { Link } from "react-router";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/">
//         <p className="text-2xl font-bold text-gradient">RESUMIND</p>
//       </Link>
//       <Link to="/upload" className="primary-button w-fit">
//         <p>Upload Resume</p>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router";
import { usePuterStore } from "~/lib/putter";

const Navbar = () => {
  const { auth } = usePuterStore();

  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/upload" className="primary-button w-fit">
          <p>Upload Resume</p>
        </Link>
        {auth.isAuthenticated && (
          <button
            onClick={auth.signOut}
            className="text-gray-600 font-medium hover:text-red-500 transition-colors"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
