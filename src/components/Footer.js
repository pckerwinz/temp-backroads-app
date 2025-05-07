import React from "react";
import SocialLink from "./SocialLink";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass={"footer-links"} itemClass={"footer-link"} />

      <ul className="footer-icons" l>
        {socialLinks.map((link) => {
          return (
            <SocialLink key={link.id} {...link} itemClass={"footer-icon"} />
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
