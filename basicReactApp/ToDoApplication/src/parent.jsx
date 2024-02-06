function ParentComponent({name="Omkar",lastname="Karande",age="30"}) {
    return (
        <div style={{backgroundColor:"grey"}}>
            <h1>{ name}</h1>
            <h2>{ lastname}</h2>
            <h3>{ age}</h3>
        </div>
    )
}

export default ParentComponent