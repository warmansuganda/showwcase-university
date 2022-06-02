export interface Education {
  id: string;
  major: string;
  university: {
    id: string;
    name: string;
  };
  degree: {
    id: string;
    name: string;
  };
  grade: number;
  start_month: number;
  start_year: number;
  end_month: number;
  end_year: number;
  description: string;
}
