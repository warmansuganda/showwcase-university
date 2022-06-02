import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import _ from "lodash";

import { Education } from "src/services/education";
// import dummy from "./dummy.json";

function useDashboardFunction() {
  const [name, setName] = useState("");
  const [data, setData] = useState<Education[]>([]);
  const [dataEdit, setDataEdit] = useState<Education>({} as Education);
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

  const handleCloseForm = () => {
    setDataEdit({} as Education);
    setShowForm(false);
  };

  const handleCreate = (education: Education) => {
    const rows = [...data];
    rows.unshift(education);
    setData(rows);
    updateStorage(rows);
  };

  const handleUpdate = (education: Education, editId: string) => {
    const index = _.findIndex(data, (item) => item.id === editId);
    const rows = _.update(data, `[${index}]`, () => education);
    setData(rows);
    updateStorage(rows);
  };

  const handleSaved = (education: Education, editId: string) => {
    handleCloseForm();
    if (editId) {
      handleUpdate(education, editId);
    } else {
      handleCreate(education);
    }
  };

  const handleDelete = (education: Education) => {
    const rows = data.filter((item) => item.id !== education.id);
    setData(rows);
    updateStorage(rows);
  };

  const handleEdit = (education: Education) => {
    setDataEdit(education);
    setShowForm(true);
  };

  const handleAdd = () => {
    setDataEdit({} as Education);
    setShowForm(true);
  };

  return {
    loading,
    name,
    formModal: { showForm, setShowForm },
    data,
    dataEdit,
    handleCreate,
    handleSaved,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCloseForm,
  };
}

export default useDashboardFunction;
