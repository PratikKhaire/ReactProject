function HomePage () {
    const names = ['f', 'Jane', 'Doe'];
     
    return (
        <div>
            <Header title=' chance' />
            <ul>
                {names.map((p) => (
                    <li>{p}</li>
                ))}
            </ul>
        </div>
    )
}