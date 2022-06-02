import qs from "query-string";

interface UniversityParams {
  name: string;
}

export interface University {
  name: string;
}

export async function getUniversities(params: UniversityParams) {
  const response = await fetch(
    `http://universities.hipolabs.com/search?${qs.stringify(params || {})}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
