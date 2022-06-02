import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { setCookies } from "cookies-next";

import { DASHBOARD } from "src/constants/paths";

interface FormInput {
  name: string;
}

function useHomeFunction() {
  const { t } = useTranslation();
  const router = useRouter();

  const schema = yup.object().shape({
    name: yup.string().required(t("validation:required", { field: t("Name") })),
  });

  const form = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (params: FormInput) => {
    setCookies("name", params.name);
    localStorage.removeItem("educations");
    router.push(DASHBOARD);
  };

  const onSubmit = form.handleSubmit(handleSubmit);

  return { form, onSubmit };
}

export default useHomeFunction;
