import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

export default function OmniBar() {
  const [searchContent, setSearchContent] = useState('');

  function handleSearchUpdate(event) {
    setSearchContent(event.target.value);
  }

  function handleSearchSubmit(event) {
    if (event.key === 'Enter') {
      console.log(searchContent);
    }
  }

  return (
    <div>
      <TextField
        fullWidth
        label="Search anything"
        helperText="Type something to start"
        variant="outlined"
        onChange={handleSearchUpdate}
        onKeyPress={handleSearchSubmit}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </div>
  );
}
