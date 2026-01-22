#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para traduzir o disclaimer específico que aparece no footer de algumas páginas
"""

from pathlib import Path

# Textos grandes de disclaimer
old_text = """    All produtos listed through CanadaBioLabs are intended for research purposes
    only, The information contained in this website is provided "as is" and is
    for general information purposes only and is not intended for use in food
    produtos or as any type of drug and not intended to treat, prevent, mitigate
    or cure any disease or medical condition and are for research purposes only.
    This statement has not been evaluated by the FDA. This product is not
    intended to diagnose, treat, cure, or prevent any disease. These product are
    NOT for use as food additives, drugs, cosmetic, household chemicals, or
    other inappropriate applications."""

new_text = """    Todos os produtos listados através do CanadaBioLabs são destinados apenas para fins de pesquisa. As informações contidas neste site são fornecidas "como estão" e são
    apenas para fins informativos gerais e não se destinam ao uso em produtos
    alimentícios ou como qualquer tipo de medicamento e não se destinam a tratar, prevenir, mitigar
    ou curar qualquer doença ou condição médica e são apenas para fins de pesquisa.
    Esta declaração não foi avaliada pela FDA. Este produto não se destina
    a diagnosticar, tratar, curar ou prevenir qualquer doença. Estes produtos
    NÃO são para uso como aditivos alimentares, medicamentos, cosméticos, produtos químicos domésticos ou
    outras aplicações inadequadas."""

def translate_file(filepath):
    """Aplica traducao em um arquivo HTML"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_text in content:
            content = content.replace(old_text, new_text)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[OK] {filepath}: traducao aplicada")
            return 1
        else:
            return 0
            
    except Exception as e:
        print(f"[ERRO] em {filepath}: {e}")
        return 0

def main():
    """Processa todos os arquivos HTML"""
    total_files = 0
    total_changes = 0
    
    for html_file in Path('.').rglob('*.html'):
        if 'node_modules' not in str(html_file):
            total_files += 1
            changes = translate_file(html_file)
            total_changes += changes
    
    print(f"\n{'='*60}")
    print(f"Processamento concluido!")
    print(f"Arquivos processados: {total_files}")
    print(f"Total de traducoes aplicadas: {total_changes}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
