'use client'

import LikeIcon from "@/components/atom/svg/LikeIcon";
import { useState } from "react";

export default function LikeButton({className} : {className:string}) {
  const [isLike, setIsLike] = useState(false);

  return (
    <div onClick={() => setIsLike(!isLike)} className={className}>
      {isLike ? <LikeIcon isFilled={true} /> : <LikeIcon />}
    </div>
  );
}
