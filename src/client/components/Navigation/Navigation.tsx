import React, { FC } from "react";

const Navigation: FC = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user">
            Users
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/posts">
            Posts
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
