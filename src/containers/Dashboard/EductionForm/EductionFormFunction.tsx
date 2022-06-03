import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useQuery, useQueryClient } from "react-query";

import type { SingleValueOption } from "src/components/Select";

import { getUniversities, University } from "src/services/university";
import { Education } from "src/services/education";

import { generateMonths, generateYears, uuid } from "src/utils/generator";
import slugify from "src/utils/slugify";
import degrees from "src/constants/degrees";

interface EductionFormInput {
  major: string;
  university: SingleValueOption;
  degree: SingleValueOption;
  grade: number;
  start_month: SingleValueOption;
  start_year: SingleValueOption;
  end_month: SingleValueOption;
  end_year: SingleValueOption;
  description: string;
}

interface EductionFormFunctionOptions {
  editId: string;
  onSaved: (education: Education, editId: string) => void;
}

function useEductionFormFunction(options?: EductionFormFunctionOptions) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [searchUniversity, setSearchUniversity] = useState({ name: "middle" });
  const universityQuery = useQuery(["universities", searchUniversity], () =>
    getUniversities(searchUniversity)
  );

  const universities = useMemo(
    () =>
      universityQuery.data?.map((item: University) => ({
        value: slugify(item.name),
        label: item.name,
        origin: item,
      })),
    [universityQuery.data]
  );

  const months = generateMonths();
  const years = generateYears(Number(moment().format("YYYY")), 50, "decrement");

  const schema = yup.object().shape({
    major: yup
      .string()
      .required(t("validation:required", { field: t("Field of study") })),
    university: yup.object().shape({
      value: yup
        .string()
        .required(t("validation:required", { field: t("School name") })),
    }),
  });

  const form = useForm<EductionFormInput>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (params: EductionFormInput) => {
    form.reset();
    if (options?.onSaved) {
      options?.onSaved(
        {
          id: uuid(),
          major: params.major,
          university: {
            id: params.university?.value?.toString() || "",
            name: params.university?.label?.toString() || "",
          },
          degree: {
            id: params.degree?.value?.toString() || "",
            name: params.degree?.label?.toString() || "",
          },
          grade: params.grade,
          start_month: Number(params.start_month?.value),
          start_year: Number(params.start_year?.value),
          end_month: Number(params.end_month?.value),
          end_year: Number(params.end_year?.value),
          description: params.description,
        },
        options.editId
      );
    }
  };

  const onSubmit = form.handleSubmit(handleSubmit);

  const onSearchUniversity = (keyword: string) => {
    const search = { name: keyword || "middle" };
    setSearchUniversity(search);
    queryClient.invalidateQueries(["universities", search]);
  };

  return {
    form,
    onSubmit,
    universities,
    degrees,
    months,
    years,
    onSearchUniversity,
    universityQuery,
  };
}

export default useEductionFormFunction;
