
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="bg-gradient-to-r from-sky-900 to-blue-950 min-h-screen text-white">
      <Head>
        <title>Legal Peritus - World's #1 Legal Tech Platform</title>
      </Head>
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <img src="/logo.png" alt="Legal Peritus" className="w-32 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">World's #1 Legal Tech Platform</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">Connecting you with top-rated lawyers and AI-powered legal assistants globally.</p>
        <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-2xl shadow-lg w-full max-w-md">
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full mb-4 p-2 rounded" required />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full mb-4 p-2 rounded" required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} className="w-full mb-4 p-2 rounded" required />
          <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">Send</button>
        </form>
      </main>
    </div>
  );
}
