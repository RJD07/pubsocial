import { useCallback } from "react";
import { IoIosSend } from "react-icons/io";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);

  return (
    <div onClick={onClick}>
      <div className="
        mt-6
        md:hidden 
        rounded-full 
        h-24
        w-24
        p-4
        flex
        items-center
        justify-center 
        bg-sky-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
        pl-10
      "><span className="mr-5 mb-20 mt-5">
        <IoIosSend size={34} color="#557A95"  /></span>
      </div>
      <div className="
        mt-6
        hidden 
        md:block 
        px-4
        py-2.5
        rounded-full
        bg-blue
        hover:bg-lBlue
        cursor-pointer
      ">
        <p 
          className="
            hidden 
            md:block 
            text-center
            font-semibold
            text-brown
            hover:text-dark
            text-[20px]
        ">
          Publish
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
