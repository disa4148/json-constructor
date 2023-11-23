import IInputsItems from "../types/IInputsItems";

const JsonDisplay = ({ data }: { data: IInputsItems }) => {
  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export default JsonDisplay;
