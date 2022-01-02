import './style.css';
import { ReactComponent as MainImage } from './assets/main.svg';

export const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className=""> Faça seu pedido<br /> que entregamos<br /> pra você! </h1>
                    <h3>Escolha o seu pedido e em poucos minutos <br />
                        levaremos na sua porta.
                    </h3>
                    <a className="home-btn-order" href="orders">
                        FAZER PEDIDO
                    </a>
                </div>
                <div className="home-image">
                    <MainImage />
                </div>
            </div>
        </div>
    )
}