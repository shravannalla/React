import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  onChange: (searchText: string) => void;
}

export default function SearchInput(props: Props) {
  const [searchText, setSearchText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={{ m: 1, minWidth: "400px", maxWidth: "60%" }}
      variant="standard"
    >
      <Input
        value={searchText}
        placeholder="Search by Title or Author"
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        data-testid="searchInput"
      />
    </FormControl>
  );
}
