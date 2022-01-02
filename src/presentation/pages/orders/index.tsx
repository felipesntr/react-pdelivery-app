import './styles.css';
import { StepsHeader } from "./StepsHeader"
import { ProductsList } from './ProductsList';

export const Orders = () => {
    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList />
        </div>
    )
}
