import { AiTwotoneNotification } from "react-icons/ai";

import useNotifications from "@/hooks/useNotifications";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";

const NotificationsFeed = () => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);

  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);

  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-white text-center p-6 text-xl">
        No notifications
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        <div
          key={notification.id}
          className="flex flex-rowitems-center p-6 gap-4 border-b-[1px] border-dark  border-x-[1px] 
        "
        >
          <AiTwotoneNotification color="#557A95" size={32} />
          <p className="text-dark">{notification.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsFeed;
