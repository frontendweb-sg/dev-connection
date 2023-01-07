import Box from "./Box";
import Input from "./Input";

/**
 * Autocomplete component
 * 1. select
 * 2. search
 * 3. group
 * 4. async call
 * 6. props
 * @returns
 */
type AutocompleteProps<T> = {
  options: T[];
  placeholder: string;
  isGroup?: boolean;
  isMulti?: boolean;
  isSearch?: boolean;
};
const Autocomplete = <T extends unknown>(props: AutocompleteProps<T>) => {
  const { options, placeholder, ...rest } = props;

  return (
    <Box>
      <AutocompleteInput />
      <AutocompleteBody />
    </Box>
  );
};

type AutocompleteInput = {};
const AutocompleteInput = () => {
  return (
    <Box>
      <Input />
    </Box>
  );
};
const AutocompleteBody = () => {
  return <Box></Box>;
};
