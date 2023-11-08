import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <h1 className='py-4 text-4xl text-center text-pink-900 font-bold'>My Profile</h1>
                <div className="flex flex-col justify-between mx-72 my-10">
                    <div>
                        <img src={user?.photoURL} className="w-72 rounded-lg shadow-2xl" />
                    </div>
                    <div className="items-center">
                        <h1 className="pt-12 text-xl text-pink-600 font-semibold">Username:</h1>
                        <h1 className="text-2xl text-pink-700 font-extrabold">{user?.displayName}</h1>
                        <p className="pt-8 text-xl text-pink-600 font-semibold">User Email:</p>
                        <p className="text-2xl text-pink-700 font-extrabold">{user?.email}</p>
                        <button onClick={handleSignOut} className='mt-8 btn btn-secondary text-white text-lg bg-pink-700 border-pink-700 normal-case'>Switch Account</button>
                    </div>
                </div>
        </div>
    );
};

export default UserProfile;