
import search from '../assets/search.png'

function Search({ searchTerm, onSearchChange }) {
   return(
    <form class="col-12 col-lg-auto mt-4 mb-3 mb-lg-0 me-lg" role="search">
        <div className="input-group">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}/>
            <button className="btn btn-primary rounded-end " onClick={() => onSearchChange('')} type="button">
            
            <img src={search} alt="Search" style={{width:'1.5em', filter: 'invert(1)'}}/> {/* Use your icon */}
            </button>
        </div>
    </form>
   ) 
}
export default Search;