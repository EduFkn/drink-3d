const About = () => {
    return (

        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Melhores Coqueteis</p>
                        <h2>Veja mais detalhes sobre
                            <span className="text-white">- </span>
                            Do preparo á finalização
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Mais do que some3nte coqueteis, oferecemos diversão, sabor e alegria, uma experiência única
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span> /5
                            </p>
                            <p className="text-sm text-white-100">
                                Avaliado por mais de 10.000 clientes satisfeitos
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div />
                    <img src="/images/abt1.png" alt="grid-img-1" />

                </div>
                <div className="md:col-span-6">
                    <div />
                    <img src="/images/abt2.png" alt="grid-img-2" />

                </div>
                <div className="md:col-span-3">
                    <div />
                    <img src="/images/abt5.png" alt="grid-img-5" />

                </div>
            </div>
            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div />
                    <img src="/images/abt3.png" alt="grid-img-3" />

                </div>
                <div className="md:col-span-4">
                    <div />
                    <img src="/images/abt4.png" alt="grid-img-4" />

                </div>
            </div>
        </div>
    );
}

export default About;