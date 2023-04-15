"use client";

import { useState } from "react";

export function LikedButton({ id }) {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "💔"}</button>
  );
}
