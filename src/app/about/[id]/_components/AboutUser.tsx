"use client";

interface AboutProps {
  firstName: string;
  lastName: string;
  email: string;
  description?:string;
}

export default function AboutUser({ firstName, lastName, email,description }: AboutProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <img
          src="/auau.png"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">{firstName} {lastName} </h1>
        <p className="text-gray-500">Email: {email}</p>
        <p className="text-gray-500 justify-center item-center ">{description}</p>


      </div>
    </div>
  );
}