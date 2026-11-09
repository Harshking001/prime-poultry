import React from 'react'

const About = () => {
  return (
    <section id="about-us">
        <h2>We deal in;</h2>
        <div id="about">
            <div className="about">
                <h4>Incubation and production of all types of chicks.</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAuEzpgV0DeBLmzXbmyOT1HjIJp2GNH3i50dJVxSpZQ&s=10" alt="image" />
                <div className="fill"></div>
            </div>
            <div className="about">
                <h4>We also deal in apostrophe eggs production and supply.</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCcfm20ykFjSo8Z-pvYrRJ1NNRKTWFRx7u5lNIBgiIw&s=10" alt="image" />
                <div className="fill"></div>
            </div>
            <div className="about">
                <h4>We also deal in incubation services.</h4>
                <img src="/incubator.jpeg" alt="image" />
                <div className="fill"></div>
            </div>
            <div className="about">
                <h4>We also sell incubators</h4>
                <img src="/machine.jpeg" alt="image" />
                <div className="fill"></div>
            </div>
            <div className="about">
                <h4>We also sell gadgets.</h4>
                <div className="item-container">
                    <img src="/item.jpeg" alt="image" />
                    <img src="/item1.jpeg" alt="image" />
                    <img src="/item3.jpeg" alt="image" />
                    <img src="/item2.jpeg" alt="image" />
                </div>
                <div className="fill"></div>
            </div>
            <div className="about">
                <h4>We sell incubators accessories.</h4>
                <div className="item-container">
                    <img src="/item4.jpeg" alt="image" />
                    <img src="/item5.jpeg" alt="image" />
                    <img src="/item6.jpeg" alt="image" />
                </div>
                <div className="fill"></div>
            </div>
            <div className="about">
                <h4>Our chicks are the best and they come at the most affordable prices.</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5f0UasTsWwzun9nQXnNLyTPxOGuC6wDG1ar33fS1eg&s=10" alt="image" />
                <div className="fill"></div>
            </div>
            <div className="about">
                <h4>Customer care and satisfaction is guaranteed.</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LrkLrx6qmhL47MNMuNz_ntdPZy01RkvV5zH99xKiEg&s=10" alt="image" />
                <div className="fill"></div>
            </div>
        </div>
        <div className="available-chicks">
            <div className="about-chick">
                <h2>Chicks <span>Available</span></h2>
                <p className="about">1 day old</p>
                <p className="about">1 week old</p>
                <p className="about">2 week old</p>
                <p className="about">3 week old</p>
                <p className="about">1 month old</p>
                <p className="about">More than a month old also available</p>
                <p>+Delivery on order</p>
                <p>+Customer care and satisfaction is guaranteed</p>
            </div>
            <img src="/chicks.webp" alt="" />
        </div>

        <div className="price-list">
            <img src="/hero.webp" alt="images" />
            <div className="price">
                <h2>Eggs <span>pricing</span></h2>
                <h3>300 eggs</h3>
                <p>customized: ksh21,500/=</p>
                <p>normal: ksh19,500/=</p>
                <h3>200 eggs</h3>
                <p>customized: ksh18,500/=</p>
                <p>normal: ksh16,500/=</p>
                <h3>100 eggs</h3>
                <p>customized: ksh13,500/=</p>
                <p>normal: ksh11,500/=</p>
            </div>
        </div>
    </section>
  )
}

export default About
