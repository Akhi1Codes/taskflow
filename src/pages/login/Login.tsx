import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { auth, provider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { User } from "firebase/auth";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (): Promise<void> => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const serializableUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL ?? undefined,
      } as User;
      navigate("/dashboard");
      dispatch(setUser({ user: serializableUser }));
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <div className="px-12 flex flex-col justify-center h-[100vh]">
      <div className="flex items-center">
        <ClipboardDocumentListIcon className="h-12 w-12 text-purple-900" />
        <p className="font-extrabold text-3xl text-purple-900">TaskFlow</p>
      </div>
      <p className="font-medium text-sm py-2">
        Enhance your productivity and monitor your progress
        <br />
        seamlessly with our comprehensive task management application.
      </p>
      <button className="w-fit p-2 bg-black text-white" onClick={handleClick}>
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
