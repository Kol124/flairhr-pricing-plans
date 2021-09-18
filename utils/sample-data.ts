import { Pricing } from "../interfaces";

/** DATA **/
export const pricingData: Pricing[] = [
  {
    id: 1,
    name: "Essential",
    amount: "8€",
    features: ["core HR", "payroll", "recruiting", "employee HUB"],
    featuresPlus: [],
    featuresPlusPlus: [],
  },
  {
    id: 2,
    name: "Growth",
    amount: "14€",
    features: ["core HR", "payroll", "recruiting", "employee HUB"],
    featuresPlus: ["performance management", "shift planning"],
    featuresPlusPlus: [],
  },
  {
    id: 3,
    name: "Performance",
    amount: "20€",
    features: ["core HR", "payroll", "recruiting", "employee HUB"],
    featuresPlus: ["performance management", "shift planning"],
    featuresPlusPlus: ["Integrations", "Compensation Management"],
  },
];
