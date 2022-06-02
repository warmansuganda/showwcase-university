import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";

import { Education } from "src/services/education";
// import dummy from "./dummy.json";

function useDashboardFunction() {
  const [name, setName] = useState("");
  const [data, setData] = useState<Education[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookies = getCookie("name")?.toString();
    setName(cookies || "");

    const defaultData = localStorage.getItem("educations");
    setData(defaultData ? JSON.parse(defaultData) : []);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const updateStorage = (rows: Education[]) => {
    localStorage.setItem("educations", JSON.stringify(rows));
  };

  const handleCreate = (education: Education) => {
    const rows = [...data];
    rows.unshift(education);
    setData(rows);
    updateStorage(rows);
  };

  const handleSaved = (education: Education) => {
    setShowForm(false);
    handleCreate(education);
  };

  return {
    loading,
    name,
    formModal: { showForm, setShowForm },
    data,
    handleCreate,
    handleSaved,
  };
}

export default useDashboardFunction;
