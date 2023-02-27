import { DocumentNode } from "graphql";
import request from "graphql-request";

export async function getRule(ruleId: string, ruleQuery: DocumentNode) {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    const API_URL: string =
      "https://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/api";
    const data = await request(API_URL, ruleQuery, {
      ruleId: ruleId,
    });
    return data.uniqueRule;
  }
  if (process.env.NEXT_PUBLIC_API_URL) {
    const data = await request(process.env.NEXT_PUBLIC_API_URL, ruleQuery, {
      ruleId: ruleId,
    });
    return data.uniqueRule;
  }
}

export async function getAllRules(ruleQuery: DocumentNode) {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    const API_URL: string =
      "https://" + process.env.NEXT_PUBLIC_VERCEL_URL + "/api";
    const data = await request(API_URL, ruleQuery);
    return data;
  }
  if (process.env.NEXT_PUBLIC_API_URL) {
    const data = await request(process.env.NEXT_PUBLIC_API_URL, ruleQuery);
    return data;
  }
}
