import NavbarItems from "./NavbarItems";

const Navbar = () => {
    return ( 
        <div className="flex justify-center items-center space-x-5 dark:bg-gray-600 bg-amber-100 lg:text-lg">
            <NavbarItems title="Trending" params="fetchTrending"/>
            <NavbarItems title="TopRated" params="fetchTopRated"/>
        </div>
     );
}
 
export default Navbar;