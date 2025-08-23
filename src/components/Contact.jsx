import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }).to('#f-left-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }, '<')
    })

    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.webp" alt="folha-direita" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.webp" alt="folha-esquerda" id="f-left-leaf" />

            <div className="content">
                <h2>Onde Nos Encontrar</h2>

                <div>
                    <h3>Visite Nosso Bar</h3>
                    <p>Rio de janeiro, Copacabana</p>
                </div>

                <div>
                    <h3>Fale Conosco</h3>
                    <p>(21) 987-65434</p>
                    <p>coqueteis@jsw.com</p>
                </div>

                <div>
                    <h3>Aberto Todos os Dias</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Redes Sociais</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex-center mb-3">
                <p>@ Copyright Eduardo Almeida, Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Contact
