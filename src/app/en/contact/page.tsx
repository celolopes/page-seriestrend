import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SeriesTrend",
  description:
    "Contact the SeriesTrend team for support, questions, or suggestions",
};

export default function Contact() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/en"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← Back to home page
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-accent">Contact</span> Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="seriestrend.app@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Technical Support</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-app-dark text-white shadow-sm p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <a
                    href="mailto:seriestrend.app@gmail.com"
                    className="text-accent hover:underline"
                  >
                    seriestrend.app@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Office Hours</h3>
                  <p className="text-gray-300">
                    Monday to Friday: 9am to 6pm <br />
                    Saturday: 9am to 1pm <br />
                    Sunday: Closed
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Response Time</h3>
                  <p className="text-gray-300">
                    Our team will respond to your request within 24 business
                    hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
