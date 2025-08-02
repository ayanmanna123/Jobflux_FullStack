import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Camera } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { setuser } from "@/Redux/authSilce";

const ProfilePictureUploader = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);

  const handleImageClick = () => inputRef.current.click();


  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.put(
        "http://localhost:5000/api/v1/user/upload-profile-photo",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        submitHandelar()
        dispatch(setuser(res.data.user));
         
        toast.success(res.data.message);
      }
    } catch (err) {
      toast.error("Failed to upload profile photo");
      console.error("Upload error:", err);
    }
    
  };

  return (
    <div className="relative w-[120px] h-[120px] rounded-full cursor-pointer group">
      <img
        src={user?.profile?.profilephoto || "/default.png"}
        alt="Profile"
        className="w-full h-full object-cover rounded-full border-[3px] border-gradient-to-r from-red-500 via-yellow-500 to-purple-600"
        onClick={handleImageClick}
      />

      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleFileChange}
      />

      <div
        onClick={handleImageClick}
        className="absolute bottom-0 right-0 bg-black rounded-full p-1 group-hover:opacity-100 opacity-80"
      >
        <Camera className="text-white w-4 h-4" />
      </div>
    </div>
  );
};

export default ProfilePictureUploader;
