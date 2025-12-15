'use client';

import { useState } from 'react';
import styles from './Footer.module.css';
import { translations } from '@/lib/translations';

export default function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { footer } = translations;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.title}>{footer.importantInformation}</p>
            <button 
              className={styles.toggle}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              {footer.showMore}
            </button>
          </div>

          {isExpanded && (
            <div className={styles.expandedContent}>
              <h2>{footer.termsAndConditions}</h2>
              <p><strong>ACORDO GERAL DE TERMOS E CONDIÇÕES DE USO</strong></p>
              <p>Todos os clientes DEVEM ter pelo menos 21 anos de idade para entrar neste site.</p>
              <p>SE VOCÊ TEM MENOS DE 21 ANOS DE IDADE, É ILEGAL VISITAR, LER OU INTERAGIR COM ESTE SITE OU SEU CONTEÚDO DE QUALQUER MANEIRA.</p>
              <p>Obrigado por visitar a CanadaBioLabs (o Site).</p>
              <p>POR FAVOR, LEIA E REVISE O SEGUINTE ACORDO DE TERMOS E CONDIÇÕES DE USO CUIDADOSAMENTE CADA VEZ ANTES DE USAR ESTE SITE.</p>
              <p><strong>As informações contidas neste site são fornecidas &quot;como estão&quot; e são apenas para fins de informação geral.</strong></p>
              <p>Este site não é uma loja online.</p>
              <p>A CanadaBioLabs não permite visitantes de países que classificam produtos exibidos em nosso site como substâncias controladas ou programadas especiais, incluindo, mas não se limitando aos Estados Unidos, Austrália, Canadá e União Européia; não vende produtos online; não vende ao público; não envia produtos.</p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

