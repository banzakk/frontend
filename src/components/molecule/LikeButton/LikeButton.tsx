'use client'

import LikeIcon from "@/components/atom/svg/LikeIcon";
import { useState } from "react";

export default function LikeButton({className} : {className:string}) {
  const [isLike, setIsLike] = useState(false);
  const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsLike(!isLike)
  }

  return (
    <div onClick={(e)=>handleLike(e)} className={className}>
      {isLike ? <LikeIcon isFilled={true} /> : <LikeIcon />}
    </div>
  );
}
