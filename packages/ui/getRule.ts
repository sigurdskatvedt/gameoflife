import { DocumentNode } from "graphql";
import request from "graphql-request";

export async function getRule(ruleId: string, ruleQuery: DocumentNode) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  if (process.env.NEXT_PUBLIC_API_URL) {
    const data = await request(process.env.NEXT_PUBLIC_API_URL, ruleQuery, {
      ruleId: ruleId,
    });
    return data.uniqueRule;
  }
}

export async function getAllRules(ruleQuery: DocumentNode) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  if (process.env.NEXT_PUBLIC_API_URL) {
    const data = await request(process.env.NEXT_PUBLIC_API_URL, ruleQuery);
    return data;
  }
}
