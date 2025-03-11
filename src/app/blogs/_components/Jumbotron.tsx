import Image from "next/image";

const BlogHome = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Main Featured Article */}
      <section className="relative h-[60vh] flex items-center justify-center text-black text-center">
        {/* Background Image */}
        <div className="absolute inset-0 h-screen">
          <Image
            src="/blogpic1.jpeg"
            alt="Blog Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative px-6max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Inside the Future of Eco-Living
          </h2>
          <p className="mt-2 text-lg md:text-xl">
            Discover how sustainable living is shaping the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogHome;
