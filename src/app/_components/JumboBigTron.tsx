"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Sprout,
  Users,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Mail,
  ChevronRight,
} from "lucide-react";

const JumboBigTron = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[500px] h-[60vh] lg:h-[600px] overflow-hidden">
  {/* Background Image Container */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/jumbo2.jpeg"
      alt="Plants background"
      fill
      sizes="100vw"
      className="object-cover opacity-30"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-green-600/50" />
  </div>
  
  {/* Content Container */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
      Planto <span className="text-green-300">Blog</span>
    </h1>
    
    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xs sm:max-w-lg md:max-w-2xl mb-6 sm:mb-8 drop-shadow">
      Your ultimate destination for plant inspiration, home decor tips,
      and sustainable living.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/blogs">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 w-full sm:w-auto"
        >
          Explore Our Blog
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* Featured Posts */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-green-800 flex items-center">
            <Sprout className="mr-2 h-7 w-7" />
            Featured Posts
          </h2>
          <Link
            href="/blogs"
            className="text-green-600 hover:text-green-700 flex items-center font-medium"
          >
            View all posts
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Navigation Cards with Icons */}
      <section className="container mx-auto px-6 py-16 bg-green-50 rounded-3xl my-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Explore Planto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/about" className="group">
            <Card className="h-full border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  About Us
                </h3>
                <p className="text-gray-600">
                  Learn about our journey, mission, and the passionate team
                  behind Planto Blog.
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 text-green-600 group-hover:text-green-700"
                >
                  Discover More
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blogs" className="group">
            <Card className="h-full border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Our Blog
                </h3>
                <p className="text-gray-600">
                  Explore plant care guides, home decor inspiration, and
                  sustainable living tips.
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 text-green-600 group-hover:text-green-700"
                >
                  Read Articles
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/contact" className="group">
            <Card className="h-full border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Contact Us
                </h3>
                <p className="text-gray-600">
                  Get in touch with us for collaborations, inquiries, or just to
                  say hello!
                </p>
                <Button
                  variant="ghost"
                  className="mt-4 text-green-600 group-hover:text-green-700"
                >
                  Reach Out
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Blogs Subscription */}
      <section className="container mx-auto px-6 py-16 mb-16">
        <div className="bg-green-50 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-lg">
          <div className="flex justify-center mb-6">
            <Mail className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Join Our Green Community
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our blog for exclusive plant care tips, early
            access to new articles, and special offers on plant accessories.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer with leaf pattern */}
      <footer className="container mx-auto bg-green-900 text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold flex items-center">
                <Leaf className="mr-2 h-6 w-6" />
                Planto Blog
              </h2>
              <p className="text-green-300 mt-2">
                Growing knowledge, nurturing homes
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/about"
                className="text-white hover:text-green-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="text-white hover:text-green-300 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-green-300 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-white hover:text-green-300 transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-400 text-sm">
            © {new Date().getFullYear()} Planto Blog. All rights reserved.
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <Leaf
              key={i}
              className="absolute text-white"
              size={30 + Math.random() * 40}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default JumboBigTron;
