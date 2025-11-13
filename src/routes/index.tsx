import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import Card from "~/components/Card";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <HttpStatusCode code={200} />
      <Card />
    </main>
  );
}
