import React from "react";
import Header from "../components/Header";
import Titles from "../components/Titles";
import Section from "../components/Section";
import CV from "../components/Cv";
const sections = [
    {
        title: "Gestor de Financas pessoais",
        button: "Saiba mais",
        description: "Desenvolvi este projeto para ajudar as pessoas a gerenciar suas finanças pessoais de forma eficiente. Utilizando React, criei uma aplicação web que permite aos usuários acompanhar suas despesas, criar orçamentos e estabelecer metas financeiras. A aplicação é responsiva e fácil de usar, permitindo que os usuários gerenciem suas finanças de forma simples e eficaz.",
        image: require("../assets/print-card-mobile.png")
    },
    {
        title: "Projeto 2",
        button: "Saiba mais",
        description: "Projeto acadêmico desenvolvido para a faculdade, onde o objetivo era criar um front-end de uma startup de finanças utilizando apenas HTML, CSS e JavaScript. Sem o uso de frameworks, foi um desafio criar uma interface atraente e funcional que atendesse às necessidades de um usuário. A escolha da área de finanças permitiu que eu aplicasse meus conhecimentos em criação de layouts e interações para uma aplicação financeira.",
        image: require("../assets/print-card2-desktop.png") ,

    },
    {
        title: "Projeto 3",
        button: "Saiba mais",
        description: "Desenvolvi essa página de captura de leads para uma empresa de um amigo, com o objetivo de aumentar a conversão de visitantes em clientes. Utilizando HTML, CSS e Bootstrap, criei uma página responsiva e atraente que apresenta os benefícios e serviços da empresa de forma clara e concisa. A página foi projetada para ser fácil de usar e otimizada para dispositivos móveis, garantindo que os visitantes possam se inscrever facilmente e receber mais informações sobre a empresa.",
        image: require("../assets/print-card3-tablets.png"),
        className: "imagem-desktop"

    }
];

export default function Homepage() {
    return (
        <div>
            <Header />
            <Titles />
            <section className="contain">
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        title={section.title}
                        button={section.button}
                        description={section.description}
                        image={section.image}
                    />
                ))}
                < CV /> 
            </section>
        </div>
    );
}