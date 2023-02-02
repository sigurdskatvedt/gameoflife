import { DocumentNode } from "graphql";
import request from "graphql-request";

export async function getRule(ruleId: string, ruleQuery: DocumentNode) {
  const data = await request("http://localhost:3000/api", ruleQuery, {
    ruleId: ruleId,
  });
  return data.uniqueRule;
}

export async function getAllRules(ruleQuery: DocumentNode) {
  const data = await request("http://localhost:3000/api", ruleQuery);
  return data;
}
