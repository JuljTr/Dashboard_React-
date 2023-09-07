function SidebarItem(props) {
    console.log(props)
    return (
        <>
            <h3><span>{props.icon}</span> {props.name}</h3>
        </>
    )
}

export default SidebarItem;