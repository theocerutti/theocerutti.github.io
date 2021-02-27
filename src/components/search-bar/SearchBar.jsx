import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Field from "react-bulma-components/lib/components/form/components/field";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import { search } from "../../slices/searchDataSlice";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const targetValue = e.target.value;
    setValue(targetValue);
    dispatch(search(targetValue));
  };

  return (
    <Field className={ props.className }>
      <Control>
        <Input value={ value } placeholder="Search my project" onChange={ e => onChange(e) }/>
      </Control>
    </Field>
  );
};

export default SearchBar;