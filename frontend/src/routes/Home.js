import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import image from "../images/1.jpeg";
import "./Home.styles.css";
export default function Home() {
  const hero = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { duration: 1, ease: "power3.out" },
        })
        .fromTo(
          ".hero-img",
          { x: "100%" },
          { x: 0, ease: "bounce.out", duration: 2 },
          "<20%"
        )
        .fromTo(
          ".hero-text1",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 0.8 },
          "<20%"
        )

        .fromTo(
          ".hero-text2",
          { y: "-100%", opacity: 0 },
          { y: 0, opacity: 0.8 },
          "<20%"
        )
        .fromTo(
          ".hero-text3",
          { x: "100%", opacity: 0 },
          { x: 0, opacity: 0.8 },
          "<20%"
        )
        .fromTo(
          ".hero-text4",
          { x: "-100%", opacity: 0 },
          { x: 0, opacity: 0.8 },
          "<20%"
        )
        .fromTo(
          ".hero-text5",
          { x: "100%", opacity: 0 },
          { x: 0, opacity: 0.8 },
          "<20%"
        )
        .fromTo(
          ".hero-text6",
          { x: "-100%", opacity: 0 },
          { x: 0, opacity: 0.8 },
          "<20%"
        )
        .fromTo(
          ".hero-text7",
          { y: "100%", opacity: 0 },
          { y: 0, opacity: 0.8 },
          "<20%"
        )
        .fromTo(
          ".hero-text8",
          { x: "100%", opacity: 0 },
          { x: 0, opacity: 0.8 },
          "<20%"
        );
      tl.fromTo(
        ".hero-login",
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1 },
        "<-100%"
      ).fromTo(
        ".hero-signup",
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1 },
        "<"
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-container" ref={hero}>
        <div>
          <div className="first-line hero-line">
            <div className="hero-text">
              <span className="hero-text1">Your</span>
            </div>
            <div className="hero-text">
              <span className="hero-text2">Key</span>
            </div>
            <div className="hero-text">
              <span className="hero-text3">To</span>
            </div>
          </div>

          <div className="second-line hero-line">
            <div className="hero-text">
              <span className="hero-text4">Successful</span>
            </div>
            <div className="hero-text">
              <span className="hero-text5">Move,</span>
            </div>
          </div>

          <div className="third-line hero-line">
            <div className="hero-text">
              <span className="hero-text6">Lets</span>
            </div>
            <div className="hero-text">
              <span className="hero-text7">Get</span>
            </div>
            <div className="hero-text">
              <span className="hero-text8">Listed.</span>
            </div>
          </div>
          <div className="hero-buttons">
            <div className="hero-button-each">
              <button className="hero-button hero-login">Login</button>
            </div>
            <div className="hero-button-each">
              <button className="hero-button hero-signup">SignUp</button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src={image} alt="" className="hero-img" />
        </div>
      </div>
    </div>
  );
}
