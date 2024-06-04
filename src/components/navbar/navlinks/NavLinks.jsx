import NavItem from "./NavItem";

const NavLinks = ({isOpen}) => {

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
        <div className={`${isOpen?"translate-y-[28px]":"-translate-y-[600px] lg:translate-y-0"} flex flex-col lg:flex-row items-center gap-6 py-6 lg:py-0 my-10 lg:my-0 transition duration-500 bg-blue-500`}>
            {
                links.map(link => <NavItem key={link.id} label={link.label} path={link.path}/>)
            }
        </div>
    );
};

export default NavLinks;