import PropTypes from "prop-types";

export function FollowItem({ name, username }) {
  return (
    <div className="py-3 hover: bg-gray-800 transition duration-200 cursor-pointer">
      <p className="font-bold">{name}</p>
      {username && <p className="text-gray-500 text-sm">{username}</p>}
    </div>
  );
}

FollowItem.PropTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
};
