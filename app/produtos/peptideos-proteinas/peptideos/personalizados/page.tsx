import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Peptídeos Personalizados - CanadaBioLabs Brasil',
  description: 'Serviço de síntese de peptídeos personalizados da CanadaBioLabs.',
};

export default function CustomPeptidesPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <h1>Síntese de Peptídeos Personalizados</h1>
          
          <p className={styles.highlight}>
            <strong>As informações contidas nesta página web são fornecidas &quot;como estão&quot; e são apenas para fins de informação geral. 
            Não fornecemos este serviço regularmente.</strong>
          </p>

          <p>
            A síntese de peptídeos personalizados e bibliotecas de peptídeos da CanadaBioLabs são oferecidas de 2 a 120 aminoácidos 
            para incluir modificações de estruturas de peptídeos padrão, incluindo fosforilação, metilação, marcação com tags ou 
            corantes, ciclização, conjugação com PEG e incorporação de aminoácidos D.
          </p>

          <h2>Níveis de Pureza de Peptídeos Personalizados da CanadaBioLabs</h2>
          <ul>
            <li><strong>Grau Imunológico:</strong> adequado para formar anticorpos policlonais</li>
            <li><strong>80% ou Superior:</strong> cultura de tecidos; ligante para purificação por afinidade; experimentos de bloqueio de anticorpos não quantitativos</li>
            <li><strong>90% ou Superior:</strong> estudos in vivo; bioensaios; marcadores para eletroforese; anticorpos monoclonais</li>
            <li><strong>95% ou Superior:</strong> ELISA; RIA; substrato enzimático</li>
            <li><strong>98%:</strong> NMR; padrões cromatográficos</li>
          </ul>

          <h2>Serviços de Síntese de Peptídeos</h2>
          <p>
            Os serviços de síntese de peptídeos que a CanadaBioLabs fornece incluem incorporação de aminoácidos não padrão, 
            modificações no terminal N, terminal C ou cadeias laterais, e a formação de estruturas cíclicas.
          </p>

          <h3>Modificações de Terminal N</h3>
          <p>
            As modificações de terminal N são feitas para vários propósitos. Algumas modificações melhoram a estabilidade do 
            peptídeo para enzimas proteolíticas ou melhoram a absorção e biodisponibilidade do peptídeo.
          </p>

          <h3>Modificações de Terminal C</h3>
          <p>
            As modificações de terminal C, exceto para amidação, são menos comuns. Elas são incorporadas através da utilização 
            de resinas especiais ou reações de fase de solução após clivagem da resina.
          </p>

          <h3>Modificações Internas</h3>
          <p>
            As modificações internas são incorporadas em peptídeos sintéticos usando aminoácidos incomuns ou especialmente derivatizados. 
            Algumas modificações internas, como aminoácidos D, beta-aminoácidos e aminoácidos N-metil, melhoram a estabilidade do peptídeo para enzimas.
          </p>

          <h3>Ciclização</h3>
          <p>
            A ciclização de peptídeos aumenta a estabilidade conformacional, pode imitar estruturas secundárias de proteínas e 
            aumentar a estabilidade da protease. A ciclização pode ser alcançada de várias maneiras diferentes.
          </p>

          <h2>Serviços Adicionais</h2>
          <p><strong>A CanadaBioLabs pode fornecer os seguintes serviços:</strong></p>
          <ul>
            <li>Análise de Aminoácidos</li>
            <li>Aliquotagem</li>
            <li>Remoção de TFA</li>
          </ul>

          <h2>Produção de Peptídeos Personalizados em Grande Escala</h2>
          <p>
            A CanadaBioLabs pode realizar síntese de peptídeos personalizados em escalas maiores, de gramas a quantidades de 
            multi-quilogramas. A CanadaBioLabs cumpre com as especificações de controle de qualidade mais rigorosas a um preço competitivo.
          </p>

          <h2>Bibliotecas de Peptídeos Personalizados</h2>
          <p>
            As bibliotecas de peptídeos personalizados da CanadaBioLabs são fornecidas em placas de 96 poços com aproximadamente 
            2 μmol de peptídeo liofilizado em cada poço. A CanadaBioLabs pode sintetizar bibliotecas de peptídeos para descoberta 
            de medicamentos, triagem de alto rendimento e estudos SAR.
          </p>
        </div>
      </div>
    </main>
  );
}

