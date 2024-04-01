import { Button, Spinner, TextArea } from "@blueprintjs/core";
import axios from "axios";
import React from "react";
import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import "./Calculator.style.css";
export type Operation = "cosine" | "sine";

export default function Calculator() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [result, setResult] = React.useState<{
    expression: string;
    operation: string;
    result: "string";
  } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
    setResult(null);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/simplify/${value}`);
      setResult(response.data);
    } catch (error) {
      console.log(error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TextArea
        intent="primary"
        fill
        autoResize
        placeholder="Enter an expression..."
        value={value}
        onChange={handleChange}
      />
      <div className="form-action">
        <Button onClick={handleClear}>Clear</Button>
        <Button intent="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {loading ? (
        <Spinner />
      ) : result ? (
        <JsonView
          data={result}
          shouldExpandNode={allExpanded}
          style={defaultStyles}
        />
      ) : null}
    </div>
  );
}
