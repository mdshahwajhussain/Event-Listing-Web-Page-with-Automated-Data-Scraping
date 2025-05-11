import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <main className="pt-16 pb-20">
        <EventList />
      </main>
      <Footer />
    </div>
  );
}

export default App;