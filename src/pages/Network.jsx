import React from 'react';
import '../index.css'
import Header from "../components/Header";
import Social from "../components/Social";

export default function Network() {
  return (
    <main className='contain'>
      <Header />
      <section className='network'>
      <div className='network-text'>
      <h1>Entre em contato pelas minhas redes sociais!</h1>
      </div>
      <div className='buttons-social'>
        <Social />
      </div>
      </section>
    </main>
  );
}