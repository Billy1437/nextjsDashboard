"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Read = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");

  return (
    <div>
      <h1>{search}</h1>
    </div>
  );
};

export default Read;
