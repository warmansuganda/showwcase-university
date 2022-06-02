import React from "react";
import { useTranslation } from "react-i18next";

import Button from "src/components/Button";
import Modal from "src/components/Modal";
import Input from "src/components/Input";
import Grid from "src/components/Grid";
import { FormControl, FormLabel, FormGroup } from "src/components/Form";

import { FormWrapper, InputWrapper, FormAction } from "./EductionFormStyles";

interface EductionFormProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

function EductionForm({ showForm, setShowForm }: EductionFormProps) {
  const { t } = useTranslation();

  return (
    <Modal
      modalIsOpen={showForm}
      closeModal={() => setShowForm(false)}
      shouldCloseOnOverlayClick={false}
      title={t("Add Eduction")}
    >
      <FormWrapper>
        <InputWrapper>
          <FormGroup>
            <FormLabel>{t("Field of study")}</FormLabel>
            <FormControl>
              <Input name="schol_name" size="lg" variant="light" />
            </FormControl>
          </FormGroup>
          <Grid repeat={2}>
            <FormGroup>
              <FormLabel>{t("Degree")}</FormLabel>
              <FormControl>
                <Input name="schol_name" size="lg" variant="light" />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("Grade")}</FormLabel>
              <FormControl>
                <Input name="schol_name" size="lg" variant="light" />
              </FormControl>
            </FormGroup>
          </Grid>
          <FormGroup>
            <FormLabel>{t("School Name")}</FormLabel>
            <FormControl>
              <Input name="schol_name" size="lg" variant="light" />
            </FormControl>
          </FormGroup>
          <Grid repeat={2}>
            <FormGroup>
              <FormLabel>{t("Start")}</FormLabel>
              <FormControl>
                <Grid repeat={2}>
                  <Input name="schol_name" size="lg" variant="light" />
                  <Input name="schol_name" size="lg" variant="light" />
                </Grid>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("End")}</FormLabel>
              <FormControl>
                <Grid repeat={2}>
                  <Input name="schol_name" size="lg" variant="light" />
                  <Input name="schol_name" size="lg" variant="light" />
                </Grid>
              </FormControl>
            </FormGroup>
          </Grid>
          <FormGroup>
            <FormLabel>{t("Description")}</FormLabel>
            <FormControl>
              <Input
                type="textarea"
                name="schol_name"
                size="lg"
                variant="light"
              />
            </FormControl>
          </FormGroup>
        </InputWrapper>
        <FormAction>
          <div />
          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowForm(false)}
          >
            {t("Save")}
          </Button>
        </FormAction>
      </FormWrapper>
    </Modal>
  );
}

export default EductionForm;
