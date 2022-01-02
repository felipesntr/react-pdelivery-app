import './styles.css';

import { ReactComponent as YoutubeIcon } from './assets/youtube.svg';
import { ReactComponent as InstagramIcon } from './assets/instagram.svg';
import { ReactComponent as LinkedinIcon } from './assets/linkedin.svg';

export const Footer = () => {
    return (
        <footer className="main-footer">
            <p>App desenvolvido durante a segunda edição da Semana Dev Superior.</p>
            <div className="footer-icons">
                <a href="https://youtube.com" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://instagram" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    );
}