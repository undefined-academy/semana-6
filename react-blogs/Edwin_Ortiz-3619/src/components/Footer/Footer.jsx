import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
            <div className="item_contact logo">
                <img src="/images/logos/logoedwin.png" alt="logo del autor" className="logo"/>
            </div>
            <div className="item_contact">
              <h3 className="socialmedia_legend">Contactanos</h3>
                <div className="socialmedia_legend">
                    <i className='socialmedia_icon bx bxs-phone-call' >: +57 3135187105</i>
                </div>
                <div className="socialmedia_legend">
                    <i className='socialmedia_icon bx bx-envelope' >: edwin.ortiz805@gmail.com</i>
                </div>
                <div className="socialmedia_legend">
                    <i className='socialmedia_icon bx bxs-city ' >: Sata Ana - Magdalena</i>
                </div>
                <div className="socialmedia_legend">
                    <i className='socialmedia_icon bx bxs-edit-location ' >: Calle 10a Carrera 9-55</i>
                </div>  
            </div>
            <div className="item_contact get-email">
            <h3 className="socialmedia_legend">¿Estás listo para aprender con nosotros?</h3>
                <div className="newsletter newsletter--modifier">
                    <input type="text" className="newsletter_input" placeholder="Ingresa tu email"/>
                    <input type="submit" className="newsletter_submit bold" value="Comienza hoy"/>
                </div>                
            </div>
            <div className="item_contact item_contact-gold">
                    <p className="socialmedia_legend bold">Siguenos en:</p><br />
                    <div className="socialmedia_legend">
                      <i className='socialmedia_icon bx bxl-linkedin-square bold'> EdwinOrtizCantillo</i>
                    </div>
                    <div className="socialmedia_legend">
                      <i className='socialmedia_icon bx bxl-twitter bold' > EdwinOrtizC</i>
                    </div>
                    <div className="socialmedia_legend"> 
                      <i className='socialmedia_icon bx bxl-github bold' > EdwinOrtizCantillo</i>
                    </div>                
            </div>
        </div>
    </footer>
  );
};
export default Footer;
