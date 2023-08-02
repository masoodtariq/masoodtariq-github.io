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
            content="Masood Tariq is a Software Engineer, Public Speaker, and a fitness Enthusiast. Masood is also a freelancer, digital marketing guru and a NUST graduate. Currently lives in Pakistan Sialkot. Eagers to join Fashion industry"
          />
          <meta name="twitter:site" content="MasoodTariq_" />{" "}
          <meta name="twitter:creator" content="MasoodTariq_" />{" "}
          <meta name="twitter:title" content="Resume" />{" "}
          <meta
            property="twitter:url"
            content="https://https://masoodtariq.github.io/home"
          />
          <meta
            name="twitter:description"
            content="Masood Tariq is a Software Engineer, Public Speaker, and a fitness Enthusiast. Masood is also a freelancer, digital marketing guru and a NUST graduate. Currently lives in Pakistan Sialkot. Eagers to join Fashion industry"
          />
          <meta property="og:title" content="Masood Tariq" />{" "}
          <meta
            property="og:description"
            content="Masood Tariq is a Software Engineer, Public Speaker, and a fitness Enthusiast. Masood is also a freelancer, digital marketing guru and a NUST graduate. Currently lives in Pakistan Sialkot. Eagers to join Fashion industry"
          />
          <meta property="og:url" content="https://masoodtariq.github.io/" />
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
