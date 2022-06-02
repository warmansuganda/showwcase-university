import { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

import PanelLayout from "src/layouts/PanelLayout";
import Button from "src/components/Button";
import Modal from "src/components/Modal";
import Flex from "src/components/Flex";
import Card from "src/components/Card";
import Input from "src/components/Input";
import Navigation from "src/components/Navigation";

import {
  ButtonAddWrapper,
  InputSearcWrapper,
  Panel,
  EducationList,
  EducationTitle,
  EducationPeriod,
  EducationDescription,
  EducationAction,
} from "./DashboardStyles";
import useDashboardFunction from "./DashboardFunction";

import dummy from "./dummy.json";

function Dashboard() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [data] = useState(dummy);

  const { name } = useDashboardFunction();

  const renderPanel = () => (
    <Panel>
      <Navigation />
      <EducationList>
        {data?.map((item, key) => (
          <Card
            key={key}
            footer={
              <EducationAction>
                <div />
                <Button variant="light" onClick={() => setShowForm(true)}>
                  {t("Edit")}
                </Button>
                <Button variant="danger" onClick={() => setShowForm(true)}>
                  {t("Delete")}
                </Button>
              </EducationAction>
            }
          >
            <EducationTitle>
              <div>{item.major}</div>
              <div>{item.school_name}</div>
            </EducationTitle>
            <EducationPeriod>
              <div>
                {`${moment(item.start.month, "M").format("MMM")} ${
                  item.start.year
                }`}
              </div>
              <div>
                {`${moment(item.end.month, "M").format("MMM")} ${
                  item.end.year
                }`}
              </div>
            </EducationPeriod>
            <EducationDescription>{item.description}</EducationDescription>
          </Card>
        ))}
      </EducationList>
    </Panel>
  );

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
        {renderPanel()}
        {/* asdf
        <Flex>
          <InputSearcWrapper>
            <Input
              variant="light"
              name="search"
              placeholder={t("Search...")}
              leftAccessory={
                <svg
                  data-testid="geist-icon"
                  fill="none"
                  height="20"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="20"
                  // style="color: currentcolor;"
                >
                  <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
                  <path d="M16 16l4.5 4.5" />
                </svg>
              }
            />
          </InputSearcWrapper>
          <ButtonAddWrapper>
            <Button variant="primary" onClick={() => setShowForm(true)}>
              {t("+ Add new education")}
            </Button>
          </ButtonAddWrapper>
        </Flex> */}
      </PanelLayout>
      <Modal
        modalIsOpen={showForm}
        closeModal={() => setShowForm(false)}
        shouldCloseOnOverlayClick={false}
      >
        ini adalah modal
        <Button variant="primary" onClick={() => setShowForm(false)}>
          {t("Save")}
        </Button>
      </Modal>
    </>
  );
}

export default Dashboard;
