import React from 'react';
import './Header.css';

const Header=()=> {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 id="white" className="title">Trivia Quiz!</h1>
          <h2 id="yellow" className="subtitle">
             Select a category or answer questions
            from all possible categories.
          </h2>
        </div>
      </div>
    </section>
  );
}
export default Header;
