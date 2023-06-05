"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import Image from "next/image";
import { TbCameraPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { set_Image_URL } from "../../Setting/actionSlice";
import { useCallback } from "react";
declare global {
  interface Window {
    cloudinary: any; // or specify the appropriate type if available
  }
}

function ImageComponents() {
  const dispatch = useDispatch();
  const [Image_data, setImage_data] = useState<string>("");

  const Handle_Upload_Image = useCallback(
    (result: any) => {
      const urlParts = result.info.secure_url.split("upload/", 2);
      const croppedImageUrl = urlParts[1];
      setImage_data(
        "https://res.cloudinary.com/do35vz1w8/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/" +
          croppedImageUrl
      );
      dispatch(
        set_Image_URL(
          "https://res.cloudinary.com/do35vz1w8/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/" +
            croppedImageUrl
        )
      );
    },
    [setImage_data]
  );

  return (
    <div className="w-auto h-auto  frcc">
      {!Image_data || Image_data === "" ? (
        <CldUploadWidget
          onUpload={Handle_Upload_Image}
          uploadPreset={"kpfeqxda"}
          options={{
            maxFiles: 1,
            styles: {
              palette: {
                overlay: "#1e1e1ecd", // Set the overlay background color here
              },
            },
          }}
        >
          {({ open }) => {
            return (
              <div
                onClick={() => open?.()}
                className="w-[200px] h-[200px] dark:bg-[#1e1e1ecd] bg-[#c7c7c7cd] shadow-lg cursor-pointer rounded-full fccc"
              >
                <TbCameraPlus className=" text-[40px] hover:text-blue-500  " />
              </div>
            );
          }}
        </CldUploadWidget>
      ) : (
        <div className="w-[200px] h-[200px] rounded-full fccc">
          <Image
            className="w-[200px] h-[200px] rounded-full "
            style={{ objectFit: "cover" }}
            src={Image_data}
            width={1920}
            height={1080}
            alt={Image_data}
          />
        </div>
      )}
    </div>
  );
}

export default ImageComponents;

/*
  const Handle_Upload_Image = async () => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "do35vz1w8",
        uploadPreset: "mzafj2l1",
        cropping: true,
        croppingAspectRatio: 1, // Square aspect ratio for cropping
        croppingDefaultSelectionRatio: 0.8, // Initial selection area ratio
        croppingShowDimensions: true, // Display dimensions of the cropping selection
        styles: {
          palette: {
            overlay: "#000000",
          },
        },
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          const urlParts = result.info.url.split("upload/", 2);
          const croppedImageUrl = urlParts[1];
          setImage_data(
            "https://res.cloudinary.com/do35vz1w8/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/" +
              croppedImageUrl
          );
          dispatch(
            set_Image_URL(
              "https://res.cloudinary.com/do35vz1w8/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/" +
                croppedImageUrl
            )
          );
        }
      }
    );
    await myWidget.open();
  };
  */
