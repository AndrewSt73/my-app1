


import classes from'./Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
        <div className={classes.item}><a>Profile</a></div>
        <div className={classes.item}><a>Masseges</a></div>
        <div className={classes.item}><a>News</a></div>
        <div className={classes.item}><a>Feed</a></div>
        <div className={classes.item}><a>something else</a></div>
        
      </nav>
    )

    
}
export default Navbar;