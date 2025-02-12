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
            {user && (
              <div className="flex items-center">
                <img
                  src={user.photoURL ?? undefined}
                  alt="User Avatar"
                  className="rounded-full h-8 w-8"
                />
                <p className="px-1">{user.displayName}</p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
