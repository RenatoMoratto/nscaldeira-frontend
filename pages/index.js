import Head from "../src/components/Head";
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Section from "../src/components/Section";
import style from '../styles/Home.module.css';
import { useEffect, useState } from "react";
import HomeButton from "../src/components/HomeButton";
import CardGrid from "../src/components/CardGrid";

export default function Home(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 120) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        return () => { window.onscroll() }
    }, [])

    return (<>
        <Head />
        <Header />
        {scrolled && <HomeButton />}
        <main>
            <div className={style.image} id="home" />
            <Section title="sobre" id="sobre">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus fringilla proin mauris eu auctor faucibus. Sollicitudin malesuada purus ipsum felis aliquam, nulla tincidunt purus. Ante mattis tempus dapibus bibendum quis sit at.</p>
            </Section>

            <Section title="área de atuação" id="area-de-atuacao">
                <CardGrid />
            </Section>

            <Section title="Contato" id="contato">
                <div>

                </div>
                <p>Telefone</p>
                <p>Contato</p>
                <p>Email</p>
            </Section>

            <Section title="Localização" id="localizacao">
                <p>R. Senador Souza Naves, 282</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.875781508695!2d-51.16080838118508!3d-23.313884053882923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb436096d52ea9%3A0x3817c2184091835!2sCondom%C3%ADnio%20Centro%20Empresarial%20Col%C3%BAmbia!5e0!3m2!1spt-BR!2sbr!4v1629345911742!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="200"
                    loading="lazy"
                ></iframe>
            </Section>
        </main>
        <Footer />
    </>)
}