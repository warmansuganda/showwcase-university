import { useTranslation } from "react-i18next";

import PanelLayout from "src/layouts/PanelLayout";
import Button from "src/components/Button";
import Empty from "src/components/Empty";
import Text from "src/components/Text";
import Flex from "src/components/Flex";
import Loading from "src/components/Loading";

import EductionForm from "src/containers/Dashboard/EductionForm";
import EducationPanel from "src/containers/Dashboard/EducationPanel";

import { ButtonAddWrapper, EmptyState } from "./DashboardStyles";
import useDashboardFunction from "./DashboardFunction";

function Dashboard() {
  const { t } = useTranslation();

  const {
    loading,
    name,
    data,
    formModal,
    dataEdit,
    handleSaved,
    handleDelete,
    handleAdd,
    handleEdit,
    handleCloseForm,
  } = useDashboardFunction();

  const renderPanel = () =>
    data.length ? (
      <EducationPanel data={data} onEdit={handleEdit} onDelete={handleDelete} />
    ) : (
      <Flex justifyContent="center" alignItems="center">
        <Empty>
          <EmptyState>
            <Text.H3>{t("No Data Found")}</Text.H3>
            <Text>
              {t("Not sure where to start?")}{" "}
              <Text variant="primary" pointer onClick={handleAdd}>
                Create new education
              </Text>
            </Text>
          </EmptyState>
        </Empty>
      </Flex>
    );

  return (
    <>
      <PanelLayout
        title={t("Welcome to {{name}}'s educational page.", {
          name,
        })}
        rightAccessory={
          <ButtonAddWrapper>
            <Button variant="primary" onClick={handleAdd}>
              {t("Add new education")}
            </Button>
          </ButtonAddWrapper>
        }
      >
        {loading ? <Loading /> : renderPanel()}
      </PanelLayout>
      <EductionForm
        showForm={formModal.showForm}
        defaultValue={dataEdit}
        onClose={handleCloseForm}
        onSaved={handleSaved}
      />
    </>
  );
}

export default Dashboard;
