'use client'

import LikeIcon from "@/components/atom/svg/LikeIcon";
import { useState } from "react";

export default function Like() {
  const [isLike, setIsLike] = useState(false);

  return (
    <div onClick={() => setIsLike(!isLike)}>
      {isLike ? <LikeIcon isFilled={true} /> : <LikeIcon />}
    </div>
  );
}
