import {
  ClipboardDocumentListIcon,
  QueueListIcon,
  InboxStackIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.authSlice.user);
  const [toggle, setToggle] = useState<boolean>(false);

  const navigate = useNavigate();
  const Logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <>
      <div className="flex justify-between ga">
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
                    onClick={() => setToggle(!toggle)}
                  />
                  <p className="px-1">{user.displayName}</p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between py-1">
        <div className="flex gap-4 py-2">
          <div className="flex items-center gap-0.5">
            <QueueListIcon className="h-4 w-4" />
            <p>List</p>
          </div>
          <div className="flex items-center gap-0.5">
            <InboxStackIcon className="h-4 w-4" />
            <p>Board</p>
          </div>
        </div>
        {toggle && (
          <button
            className="flex items-center gap-1 px-1 border-1 border-black rounded-xl"
            onClick={() => Logout()}
          >
            <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
