import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

export function FormatImage() {
  const cld = new Cloudinary({ cloud: { cloudName: "dpunh7hfo" } });
  const img = cld.image('');
}
