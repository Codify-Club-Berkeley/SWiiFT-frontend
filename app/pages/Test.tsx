import React from "react";
import { View } from "react-native";

import DropdownSelect from "../components/entry-fields/DropdownSelect";

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Meta", value: "Meta" },
  { label: "Google", value: "Google" },
  { label: "Intuit", value: "Intuit" },
];

export default function Test() {
  return (
    <View style={{ flex: 1 }}>
      <DropdownSelect
        options={options}
        searchPlaceholder={"placeholder"}
      ></DropdownSelect>
    </View>
  );
}
