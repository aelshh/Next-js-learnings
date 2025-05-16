import axios from "axios";

export default async function blogs({
  params,
}: {
  params: Promise<{
    blogId: string;
    rest: string;
  }>;
}) {
  const blogId = (await params).blogId;
  const rest = (await params).rest;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${blogId}`
  );

  const data = response.data;
  return (
    <div>
      This is blog page Title- {data.title} <br />
      Rest routes- {JSON.stringify(rest)}
    </div>
  );
}
