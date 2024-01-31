import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import HomePage from "@/frontend/sections/home";

export default withPageAuthRequired(async function Home() {
  return <HomePage />;
});
