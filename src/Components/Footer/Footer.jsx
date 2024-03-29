import './Footer.scss';

const Footer=()=>{
    const yearInfo=new Date().getFullYear();
    return(
        <footer className="Footer">
        <section className="main__Footer">
           <div className="column1__Footer">
            <div className="contacts__column1__Footer">
            <h4>Контактні дані</h4>
            <p className='p__contacts'>м.Самбір, Львівська область, вул. Б. Хмельницького 10</p>
            <a className='p__contacts' href="tel:+380681246846">+38 068 124 68 46</a>
            </div>
            <div className="work__column1__Footer">
            <h4>Робочі години:</h4>
            <p className='p__work'>11:00 - 22:00</p>
            </div>
           </div>
           <div className="column2__Footer">
            <h4>Ми в соцмережах</h4>
            <div className="instagram__column2__Footer">
            <div className="img__instagram__column2__Footer"></div>
            <a href="https://www.instagram.com/podyh.restaurant/">Instagram</a>
            </div>
           </div>
           <div className="column3__Footer">
            <h4>На карті:</h4>
            <iframe title="Our placement" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.5753608306975!2d23.19751326960287!3d49.51658449821433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ba5c066b0797f%3A0x960347f27ec6fa6f!2z0J_QvtC00LjRhV_QoNC10YHRgtC-0YDQsNC9!5e0!3m2!1suk!2sua!4v1711639316490!5m2!1suk!2sua"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           <a href="https://maps.app.goo.gl/V9UBJrYiRiSafMz58"><span className='img__route'></span>Отримати розташування </a>
           </div>
           </section>
           <section className='additional__Footer'> 
           <p className='rights__additional__Footer'>© <span>{yearInfo}</span> Подих</p>
           <p className='creator__additional__Footer'>Created by <a href="https://github.com/okqsna">Oksana Moskviak</a></p>
           </section>
        </footer>
    )
}
export default Footer;