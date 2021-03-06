import { NextApiRequest, NextApiResponse } from "next";
import { pricingData } from "../../../utils/sample-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(pricingData)) {
      throw new Error("Cannot find pricing data");
    }

    res.status(200).json(pricingData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
