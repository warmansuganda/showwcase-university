import { useState } from "react";
import { useTranslation } from "react-i18next";

import PanelLayout from "src/layouts/PanelLayout";
import Button from "src/components/Button";
import Empty from "src/components/Empty";
import Text from "src/components/Text";
import Flex from "src/components/Flex";

import EductionForm from "src/containers/Dashboard/EductionForm";
import EducationPanel from "src/containers/Dashboard/EducationPanel";

import { ButtonAddWrapper, EmptyState } from "./DashboardStyles";
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
        {data.length ? (
          <EducationPanel
            data={data}
            onEdit={() => null}
            onDelete={() => null}
          />
        ) : (
          <Flex justifyContent="center" alignItems="center">
            <Empty>
              <EmptyState>
                <Text.H3>{t("No Data Found")}</Text.H3>
                <Text>
                  {t("Not sure where to start?")}{" "}
                  <Text
                    variant="primary"
                    pointer
                    onClick={() => setShowForm(true)}
                  >
                    Create new education
                  </Text>
                </Text>
              </EmptyState>
            </Empty>
          </Flex>
        )}
      </PanelLayout>
      <EductionForm showForm={showForm} setShowForm={setShowForm} />
    </>
  );
}

export default Dashboard;
