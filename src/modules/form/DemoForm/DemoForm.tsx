import { TextInputControl } from "../../input/TextInputControl/TextInputControl";

export function DemoForm() {
  return (
    <>
      <h1>Demo Form</h1>
      <form>
        <TextInputControl id="firstName" label="First Name" />
      </form>
    </>
  );
}
