import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";

function useDashboardFunction() {
  const [name, setName] = useState("");
  const formModal = useState(false);

  useEffect(() => {
    const cookies = getCookie("name")?.toString();
    setName(cookies || "");
  }, []);

  return { name, formModal };
}

export default useDashboardFunction;
