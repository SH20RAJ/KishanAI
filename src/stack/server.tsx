import "server-only";

import { StackServerApp } from "@stackframe/stack";
import { stackClientApp } from "./client";

export const stackServerApp = new StackServerApp({
  inheritsFrom: stackClientApp,
  secretServerKey: process.env.STACK_SECRET_SERVER_KEY!,
});
