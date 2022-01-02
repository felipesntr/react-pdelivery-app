import './styles.css';
export type Product = {
    name: string
    price: string
    image: string
    description: string
}
export const ProductCard = ({ ...props }: Product) => {
    const { name, price, image, description } = props;
    return (
        <div className="order-card-container">
            <div className="order-card-content">
                <h3 className="order-card-title">{name}</h3>
                <div className="order-card-image">
                    <img src={image} alt="pizza" />
                </div>
                <h3 className="order-card-price">{price}</h3>
                <div className="order-card-description">
                    <h3>Descrição</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}