import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "./ui/label";
import Appliedjjob from "./Appliedjjob";
import UPdtaeprofiledilog from "./UPdtaeprofiledilog";
import { useSelector } from "react-redux";
import ProfilePictureUploader from "./ProfilePictureUploader";
import { Button } from "./ui/button";

const Profile = () => {
  const ishaveresume = true;
  const [open, setopen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  // ✅ Move profilePhotoUrl state here directly
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(
    `https://api.dicebear.com/6.x/initials/svg?seed=${user?.fullname}`
  );

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-2xl my-5 p-8">
        <div className="flex gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <ProfilePictureUploader
                profilePhotoUrl={profilePhotoUrl}
                setProfilePhotoUrl={setProfilePhotoUrl}
              />
            </div>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setopen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>

        <div className="gap-3 pl-5">
          <div className="flex items-center gap-3">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex gap-3 items-center">
            <Contact />
            <span>{user?.phonenumber}</span>
          </div>
        </div>

        <div>
          <h1 className="font-semibold mt-4 mb-2">Skills</h1>
          <div className="flex gap-2 flex-wrap">
            {user?.profile?.skills.length !== 0
              ? user?.profile?.skills.map((skills, index) => (
                  <Badge key={index}>{skills}</Badge>
                ))
              : "NA"}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {user?.profile?.resume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 w-full hover:underline"
            >
              {user?.profile?.resumeOriginalName || "View Resume"}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold">Applied Jobs</h1>
        <Appliedjjob />
      </div>

      <UPdtaeprofiledilog open={open} setopen={setopen} />
    </div>
  );
};

export default Profile;
