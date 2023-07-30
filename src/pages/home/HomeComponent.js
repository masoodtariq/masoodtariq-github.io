import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          ‍<title>Masood Tariq</title>‍
          <meta
            name="description"
            content="Muhammad Kumail (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Kumail is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta name="twitter:site" content="@iamkumaail" />{" "}
          <meta name="twitter:creator" content="@iamkumaail" />{" "}
          <meta name="twitter:title" content="Resume" />{" "}
          <meta
            property="twitter:url"
            content="https://muhammadkumail.com/home"
          />
          <meta
            name="twitter:description"
            content="Muhammad Kumail (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Kumail is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta property="og:title" content="Masood Tariq" />{" "}
          <meta
            property="og:description"
            content="Muhammad Kumail (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Kumail is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta property="og:url" content="https://muhammadkumail.com/" />
          <meta
            property="og:site_name"
            content="Masood Tariq"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
