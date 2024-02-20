import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search({search}) {

    const [searchQuery, setSerchQuery] = useState()

    const handleSearchInput = (e) => {
        setSerchQuery(e.target.value)
        search(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchQuery} type="text" onChange={handleSearchInput} />
    </>
  );
}

export default Search