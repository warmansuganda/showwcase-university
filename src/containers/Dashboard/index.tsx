import { useState } from "react";
import { useTranslation } from "react-i18next";

import PanelLayout from "src/layouts/PanelLayout";
import Button from "src/components/Button";

import EductionForm from "src/containers/Dashboard/EductionForm";
import EducationPanel from "src/containers/Dashboard/EducationPanel";

import { ButtonAddWrapper } from "./DashboardStyles";
import useDashboardFunction from "./DashboardFunction";

function Dashboard() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

  const { name, data } = useDashboardFunction();

  return (
    <>
      <PanelLayout
        title={t("Welcome to {{name}}'s educational page.", {
          name,
        })}
        rightAccessory={
          <ButtonAddWrapper>
            <Button variant="primary" onClick={() => setShowForm(true)}>
              {t("Add new education")}
            </Button>
          </ButtonAddWrapper>
        }
      >
        <EducationPanel data={data} onEdit={() => null} onDelete={() => null} />
      </PanelLayout>
      <EductionForm showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}

export default Dashboard;
