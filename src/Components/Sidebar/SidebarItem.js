function SidebarItem(props) {
    return (
        <>
            <span className="pe-2">{props.icon}</span>
            <span className="fs-6 fw-medium">{props.name}</span>
        </>
    )
}

export default SidebarItem;