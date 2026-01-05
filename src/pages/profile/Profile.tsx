import { profile } from "@/redux/features/thunks";
import type { RootState } from "@/redux/root-reducer";
import type { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.me);
  const loading = useSelector((state: RootState) => state.auth.isLoading);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Profile not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        {/* Avatar */}
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
            {user?.firstName.charAt(0)}
            {user?.lastName.charAt(0)}
          </div>

          <h1 className="mt-4 text-2xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h1>

          <span className="mt-1 text-sm text-indigo-600 capitalize">
            {user.role}
          </span>

          <div className="mt-2 flex gap-2">
            {user.emailVerified && (
              <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                Email Verified
              </span>
            )}
            {user.isActive ? (
              <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                Active
              </span>
            ) : (
              <span className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-full">
                Inactive
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Account Information
          </h2>

          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Email</span>
              <span>{user.email}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">User ID</span>
              <span className="truncate max-w-[200px]">{user._id}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Joined</span>
              <span>
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ProfilePage;
