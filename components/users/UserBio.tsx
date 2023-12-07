import { useMemo } from "react";
import { BiCalendar } from "react-icons/bi";
import { format } from "date-fns";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useFollow from "@/hooks/useFollow";
import useEditModal from "@/hooks/useEditModal";

import Button from "../Button";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');
  }, [fetchedUser?.createdAt])


  return ( 
    <div className="pb-3">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit Profile" onClick={editModal.onOpen} />
        ) : (
          <Button
            onClick={toggleFollow} 
            label={isFollowing ? 'Unfollow' : 'Follow'}
            secondary={!isFollowing}
            outline={isFollowing}
          />
        )}
      </div>
      <div className="mt-3 px-4">
        <div className="flex flex-col">
          <p className="text-blue text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-dark">
            @{fetchedUser?.username}
          </p>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-blue font-semibold">
            {fetchedUser?.bio}
          </p>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-dark
          ">
            <BiCalendar size={24} />
            <p>
              Joined {createdAt}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-2 gap-6 ml-0.5 ">
          <div className="flex flex-row items-center gap-1">
            <p className="text-blue font-bold">{fetchedUser?.followingIds?.length}</p>
            <p className="text-dark">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-blue font-bold">{fetchedUser?.followersCount || 0}</p>
            <p className="text-dark">Followers</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default UserBio;