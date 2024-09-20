

export default async function ListProducts(){

    //api call
    await new Promise(resolve => {setTimeout(resolve, 5000)});
    const response = await fetch("http://localhost:9000/products");
    const products = await response.json();

    return (
        <div>
            <h4>List Products</h4>
            <div>
                {products.map((item:{id: number, name: string}) => {

                    return (
                        <p key={item.id}>{item.name}</p>
                    )
                })}
            </div>
        </div>
    )
}