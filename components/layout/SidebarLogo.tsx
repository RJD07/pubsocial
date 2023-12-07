import { useRouter } from "next/router";
import Image from "next/image";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="
        rounded-full 
        h-20
        w-20
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    "
    >
      <Image
        src="/logo.png"
        width={800}
        height={800}
        alt="Picture of the author"
      />{" "}
    </div>
  );
};

export default SidebarLogo;
