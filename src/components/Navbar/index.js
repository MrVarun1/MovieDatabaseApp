import {useState} from 'react'
import {Link} from 'react-router-dom/cjs/react-router-dom.min'
import Button from '../../styledComponents/Button'

function Navbar() {
  const [searchValue, setSearchValue] = useState()
  return (
    <div>
      <div>
        <h1>movieDB</h1>
      </div>
      <div>
        <input
          type="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.validationMessage)}
          placeholder="Search..."
        />
        <Button type="button">Search Icon</Button>
      </div>
      <div>
        <Button type="button">
          <Link to="/">Popular</Link>
        </Button>
        <Button type="button">
          <Link to="/top-rated">Top Rated</Link>
        </Button>
        <Button type="button">
          <Link to="/upcoming">Upcoming</Link>
        </Button>
      </div>
    </div>
  )
}

export default Navbar
