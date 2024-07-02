import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div
      className="rounded-full overflow-hidden shadow-2xl ease-in-out hover:scale-110 duration-300"
      style={{ width: 300, height: 300, backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <Image
        src="/Profile-Picture.png"
        alt="Profile picture"
        className="rounded-full w-full h-full object-cover"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ProfilePicture;