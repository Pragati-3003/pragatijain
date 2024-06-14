import React from "react";
import "./banner.css";
import HeroComponent from "./HeroComponent";
import About from "../about/About";
import { Parallax } from 'react-parallax';
const Banner = () => {
  return (
    <Parallax bgImage="path_to_banner_background_image.jpg" strength={500}>
      <div class="mainbg">
        <header className="header js-header">
          <div className="header_logo js-header_logo">
            <a className="link-logo" aria-label="Home page" href="/">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M53.4123 56.0001C59.9131 50.12 64 41.602 64 32.1258C64 14.3832 49.6731 0 32 0C14.3269 0 0 14.3832 0 32.1258C0 41.2108 3.75642 49.4151 9.79504 55.2585L21.5957 13.0511L27.5053 25.8028H31.5H35.4947L41.4043 13.0511L53.4123 56.0001Z"
                  fill="#B7AB98"
                ></path>
                <ellipse
                  cx="26.1333"
                  cy="37.4132"
                  rx="2.13333"
                  ry="2.14172"
                  fill="#B7AB98"
                ></ellipse>
                <ellipse
                  cx="37.1333"
                  cy="37.4132"
                  rx="2.13333"
                  ry="2.14172"
                  fill="#B7AB98"
                ></ellipse>
              </svg>
            </a>
          </div>
          <div className="header_menu">
            <ul className="header_menu_list ul__reset">
              <li className="header_menu_item js-cursor-contract is-active">
                <a href="#about" className="desc text-uppercase has-tag-handle">
                  <span className="header_menu_item_inner">
                    <span className="header_menu_item_link header_menu_item_link__deep">
                      About
                    </span>
                    <span className="header_menu_item_link header_menu_item_link__active">
                      About
                    </span>
                  </span>
                </a>
              </li>
              <li className="header_menu_item js-cursor-contract">
                <a href="#work" className="desc text-uppercase has-tag-handle">
                  <span className="header_menu_item_inner">
                    <span className="header_menu_item_link header_menu_item_link__deep">
                      Work
                    </span>
                    <span className="header_menu_item_link header_menu_item_link__active">
                      Work
                    </span>
                  </span>
                </a>
              </li>
              <li className="header_menu_item js-cursor-contract">
                <a
                  href="#contact"
                  className="desc text-uppercase has-tag-handle"
                >
                  <span className="header_menu_item_inner">
                    <span className="header_menu_item_link header_menu_item_link__deep">
                      Contact
                    </span>
                    <span className="header_menu_item_link header_menu_item_link__active">
                      Contact
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <HeroComponent />
      </div>
    </Parallax>
  );
};

export default Banner;
