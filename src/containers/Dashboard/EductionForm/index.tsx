import React from "react";
import { useTranslation } from "react-i18next";

import Button from "src/components/Button";
import Modal from "src/components/Modal";
import Input from "src/components/Input";
import Grid from "src/components/Grid";
import ErrorMessage from "src/components/ErrorMessage";
import { FormControl, FormLabel, FormGroup } from "src/components/Form";

import { FormWrapper, InputWrapper, FormAction } from "./EductionFormStyles";
import useEductionFormFunction from "./EductionFormFunction";

interface EductionFormProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

function EductionForm({ showForm, setShowForm }: EductionFormProps) {
  const { t } = useTranslation();
  const {
    form: {
      register,
      formState: { errors },
    },
    onSubmit,
  } = useEductionFormFunction();

  return (
    <Modal
      modalIsOpen={showForm}
      closeModal={() => setShowForm(false)}
      shouldCloseOnOverlayClick={false}
      title={t("Add Eduction")}
    >
      <FormWrapper onSubmit={onSubmit}>
        <InputWrapper>
          <FormGroup>
            <FormLabel>{t("Field of study")}</FormLabel>
            <FormControl>
              <Input size="lg" variant="light" {...register("major")} />
              <ErrorMessage id="major_error" name="major" errors={errors} />
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>{t("School Name")}</FormLabel>
            <FormControl>
              <Input size="lg" variant="light" {...register("school_name")} />
              <ErrorMessage
                id="school_name_error"
                name="school_name"
                errors={errors}
              />
            </FormControl>
          </FormGroup>
          <Grid repeat={2}>
            <FormGroup>
              <FormLabel>{t("Degree")}</FormLabel>
              <FormControl>
                <Input size="lg" variant="light" {...register("degree")} />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("Grade")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  size="lg"
                  variant="light"
                  {...register("grade")}
                />
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid repeat={2}>
            <FormGroup>
              <FormLabel>{t("Start")}</FormLabel>
              <FormControl>
                <Grid repeat={2}>
                  <Input name="schol_name_1" size="lg" variant="light" />
                  <Input name="schol_name_1" size="lg" variant="light" />
                </Grid>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("End")}</FormLabel>
              <FormControl>
                <Grid repeat={2}>
                  <Input name="schol_name_1" size="lg" variant="light" />
                  <Input name="schol_name_1" size="lg" variant="light" />
                </Grid>
              </FormControl>
            </FormGroup>
          </Grid>
          <FormGroup>
            <FormLabel>{t("Description")}</FormLabel>
            <FormControl>
              <Input
                type="textarea"
                size="lg"
                variant="light"
                {...register("description")}
              />
            </FormControl>
          </FormGroup>
        </InputWrapper>
        <FormAction>
          <div />
          <Button variant="primary" size="lg" htmlType="submit">
            {t("Save")}
          </Button>
        </FormAction>
      </FormWrapper>
    </Modal>
  );
}

export default EductionForm;
