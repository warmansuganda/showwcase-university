import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

interface EductionFormInput {
  school_name: string;
  major: string;
  grade: number;
  description: string;
  degree: string;
}

function useEductionFormFunction() {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    major: yup
      .string()
      .required(t("validation:required", { field: t("Field of study") })),
    school_name: yup
      .string()
      .required(t("validation:required", { field: t("School name") })),
  });

  const form = useForm<EductionFormInput>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (params: EductionFormInput) => {
    console.log(params);
  };

  const onSubmit = form.handleSubmit(handleSubmit);

  return { form, onSubmit };
}

export default useEductionFormFunction;
