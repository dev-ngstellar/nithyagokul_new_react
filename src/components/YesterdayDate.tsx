"use client";

import { useEffect, useState } from "react";

export default function YesterdayDate() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    setFormattedDate(
      date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  // "June 23, 2026" is used as the initial placeholder to match SSR and prevent hydration mismatch
  return <>{formattedDate || "June 23, 2026"}</>;
}
