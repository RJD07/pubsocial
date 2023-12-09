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
        xs:ml-3
        sm:ml-3
        md:ml-0
    "
    >
      <Image
        src="/logo.png"
        width={800}
        height={800}
      />{" "}
    </div>
  );
};

export default SidebarLogo;
