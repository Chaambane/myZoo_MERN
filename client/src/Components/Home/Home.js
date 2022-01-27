import React from 'react';
import TitleH1 from '../UI/Navbar/TitleH1/TitleH1';
import Banderole from '../../Assets/images/banderole.png'
import Bird from '../../Assets/images/bird.jpg';
import Eccureuil from '../../Assets/images/eccureuil.jpg';

const home = (props) => (
    <>  
        <section className="container text-dark">
            <img src={Banderole} className="img-fluid" alt="banderole" />
            <TitleH1>Bienvenue à My ZOO !!!</TitleH1>
            <article className="row no-gutters p-2">
                <div className="col-12 col-md-6">
                    <img src={Bird} alt="logo" className="img-fluid"/>
                </div>
                <div className="col-12 col-md-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. 
                        Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. 
                        Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. 
                        Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 

                        Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. 
                        Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. 
                        Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. 
                        Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptates voluptatibus incidunt itaque dicta quos est, placeat quis. 
                        Alias iure sunt eaque, voluptates ex voluptate obcaecati aperiam quos, quo, dicta soluta!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        <br />
                        Obcaecati doloremque voluptatum excepturi temporibus. 
                        Eaque rerum nostrum laborum quidem modi quisquam, 
                        iusto fugiat sed necessitatibus! Doloribus obcaecati animi alias explicabo asperiores.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={Eccureuil} alt="logo" className="img-fluid"/>
                </div>
            </article>
        </section>
    </>
);

export default home;