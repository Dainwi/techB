'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('Failed to send message');
      console.error('Error:', error);
    }
  };

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 text-[hsl(var(--foreground))]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/contact.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full  bg-slate-600 opacity-50 z-10"></div> {/* Add an overlay for better readability */}
      <div className="relative container mx-auto px-4 md:px-6 z-20 ">
        <div className="flex flex-col items-center text-center space-y-6 ">
          <div className="max-w-md bg-[hsl(var(--background))] p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4 ">Contact Me</h1>
            <p className="text-lg mb-6">
              Have any questions or want to get in touch? Fill out the form below!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-left font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[hsl(var(--border))] bg-[hsl(var(--input))] rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[hsl(var(--border))] bg-[hsl(var(--input))] rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[hsl(var(--border))] bg-[hsl(var(--input))] rounded-lg"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]  px-4 py-2 rounded-lg hover:bg-[hsl(var(--primary))]/80 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-lg">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
