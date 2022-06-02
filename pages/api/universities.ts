// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import qs from "query-string";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(
      `http://universities.hipolabs.com/search?${qs.stringify(req.query || {})}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    res.status(200).json(await response.json());
  } catch (error) {
    res.status(400);
  }
}
