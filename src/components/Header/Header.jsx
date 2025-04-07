import "./Header.css"

const Header = ({ searchQuery, setSearchQuery }) => {
    return(
        <div className="header">
            <div className="header-contents">
                <h2>Order Your Favourite Food Here</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolores alias sint consectetur optio vero dignissimos temporibus natus beatae dolorum!</p>
                <div className="search-container">
                    <input 
                        type="text"
                        placeholder="Search for food..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
                <button className="view-menu-btn">View Menu</button>
            </div>
        </div>
    )
}

export default Header;