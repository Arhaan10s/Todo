import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <style>
        {`
          header {
            background: linear-gradient(to right,rgba(36, 35, 45, 0.91), #7c3aed); /* Indigo to purple gradient */
            color: #fff;
            padding: 1rem 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }

          .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;
          }

          .logo {
            font-size: 1.75rem;
            font-weight: 800;
          }

          .logo span {
            color: #facc15; /* Yellow */
          }

          nav ul {
            display: flex;
            list-style: none;
            gap: 1.5rem;
            margin: 0;
            padding: 0;
          }

          nav a {
            color: #fff;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 500;
            transition: color 0.3s, border-bottom 0.3s;
          }

          nav a:hover {
            color: #fde047; /* Lighter yellow on hover */
          }

          nav .active {
            color: #facc15; /* Active yellow */
            border-bottom: 2px solid #facc15;
          }

          @media (max-width: 600px) {
            .header-container {
              flex-direction: column;
              gap: 0.75rem;
            }
          }
        `}
      </style>

      <header>
        <div className="header-container">
          <h1 className="logo">
            Task<span>Management</span>
          </h1>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Create Task
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
