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
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.authSlice.user);
  const [toggle, setToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const Logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef]);
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
                    className="rounded-full h-8 w-8 cursor-pointer"
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
            <p className="font-semibold">List</p>
          </div>
          <div className="flex items-center gap-0.5">
            <InboxStackIcon className="h-4 w-4" />
            <p className="font-semibold">Board</p>
          </div>
        </div>
        {toggle && (
          <button
            ref={buttonRef}
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
