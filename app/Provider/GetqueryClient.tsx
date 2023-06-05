import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const GetqueryClient = cache(() => new QueryClient());

export default GetqueryClient;
