import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.authSlice.user);

  return (
    <div className="flex justify-between">
      <div className="flex">
        <ClipboardDocumentListIcon className="h-8 w-8" />
        <p className="font-extrabold text-2xl">TaskFlow</p>
      </div>
      <div>
        {user ? (
          <div>
            {user.photoURL && (
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocJAHTJxV9iSYQGeOEaBRHfVEsNJLsC7DzcOXKEIBdRKt9OzgkTH=s96-c"
                alt="User Avatar"
                className="rounded-full h-8 w-8"
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
