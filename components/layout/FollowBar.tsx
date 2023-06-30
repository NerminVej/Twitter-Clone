/*
  FollowBar Component

  This component is responsible for rendering a follow bar section, displaying a list of users to follow.
  It utilizes the 'useUsers' custom hook to fetch the user data. If there are no users, it returns null
  to hide the component. Otherwise, it renders a list of users with their avatars, names, and usernames.
*/

import useUsers from "@/hooks/useUsers";

import Avatar from "../Avatar";

// Define the 'FollowBar' functional component
const FollowBar = () => {
  // Destructuring the 'data' property from the custom hook 'useUsers' with a default value of an empty array
  const { data: users = [] } = useUsers();

  // If there are no users, return null (nothing will be rendered)
  if (users.length === 0) {
    return null;
  }

  // Render the following JSX if there are users
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {/* Iterate over the 'users' array and render a JSX element for each user */}
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              {/* Render the 'Avatar' component and pass the 'userId' as a prop */}
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
