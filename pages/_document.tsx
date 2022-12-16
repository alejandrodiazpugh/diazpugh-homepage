import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
		<meta name="keywords" content="diseño, desarrollo, web, aplicacion web, webapp, CMS, ecommerce, e-commerce, landing page, marca, sitio web, portafolio, invitación, tienda en linea, negocio en linea, blog, branding, marketing digital, base de datos" />
		<meta name="description" content="Desarrollo y diseño para tu próximo gran proyecto en la red. Ya sea que necesitas una tienda en linea o una invitación virtual, mi trabajo es hacer la web sencilla para ti." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
