import React, {useEffect, useState} from 'react';
import {OutlinedInput, 
  InputLabel, 
  MenuItem, 
  FormControl, 
  ListItemText,
  Select,
  Checkbox,
} from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400,
    },
  },
};

export function SelectMultiple({ filterType, filterOptions, filters, setFilters }) {
  const [checked, setChecked] = useState([])

  useEffect(() => {
    setFilters(checked);
  }, [checked, setFilters]);

  const handleChange = (event) => {
    const value = event.target.value;
    setChecked(value);
  };

  return (
    <div style={{ margin: '20px 20px 20px 0' }}>
      <FormControl fullWidth>
        <InputLabel style={{ paddingLeft: 10 }}>{filterType}</InputLabel>
        <Select
          multiple
          value={checked}
          onChange={handleChange}
          input={<OutlinedInput label={filterType} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {filterOptions.map((type) => (
            <MenuItem key={type} value={type}>
              <Checkbox checked={checked.indexOf(type) > -1} />
              <ListItemText primary={type} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}