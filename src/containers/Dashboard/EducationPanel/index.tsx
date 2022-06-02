import moment from "moment";
import { useTranslation } from "react-i18next";

import Card from "src/components/Card";
import Button from "src/components/Button";
import Navigation from "src/components/Navigation";

import { Education } from "src/services/education";

import {
  Panel,
  EducationList,
  EducationTitle,
  EducationPeriod,
  EducationDescription,
  EducationAction,
} from "./EducationPanelStyles";

interface EducationPanelProps {
  data: Education[];
  onEdit: () => void;
  onDelete: () => void;
}

function EducationPanel({ data, onEdit, onDelete }: EducationPanelProps) {
  const { t } = useTranslation();

  return (
    <Panel>
      <Navigation
        title={t("Showwcase")}
        data={data.map((item) => ({
          id: item.id,
          label: item.university.name,
          url: `#edu-${item.id}`,
        }))}
      />
      <EducationList>
        {data?.map((item, key) => (
          <Card
            key={key}
            footer={
              <EducationAction>
                <div />
                <Button variant="light" onClick={() => onEdit()}>
                  {t("Edit")}
                </Button>
                <Button variant="danger" onClick={() => onDelete()}>
                  {t("Delete")}
                </Button>
              </EducationAction>
            }
          >
            <EducationTitle>
              <div>{item.major}</div>
              <div>{item.university.name}</div>
            </EducationTitle>
            <EducationPeriod>
              <div>
                {`${moment(item.start_month, "M").format("MMM")} ${
                  item.start_year
                }`}
              </div>
              <div>
                {`${moment(item.end_month, "M").format("MMM")} ${
                  item.end_year
                }`}
              </div>
            </EducationPeriod>
            <EducationDescription>
              {item.description || "-"}
            </EducationDescription>
          </Card>
        ))}
      </EducationList>
    </Panel>
  );
}

export default EducationPanel;
