import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";
import moment from "moment";

import Button from "src/components/Button";
import Modal from "src/components/Modal";
import Input from "src/components/Input";
import Grid from "src/components/Grid";
import ErrorMessage from "src/components/ErrorMessage";
import { FormControl, FormLabel, FormGroup } from "src/components/Form";
import Select from "src/components/Select";

import { Education } from "src/services/education";

import { FormWrapper, InputWrapper, FormAction } from "./EductionFormStyles";
import useEductionFormFunction from "./EductionFormFunction";

interface EductionFormProps {
  showForm: boolean;
  defaultValue: Education;
  onClose: () => void;
  onSaved: (education: Education, editId: string) => void;
}

function EductionForm({
  showForm,
  defaultValue,
  onClose,
  onSaved,
}: EductionFormProps) {
  const { t } = useTranslation();
  const {
    form: {
      register,
      formState: { errors },
      control,
      setValue,
    },
    onSubmit,
    onSearchUniversity,
    universities,
    months,
    years,
    degrees,
    universityQuery,
  } = useEductionFormFunction({
    onSaved,
    editId: defaultValue.id,
  });

  useEffect(() => {
    if (showForm) {
      setValue("major", defaultValue.major);
      setValue(
        "university",
        defaultValue.university
          ? {
              value: defaultValue.university.id,
              label: defaultValue.university.name,
            }
          : undefined
      );
      setValue(
        "degree",
        defaultValue.degree
          ? {
              value: defaultValue.degree.id,
              label: defaultValue.degree.name,
            }
          : undefined
      );
      setValue("grade", defaultValue.grade);
      setValue(
        "start_month",
        defaultValue.degree
          ? {
              value: defaultValue.start_month,
              label: moment(defaultValue.start_month, "M").format("MMMM"),
            }
          : undefined
      );
      setValue(
        "start_year",
        defaultValue.degree
          ? {
              value: defaultValue.start_year,
              label: defaultValue.start_year,
            }
          : undefined
      );
      setValue(
        "end_month",
        defaultValue.degree
          ? {
              value: defaultValue.end_month,
              label: moment(defaultValue.end_month, "M").format("MMMM"),
            }
          : undefined
      );
      setValue(
        "end_year",
        defaultValue.degree
          ? {
              value: defaultValue.end_year,
              label: defaultValue.end_year,
            }
          : undefined
      );
      setValue("description", defaultValue.description);
    }
  }, [defaultValue, showForm]);

  return (
    <Modal
      modalIsOpen={showForm}
      closeModal={onClose}
      shouldCloseOnOverlayClick={false}
      title={
        defaultValue.id
          ? t("Edit {{title}}", { title: t("Eduction") })
          : t("Add {{title}}", { title: t("Eduction") })
      }
    >
      <FormWrapper onSubmit={onSubmit}>
        <InputWrapper>
          <FormGroup>
            <FormLabel>{t("Field of study")}</FormLabel>
            <FormControl>
              <Input
                size="lg"
                variant={errors.major ? "danger" : "light"}
                {...register("major")}
              />
              <ErrorMessage id="major_error" name="major" errors={errors} />
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>{t("School Name")}</FormLabel>
            <FormControl>
              <Controller
                name="university"
                control={control}
                render={({ field }) => (
                  <Select
                    id={field.name}
                    size="lg"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    options={universities}
                    onSearch={onSearchUniversity}
                    loading={universityQuery.isLoading}
                    searchable
                    controlled
                  />
                )}
              />
              <ErrorMessage
                id="university_error"
                name="university.value"
                errors={errors}
              />
            </FormControl>
          </FormGroup>
          <Grid repeat={2}>
            <FormGroup>
              <FormLabel>{t("Degree")}</FormLabel>
              <FormControl>
                <Controller
                  name="degree"
                  control={control}
                  defaultValue={degrees[0]}
                  render={({ field }) => (
                    <Select
                      id={field.name}
                      size="lg"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      options={degrees}
                    />
                  )}
                />
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
                  <Controller
                    name="start_month"
                    control={control}
                    defaultValue={months[0]}
                    render={({ field }) => (
                      <Select
                        id={field.name}
                        size="lg"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={months}
                      />
                    )}
                  />
                  <Controller
                    name="start_year"
                    control={control}
                    defaultValue={years[0]}
                    render={({ field }) => (
                      <Select
                        id={field.name}
                        size="lg"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={years}
                      />
                    )}
                  />
                </Grid>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel>{t("End")}</FormLabel>
              <FormControl>
                <Grid repeat={2}>
                  <Controller
                    name="end_month"
                    control={control}
                    defaultValue={months[0]}
                    render={({ field }) => (
                      <Select
                        id={field.name}
                        size="lg"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={months}
                      />
                    )}
                  />
                  <Controller
                    name="end_year"
                    control={control}
                    defaultValue={years[0]}
                    render={({ field }) => (
                      <Select
                        id={field.name}
                        size="lg"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={years}
                      />
                    )}
                  />
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
