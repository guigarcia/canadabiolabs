'use client';

import { useEffect, useState } from 'react';
import styles from './DisclaimerModal.module.css';
import { translations } from '@/lib/translations';

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);
  const { disclaimer } = translations;

  useEffect(() => {
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsVisible(false);
  };

  const handleDisagree = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{disclaimer.title}</h2>
          <p className={styles.subtitle}>{disclaimer.subtitle}</p>
        </div>

        <div className={styles.content}>
          <h3>{disclaimer.disclaimerTitle}</h3>
          <h3>{disclaimer.termsTitle}</h3>
          
          <p><strong>ACORDO GERAL DE TERMOS E CONDIÇÕES DE USO</strong></p>
          
          <p>Todos os clientes DEVEM ter pelo menos 21 anos de idade para entrar neste site</p>
          
          <p>SE VOCÊ TEM MENOS DE 21 ANOS DE IDADE, É ILEGAL VISITAR, LER OU INTERAGIR COM ESTE SITE OU SEU CONTEÚDO DE QUALQUER MANEIRA. ESTE SITE NEGA ESPECIFICAMENTE O ACESSO A QUALQUER INDIVÍDUO COBERTO PELA LEI DE PRIVACIDADE ONLINE INFANTIL.</p>
          
          <p>Obrigado por visitar a CanadaBioLabs (o Site).</p>
          
          <p>POR FAVOR, LEIA E REVISE O SEGUINTE ACORDO DE TERMOS E CONDIÇÕES DE USO CUIDADOSAMENTE CADA VEZ ANTES DE USAR ESTE SITE.</p>
          
          <p><strong>As informações contidas neste site são fornecidas &quot;como estão&quot; e são apenas para fins de informação geral.</strong></p>
          
          <p>Este site não é uma loja online.</p>
          
          <p>&quot;A CanadaBioLabs não permite visitantes de países que classificam produtos exibidos em nosso site como substâncias controladas ou programadas especiais, incluindo, mas não se limitando aos Estados Unidos, Austrália, Canadá e União Européia; não vende produtos online; não vende ao público; não envia produtos; não está direta ou indiretamente associada a quaisquer sites que possam se envolver na venda de produtos iguais ou similares. O Material Peptídeo do Canadá deve ser usado exclusivamente para fins de pesquisa científica. Os produtos químicos/materiais não estão à venda aqui e destinam-se EXCLUSIVAMENTE para fins educacionais de laboratório e pesquisa.&quot;</p>
          
          <p>O conteúdo é apenas para fins informativos e não se destina a fornecer conselhos específicos para você, e não deve ser considerado como tal.</p>
          
          <p>Os materiais apresentados aqui são estritamente para fins de pesquisa educacional acadêmica e/ou laboratorial. Ao usar este Site, você concorda com este Acordo de Termos e Condições de Uso.</p>
        </div>

        <div className={styles.footer}>
          <p>{disclaimer.agreementText}</p>
          <p>{disclaimer.thankYou}</p>
          
          <div className={styles.actions}>
            <button className={styles.agreeBtn} onClick={handleAgree}>
              {disclaimer.agree}
            </button>
            <a href="https://www.google.com" className={styles.disagreeBtn}>
              {disclaimer.disagree}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

