import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { SiTodoist } from "react-icons/si";
import { gsap } from "gsap";

export default function PublicNavbar() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".logo-letter", { display: "inline-block" });
      const tl = gsap
        .timeline({ defaults: { duration: 0.7 } })
        .fromTo(
          ".navbar-container",
          { y: "-100%", opacity: 0 },
          { y: 0, opacity: 1, delay: 2 }
        )
        .fromTo(
          ".logo-letter",
          { y: "-100%" },
          { y: 0, stagger: 0.05, duration: 0.5, ease: "elastic.out(1,0.3)" }
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="flex justify-between overflow-hidden fixed top-0 w-full py-2.5 px-40 z-[10] navbar-container">
      <div className="text-[2rem] opacity-70 flex justify-center items-center ">
        <SiTodoist />
        <div className="pl-[1rem]">
          {[..."TodoList"].map((letter) => (
            <span className="logo-letter font-bold">{letter}</span>
          ))}
        </div>
      </div>
      <div>
        <ul className="flex justify-between flex-1 text-[1.5rem] text-[rgba(0,0,0,0.5)] font-bold">
          <li className="mr-10">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-10">
            <Link to={""}>About</Link>
          </li>

          <li>
            <Link to="/signin">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
