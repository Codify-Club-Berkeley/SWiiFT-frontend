import React, { useState, useCallback, FunctionComponent } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from "react-hook-form";

// options: Array<object> = [
//     { label: "PUCIT", value: "pucit" },
//     { label: "UCP", value: "ucp" },
//     { label: "UET", value: "uet" },
//     { label: "Apple", value: "Apple" },
//     { label: "Meta", value: "Meta" },
//     { label: "Google", value: "Google" },
//     { label: "Intuit", value: "Intuit" },
//   ]

/**https://www.npmjs.com/package/react-native-dropdown-picker */

interface DropDownProps {
  options: { label: string; value: string }[];
  searchPlaceholder: string;
}

const DropdownSelect: FunctionComponent<DropDownProps> = ({
  options = [{ label: "", value: "" }],
  searchPlaceholder = "place",
}) => {
  const [companyOpen, setCompanyOpen] = useState(false); //Is the dropdown open
  const [companyValue, setCompanyValue] = useState(null); //The value assigned from the dropdown

  const onCompanyOpen = useCallback(() => {
    console.log("opened");
  }, []);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };
  return (
    <Controller
      name="company"
      defaultValue=""
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style={styles.dropdownCompany}>
          <DropDownPicker
            style={styles.dropdown}
            //multiple={true}
            open={companyOpen}
            value={companyValue} //companyValue
            items={options}
            setOpen={setCompanyOpen}
            setValue={setCompanyValue}
            //setItems={setCompany}
            placeholder="Select Company"
            placeholderStyle={styles.placeholderStyles}
            activityIndicatorColor="#5188E3"
            searchable={true}
            searchPlaceholder={searchPlaceholder}
            onChangeValue={onChange}
            zIndex={1000}
            zIndexInverse={3000}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});

export default DropdownSelect;
