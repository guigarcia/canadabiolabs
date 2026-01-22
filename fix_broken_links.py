#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para corrigir links quebrados (sem href= ou src=)
"""

import re
from pathlib import Path

def fix_broken_links(file_path):
    """Corrige links sem href= ou src="""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Corrigir links sem href="
        # Padrão: <a ../../produtos/... → <a href="../../produtos/...
        content = re.sub(r'<a\s+\.\./\.\./produtos/', r'<a href="../../produtos/', content)
        content = re.sub(r'<a\s+\.\./produtos/', r'<a href="../produtos/', content)
        content = re.sub(r'<a\s+produtos/', r'<a href="produtos/', content)
        
        # Corrigir links sem href=" em tags com classes
        content = re.sub(r'<a class="categories__title"\s+\.\./\.\./produtos/', r'<a class="categories__title" href="../../produtos/', content)
        content = re.sub(r'<a class="categories__title"\s+\.\./produtos/', r'<a class="categories__title" href="../produtos/', content)
        
        # Corrigir imagens sem src="
        content = re.sub(r'<img\s+\.\./\.\./images/', r'<img src="../../images/', content)
        content = re.sub(r'<img\s+\.\./images/', r'<img src="../images/', content)
        content = re.sub(r'<img\s+images/', r'<img src="images/', content)
        
        # Corrigir source sem srcset="
        content = re.sub(r'<source srcset="/images/', r'<source srcset="/images/', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Erro: {file_path}: {e}")
        return False

def main():
    base_dir = Path('.')
    html_files = list(base_dir.rglob('*.html'))
    
    print(f"Corrigindo links em {len(html_files)} arquivos...")
    
    fixed = 0
    for html_file in html_files:
        if fix_broken_links(html_file):
            fixed += 1
            if fixed % 50 == 0:
                print(f"Corrigido: {fixed} arquivos...")
    
    print(f"\nTotal corrigido: {fixed}/{len(html_files)}")

if __name__ == '__main__':
    main()
