import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchFormProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchForm: FC<ISearchFormProps> = ({  setQuery }) => (
  <form action='/search' className='search-form'>
    <div className='form-field with-icon'>
      <input
        type='text'
        name='query'
        placeholder='Search'
        
      />
      <SearchIcon />
    </div>
  </form>
);

export default SearchForm;
