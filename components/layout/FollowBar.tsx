import useUsers from '@/hooks/useUsers';

import Avatar from '../Avatar';

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="px-2 ml-3 hidden lg:block">
      <div className="bg-dark rounded-2xl p-5">
        <h2 className="text-white text-2xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4 cursor-pointer">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4 hover:px-3">
              <Avatar userId={user.id} />
              <div className="flex flex-col ">
                <p className="text-white font-semibold text-lg">{user.name}</p>
                <p className="text-lBlue text-md">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
