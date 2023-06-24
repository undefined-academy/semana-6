function Nav() {

    return (
        <nav>
            <ul class="menu_items">
                <li><a href="#">New Season</a></li>
                <li><a href="#">Classic</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Adult Content</a></li>
                <li><a href="#">Recommended</a></li>
            </ul>
            <span class="btn_menu">
                <i class="fa fa-bars" onClick={() => {
                    console.log("Click")
                    const menu_items = document.querySelector('.menu_items')
                    menu_items.classList.toggle('show')
                }}></i>
            </span>
        </nav>
    )
}
export default Nav;