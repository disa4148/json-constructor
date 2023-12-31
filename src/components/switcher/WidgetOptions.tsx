import React, { useState, useEffect } from "react";
import JsonDisplay from "../JsonDisplay";

import IWidgetOptionProps from "@/interfaces/IWidgetOptionProps";

const WidgetOptions: React.FC<IWidgetOptionProps> = ({
  data: { displayedName, widget, id, x, y, width, height },
}) => {
  const getInputType = (value: any) =>
    typeof value === "number" ? "number" : "text";

  const [inputValues, setInputValues] = useState({});
  const [localInputValues, setLocalInputValues] = useState({});

  useEffect(() => {
    // Начальные значения должны включать widget целиком
    const initialValues = {
      id,
      x,
      y,
      width,
      height,
      widget
    };
    setInputValues(initialValues);
    setLocalInputValues(initialValues);
  }, [widget, id, x, y, width, height]);

  const handleInputChange = (path: string, value: any) => {
    setLocalInputValues((prev: Record<string, any>) => {
      const newValues: Record<string, any> = { ...prev };
      let current: Record<string, any> = newValues;
      const keys = path.split('.');
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]] as Record<string, any>;
      }
      current[keys[keys.length - 1]] = value;
  
      setInputValues(newValues);
      return newValues;
    });
  };
  

  const renderFields = (data: any, parentPath = "") => {
    return Object.entries(data).map(([key, value]) => {
      if (key === "displayedName") {
        return null;
      }

      const path = parentPath ? `${parentPath}.${key}` : key;
      if (typeof value === "object" && value !== null) {
        return (
          <div key={path}>
            <fieldset>
              <legend>{key}</legend>
              {renderFields(value, path)}
            </fieldset>
          </div>
        );
      } else {
        return (
          <div key={path} className="flex items-center gap-2 m-2">
            <label className="w-[120px]">{key}: </label>
            <input
              type={getInputType(value)}
              value={getValueByPath(localInputValues, path) || ''}
              onChange={(e) => handleInputChange(path, e.target.value)}
            />
          </div>
        );
      }
    });
  };

  const getValueByPath = (object: Record<string, any>, path: string): any => {
    const keys = path.split('.');
    let current: any = object;
    for (let key of keys) {
      if (current[key] === undefined) {
        return undefined;
      }
      current = current[key];
    }
    return current;
  };
  

  return (
    <div className="flex flex-row">
      <div>
        <h1 className="font-bold text-xl">{displayedName}</h1>
        <div className="flex flex-col gap-4 max-h-[720px] overflow-y-scroll p-4 m-2 border-2 border-solid border-[#1d4ed8] rounded-xl">
          {renderFields(inputValues)}
        </div>
        <button className="mt-[20px]" onClick={() => console.log(inputValues)}>
          Сохранить
        </button>
      </div>
      <div className="flex flex-col gap-4 max-h-[748px] overflow-y-scroll p-4 m-2 border-2 border-solid border-[#1d4ed8] rounded-xl">
        <JsonDisplay data={inputValues} />
      </div>
    </div>
  );
};

export default WidgetOptions;
