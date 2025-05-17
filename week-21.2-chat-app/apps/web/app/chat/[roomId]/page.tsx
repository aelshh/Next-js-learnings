import TextInput from "@repo/ui/text-input";

export default function Chat() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>Chat Room</div>
      <TextInput size="big" placeholder="Enter your message"></TextInput>
    </div>
  );
}
