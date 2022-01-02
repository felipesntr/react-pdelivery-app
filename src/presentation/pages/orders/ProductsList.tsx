import { Product, ProductCard } from './ProductCard';
import './styles.css';
export const ProductsList = () => {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {(() => {
                    const renders: any[] = [];
                    const products: Array<Product> = [
                        {
                            name: 'Pizza de Calabresa',
                            price: 'R$ 20,00',
                            image: 'https://picsum.photos/200/200',
                            description: 'Pizza de calabresa com molho de tomate, presunto e mussarela.'
                        },
                        {
                            name: 'Pizza de Mussarela',
                            price: 'R$ 20,00',
                            image: 'https://picsum.photos/200/200',
                            description: 'Pizza de calabresa com molho de tomate, presunto e mussarela.'
                        },
                        {
                            name: 'Pizza de Mussarela',
                            price: 'R$ 20,00',
                            image: 'https://picsum.photos/200/200',
                            description: 'Pizza de calabresa com molho de tomate, presunto e mussarela.'
                        },]

                    products.map(product =>
                        renders.push(<ProductCard
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                        />)
                    )

                    return renders;
                })()}
            </div>
        </div>
    )
}