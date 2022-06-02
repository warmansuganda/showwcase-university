import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import dummy from "./dummy.json";

function useDashboardFunction() {
  const [name, setName] = useState("");
  const formModal = useState(false);
  const [data] = useState(dummy);

  useEffect(() => {
    const cookies = getCookie("name")?.toString();
    setName(cookies || "");
  }, []);

  return { name, formModal, data };
}

export default useDashboardFunction;
