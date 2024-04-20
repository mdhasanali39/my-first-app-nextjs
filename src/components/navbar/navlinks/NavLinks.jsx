import NavItem from "./NavItem";

const NavLinks = () => {

    const links = [
        {
            id:1,
            label:"Home",
            path:'/'
        },
        {
            id:2,
            label:"allProducts",
            path:'/all-products'
        },
        {
            id:3,
            label:"AboutUs",
            path:'/about-us'
        },
        {
            id:4,
            label:"ContactUs",
            path:'/contact-us'
        },
        {
            id:5,
            label:"Blogs",
            path:'/blogs'
        },
    ]

    return (
        <div className="flex gap-6">
            {
                links.map(link => <NavItem key={link.id} label={link.label} path={link.path}/>)
            }
        </div>
    );
};

export default NavLinks;