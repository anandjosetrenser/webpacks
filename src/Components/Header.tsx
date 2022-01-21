import React from 'react'
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light move-head-main-container">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <a href="/" className="navbar-brand mt-2 mt-lg-0">
            <img
              src="/asset/images/header/head_icon.svg"
              height="20"
              width="154"
              alt=""
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Movie
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                People
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                More
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center right-container">
          <span className="items">
            <img src="/images/header/plus.svg" height="25" alt="" />
          </span>
          <span className="language-label items">EN</span>
          <span className="items">
            <img src="/images/header/google.jpg" alt="" />
          </span>
          <span className="bell-show"></span>
          <span className="items item-search">
            <img src="/images/header/search.svg" alt="" />
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header
