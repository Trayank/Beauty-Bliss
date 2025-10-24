"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold text-gray-900">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
            <p className="text-gray-600">hello@beautybliss.com</p>
            <p className="text-gray-600">support@beautybliss.com</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Phone className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600 text-sm">Mon-Fri: 9am - 6pm EST</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
            <p className="text-gray-600">123 Beauty Street</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
