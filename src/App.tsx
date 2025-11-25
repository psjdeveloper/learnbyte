import React from "react";
import { motion } from "framer-motion";
import "materialize-css/dist/css/materialize.min.css";

export default function LandingPage() {
  return (
    <div style={{ background: "linear-gradient(to bottom, #111827, #000)", minHeight: "100vh", color: "white" }}>

      {/* NAVBAR */}
      <nav className="black">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">LearnByte</a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#join">Join</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <main className="container center-align" style={{ marginTop: "120px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="white-text"
          style={{ fontWeight: 800, fontSize: "3.5rem", lineHeight: "1.2" }}
        >
          Learn in Bytes. <span className="blue-text text-lighten-2">Grow Beyond Limits.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grey-text text-lighten-2"
          style={{ fontSize: "1.4rem", maxWidth: "650px", margin: "25px auto" }}
        >
          A new learning platform for coding, finance, and real skills. Tutorials delivered in simple, powerful, bite-sized lessons.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="center-align"
          style={{ marginTop: "40px" }}
        >
          <a className="btn-large blue lighten-1 waves-effect waves-light" style={{ marginRight: "20px" }}>
            Get Started
          </a>

          <a className="btn-large grey darken-3 waves-effect waves-light">
            Learn More
          </a>
        </motion.div>
      </main>

      {/* FEATURES */}
      <section id="features" className="container" style={{ marginTop: "120px" }}>
        <h3 className="center-align white-text" style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Why LearnByte?
        </h3>

        <div className="row" style={{ marginTop: "60px" }}>

          <div className="col s12 m4">
            <div className="card black">
              <div className="card-content white-text">
                <span className="card-title">Byte-Sized Learning</span>
                <p>Short, structured tutorials that help you learn faster without feeling overwhelmed.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card black">
              <div className="card-content white-text">
                <span className="card-title">Coding + Finance</span>
                <p>Level up your tech skills and financial literacy in one place.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card black">
              <div className="card-content white-text">
                <span className="card-title">Built for Learners</span>
                <p>Minimal, distraction-free design focused entirely on your growth.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container center-align" style={{ marginTop: "120px" }}>
        <h3 className="white-text" style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          The Vision
        </h3>

        <p className="grey-text text-lighten-2" style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "30px auto" }}>
          LearnByte is more than a platform — it's a movement. A place where anyone can learn, build, and grow without limits. 
          A place designed by a learner, for learners.
        </p>
      </section>

      {/* JOIN */}
      <section id="join" className="container center-align" style={{ marginTop: "120px", marginBottom: "120px" }}>
        <h3 className="white-text" style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Be Part of the Beginning
        </h3>

        <p className="grey-text text-lighten-2" style={{ fontSize: "1.3rem", maxWidth: "700px", margin: "20px auto 50px" }}>
          This is just the start. Join early, learn with me, and help shape the future of LearnByte.
        </p>

        <a className="btn-large blue lighten-1 waves-effect waves-light">
          Join the Journey
        </a>
      </section>

    </div>
  );
}
