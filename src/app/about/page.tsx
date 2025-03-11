"use client"; // Ensures hooks work in Next.js

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";

const API_URL = "https://lavishverse-us.backendless.app/api/data/users";

interface User {
  objectId: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  description?: string;
}

const About = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Blog History Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700">About Planto Blog</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Planto Blog was founded with the vision of inspiring people to bring
          nature into their homes. What started as a simple passion project has
          grown into a community-driven platform for plant lovers and interior
          design enthusiasts. We aim to provide practical advice, inspiration,
          and expert tips to help you create a greener, more sustainable living
          space.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-12 bg-green-100 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold text-green-700">
          Our Mission & Vision
        </h2>
        <p className="mt-4 text-gray-700">
          Our mission is to help people integrate plants into their homes
          effortlessly, creating a harmonious and relaxing environment. We
          believe that a greener home is a happier home.
        </p>
      </div>

      {/* User Profiles List */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Link key={user.objectId} href={`/users/${user.objectId}`} className="block">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl">
              {/* User Image with Default Avatar Fallback */}
              <Image
                src={user.image || "/default-avatar.png"} // Default avatar if no image
                alt={`${user.firstName} ${user.lastName}`}
                className="rounded-full border-2 border-black shadow-lg"
                width={120}
                height={120}
              />

              {/* User Info */}
              <p className="text-lg text-gray-800 mt-4 font-semibold">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-600 mt-2">{user.description || "No description provided."}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default About;
