import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Zoom } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Helmet>
          ‍<title>Education</title>‍
          <meta
            name="description"
            content="My education history has always been an entertaining one, here's what's more about it..."
          />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Education" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/education"
          />
          <meta
            name="twitter:description"
            content="My education history has always been an entertaining one, here's what's more about it..."
          />{" "}
          <meta property="og:title" content="Education" />{" "}
          <meta
            property="og:description"
            content="My education history has always been an entertaining one, here's what's more about it..."
          />
          <meta
            property="og:url"
            content="https://muhammadkumail.com/education"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Zoom duration={1000}>
            <div className="heading-div">
              <div className="heading-img-div">
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  My Qualifications and Certifications
                </h3>
                <p>
                  Here's what you need to know about my qualification background{" "}
                  <span role="img" aria-label="blink">
                    😉
                  </span>
                </p>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Zoom>
          <Educations theme={this.props.theme} />
          <Certifications theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
