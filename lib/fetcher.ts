import { request } from "graphql-request";

const fetcher = (query: any) => request("/api/graphql", query);

export default fetcher;
