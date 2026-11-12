# Site Kira Padaria Pet: como colocar no ar (GitHub + Cloudflare)

Esta pasta já está pronta para publicar. Ela tem:
- `index.html`: o site
- `assets/`: as 8 imagens das seções
- `_headers`, `robots.txt`, `.gitignore`: configurações (pode deixar como estão)

## Parte 1: GitHub (guardar o site)
1. Entre em https://github.com e faça login (ou crie a conta).
2. Clique em **New repository** (botão verde, canto superior direito).
3. Nome: `kira-padaria-pet`. Marque **Private** (privado) ou Public, como preferir. Clique em **Create repository**.
4. Na página do repositório, clique em **uploading an existing file**.
5. Arraste para lá **o conteúdo da pasta** (`index.html`, `assets`, `_headers`, `robots.txt`, `.gitignore`), não a pasta inteira. O `index.html` precisa ficar na raiz.
6. Clique em **Commit changes**.

Obs.: o GitHub pela web aceita arrastar pastas no Chrome/Edge. Se o `assets` não subir, crie a pasta no GitHub (Add file > Create new file, digite `assets/x`) e envie as imagens dentro dela.

## Parte 2: Cloudflare Pages (colocar no ar)
1. Entre em https://dash.cloudflare.com (crie a conta grátis, se precisar).
2. Menu lateral: **Workers & Pages** > **Create** > aba **Pages** > **Connect to Git**.
3. Autorize o GitHub e escolha o repositório `kira-padaria-pet`.
4. Configuração de build (é um site simples, sem build):
   - **Framework preset:** None
   - **Build command:** deixe vazio
   - **Build output directory:** `/` (ou deixe vazio)
5. Clique em **Save and Deploy**. Em cerca de 1 minuto o site abre num endereço como `kira-padaria-pet.pages.dev`.

A partir daí, toda vez que você trocar um arquivo no GitHub, o site atualiza sozinho.

## Parte 3: domínio próprio (opcional)
1. Registre o domínio (ex.: `kirapadariapet.com.br` no Registro.br, ou direto na Cloudflare).
2. No projeto do Cloudflare Pages: **Custom domains** > **Set up a custom domain**.
3. Digite o domínio e siga as instruções. Se o domínio estiver na Cloudflare, ele configura o DNS sozinho. Se estiver no Registro.br, aponte os servidores de nome (DNS) para a Cloudflare, ou crie o registro CNAME que ela indicar.
4. O HTTPS (cadeado) é automático. Pode levar de minutos a algumas horas.

## Depois que o site estiver no ar
- **Imagem de compartilhamento (WhatsApp/Instagram):** no `index.html`, troque `content="assets/01-capa.jpg"` por o endereço completo, ex.: `https://kirapadariapet.com.br/assets/01-capa.jpg`.
- **Vídeo da capa:** coloque o arquivo `video-kira.mp4` na pasta `assets/` e, no `index.html`, preencha `var HERO_VIDEO = "assets/video-kira.mp4";` (e `HERO_POSTER` com uma imagem). Mande o vídeo para o Claude comprimir antes.
- **Logos dos parceiros:** coloque os PNG em `assets/` e preencha a lista `PARCEIROS` no `index.html` (logo e WhatsApp de cada um).
- **Google:** cadastre o site no Google Search Console e no Google Meu Negócio para a Kira aparecer nas buscas de Franca.

## Antes de divulgar, confirmar com a Renata Furlan
- Preços dos cardápios e do aniversário.
- Horário de atendimento (segunda a sábado, 9h às 18h).
- Facebook (/kirapadariapet) e TikTok (@kira.padariapet): se existem de fato.
- Textos com alegações de saúde nas artes ("fortalece a imunidade", "auxilia na digestão", "petiscos saudáveis").
- Foto da fachada: é ilustração ou a loja real?
- Seção de parceiros: só publicar com logos autorizadas; senão, esconder a seção.

## Segurança
Nunca envie senha, token ou chave do GitHub/Cloudflare para ninguém, nem para o Claude. Tudo isso é feito por você, na sua conta.
