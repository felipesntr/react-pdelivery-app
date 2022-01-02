import './style.css';
import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from './assets/main.svg';
import { Footer } from '../../components/footer';

export const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className=""> Faça seu pedido<br /> que entregamos<br /> pra você! </h1>
                        <h3>Escolha o seu pedido e em poucos minutos <br />
                            levaremos na sua porta.
                        </h3>
                        <Link className="home-btn-order" to="orders">
                            FAZER PEDIDO
                        </Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
