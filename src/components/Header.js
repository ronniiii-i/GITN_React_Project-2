import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import x from "../img/x.png";
import metamask from "../img/metamas.png"
import walletconnect from "../img/wallet.png"

function Header() {
  const [isVisible, setVisible] = useState(false);

  const showMenu = () => {
    setVisible(true)
  }
  const closeMenu = () => {
    setVisible(false)
  }

  return (
    <>
      <header className="flex align-center justify-center full-width">
        <div className="logo">
          <img src={logo} alt="Meta BnB" />
        </div>
        <div className="wrapper flex align-center justify-between">
          <nav>
            <ul className="flex justify-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/places-to-stay">Place to stay</Link>
              </li>
              <li>
                <a>NFTs</a>
              </li>
              <li>
                <a>Community</a>
              </li>
            </ul>
          </nav>
          <button onClick={showMenu}>Connect Wallet</button>
        </div>
      </header>
      <section className={`bg ${isVisible ? "flex justify-center align-center" : "close"}`}>
        <div className="content">
          <div className="title flex justify-between align-center full-width">
            <strong>Connect Wallet</strong>
            <img src={x} alt="X" onClick={closeMenu} />
          </div>
          <div className="text flex column">
            <p>Choose your preferred wallet</p>
            <button class="flex justify-between align-center">
              <img src={metamask} alt="Metamask" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z"
                  fill="#959DA6"
                ></path>
              </svg>
            </button>
            <button class="flex justify-between align-center">
              <img src={walletconnect} alt="Metamask" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z"
                  fill="#959DA6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
