"use client"

import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";

interface FAQItemPros{
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemPros) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`cursor-pointer border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:bg-gray-50 ${isOpen ? 'pb-5 sm:pb-6' : ''}`}>
      <button type="button" className="flex w-full items-center justify-between px-4 py-5 sm:p-6" onClick={toggleOpen}>
        <span className="flex text-lg font-semibold text-black">{question}</span>
        <svg className={`size-6 text-gray-400 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqData = [
  {
    question: "Como faço para obter uma cotação de seguro automotivo?",
    answer: "Para obter uma cotação de seguro automotivo, você pode usar nossa ferramenta online de cotação rápida e fácil. Basta inserir algumas informações sobre o seu veículo e perfil de motorista, e você receberá várias opções de seguro personalizadas.",
  },
  {
    question: "Posso comparar diferentes opções de seguro automotivo?",
    answer: "Sim, nossa ferramenta de cotação permite que você compare facilmente várias opções de seguro de diferentes empresas, ajudando você a encontrar a cobertura que melhor atende às suas necessidades e orçamento.",
  },
  {
    question: "Como posso economizar dinheiro no meu seguro automotivo?",
    answer: "Nossa ferramenta de cotação personalizada leva em conta suas necessidades específicas e oferece as melhores opções de seguro. Além disso, ao comparar várias cotações, você pode encontrar a opção mais econômica para o seu perfil.",
  },
  {
    question: "Quanto tempo leva para obter uma cotação de seguro automotivo?",
    answer: "Nossa ferramenta online de cotação é rápida e eficiente. Em apenas alguns minutos, você pode receber várias cotações personalizadas para comparar e escolher.",
  },
  {
    question: "Minha cotação de seguro automotivo é gratuita?",
    answer: "Sim, a nossa ferramenta de cotação é totalmente gratuita. Você pode obter e comparar cotações de seguro automotivo sem nenhum custo.",
  },
  {
    question: "Posso obter uma cotação sem compromisso?",
    answer: "Claro! Todas as cotações fornecidas por nossa ferramenta são sem compromisso. Você pode comparar as opções sem nenhuma obrigação de compra.",
  },
  {
    question: "Como escolho a melhor cobertura de seguro automotivo para mim?",
    answer: "Nossa ferramenta de cotação fornece informações detalhadas sobre cada opção de seguro, incluindo coberturas e preços. Você pode comparar essas informações para escolher a melhor cobertura para suas necessidades.",
  },
];


const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is in view
    triggerOnce: true, // Only trigger once
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <section className="bg-gray-50 py-10 sm:py-16 lg:py-24" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`${isVisible ? "animate-slide-in-left" : "invisible"} text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl`}
          ref={ref}
          >Perguntas mais frequentes</h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <p className="mt-9 text-center text-base text-gray-600">Não achou resposta para sua pergunta? <a href="#" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Contate nosso suporte</a></p>
      </div>
    </section>
  );
};

export default FAQSection;
