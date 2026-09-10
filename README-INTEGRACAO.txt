HCB VISITANTES - Captive Web Portal
===================================

Esta pasta contém a PRIMEIRA VERSÃO VISUAL do portal HCB.

IMPORTANTE:
O index.html incluído é uma prévia de design e NÃO deve ser enviado para produção no ExtremeCloud IQ ainda.

O ExtremeCloud IQ usa campos/ações próprios no template de Self-Registration. Para a versão funcional, deve-se baixar no XIQ o template "UPA-Example" (ou o template correspondente ao CWP atual), preservar a estrutura de integração e aplicar este design sobre ele.

Arquivos:
- index.html       página de cadastro (prévia)
- success.html     sucesso
- failure.html     falha (opcional; versões atuais do XIQ podem exibir erros no login)
- terms.html       termos-base
- privacy.html     privacidade-base
- css/style.css    identidade visual
- js/portal.js     comportamento da prévia

Próximo passo:
1. No ExtremeCloud IQ, baixar o UPA-Example/template oficial.
2. Enviar o index.html original/template para análise.
3. Mapear os campos de Self-Registration (name, email, telefone etc.) sem quebrar a action/method e os nomes esperados pelo XIQ.
4. Validar os textos de LGPD com o responsável institucional/Jurídico/Privacidade do HCB.
5. Testar primeiro em SSID/VLAN de homologação.
