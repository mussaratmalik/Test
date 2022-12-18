function SearchPage(){
    return(
        <div className="container-div">
                <div id="input-bar" >
                    <input class="srch-in-div" type="text" placeholder="Search a pet or accessories here"></input>
                    <div class="select-btn">
                        <button id="srch-btn" type="submit"><img className="searchbar-icon" src="search.png" alt="Search Picture"></img></button>
                    </div>
                </div>
        </div>
    );
}
export default SearchPage;