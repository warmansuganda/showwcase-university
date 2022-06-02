import moment from "moment";
import { useTranslation } from "react-i18next";

import Card from "src/components/Card";
import Button from "src/components/Button";
import Navigation from "src/components/Navigation";

import {
  Panel,
  EducationList,
  EducationTitle,
  EducationPeriod,
  EducationDescription,
  EducationAction,
} from "./EducationPanelStyles";

interface EducationPanelProps {
  data: any[];
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
          label: item.school_name,
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
}

export default EducationPanel;
