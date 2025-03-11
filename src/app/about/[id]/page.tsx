import { User } from "lucide-react";
import Image from "next/image";

const API_URL = "https://lavishverse-us.backendless.app/api/data/users";

interface User {
  objectId: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  description?: string;
}

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log(id);

  const response = await fetch(`${API_URL}/${id}`);
  const data: User = await response.json();

  //   fetchUser();
  // }, [id]);

  // if (!user) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      {/* Profile Image */}
      <Image
        src={data.image}
        alt="Profile"
        className="rounded-full border-4 border-black shadow-lg"
        width={150} // Adjusted size for better visibility
        height={150}
      />

      {/* Profile Text */}
      <p className="text-lg text-gray-800 mt-4 text-center gap-5">
        <span className="font-semibold">{data.firstName} {data.lastName}</span> <br />
        {data.description}
      </p>
    </div>
  );
};

export default UserProfile;
