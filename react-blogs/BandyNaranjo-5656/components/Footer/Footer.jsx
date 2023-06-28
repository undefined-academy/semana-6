import "./Footer.scss"
import Heading from "../Heading/Heading";
import Link from "../Link/Link";
import Image from "../Image/Image";

const Footer = () => {
    return (
        <>
        <footer id="contactMe">
            <div className="main-footer">
                <div className="contactMe">
                    <Heading color='white' size='lg'>Contact me</Heading>
                    <Link size="md" href="mailto:bandy.naranjo@gmail.com">bandy.naranjo@gmail.com</Link>
                </div>
                <div className="social-media">
                    <Link href="https://www.instagram.com/bandynaranjo/" target="_blank"><Image type='icon' src='/images/instagram.png' alt='Logo instagram'></Image></Link>
                    <Link href="https://github.com/lubana2/" target="_blank"><Image type='icon' src='/images/github.png' alt='Logo github'></Image></Link>
                    <Link href="https://www.linkedin.com/in/luz-bandy-naranjo-mart%C3%ADnez-7200b1143/" target="_blank"><Image type='icon' src='/images/linkedin.png' alt='Logo linkedin'></Image></Link>
                    <Link href="https://twitter.com/BandyNaranjo" target="_blank"><Image type='icon' src='/images/twitter.png' alt='Logo twitter'></Image></Link>
                    <Link href="https://www.twitch.tv/bandynaranjo" target="_blank"><Image type='icon' src='/images/twitch.png' alt='Logo twitch'></Image></Link>                    
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;


