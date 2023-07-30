import React from "react";
import "./SocialMedia.css";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia({ theme, socialMediaLinks }) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, index) => {
        return (
          <a
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <IconWrapper {...media} {...theme} key={index}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
