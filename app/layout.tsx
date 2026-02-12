import React from 'react';
import { Archivo, Inter } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Guanda Baterias | Energia em Minutos - Bauru e Região',
  description: 'Baterias automotivas, moto e estacionárias em Bauru. Entrega e instalação grátis em minutos. Revendedor oficial Heliar, Cral, Moura e mais.',
  keywords: 'bateria automotiva, bateria moura, bateria heliar, bateria bauru, disk bateria, troca de bateria, bateria de moto',
  authors: [{ name: 'Guanda Baterias' }],
  openGraph: {
    type: 'website',
    url: 'https://www.guandabaterias.com.br/',
    title: 'Guanda Baterias | Energia em Minutos',
    description: 'Baterias automotivas com entrega e instalação grátis em Bauru.',
    images: ['https://cdn.gabrielxavier.online/baterias-para-carro.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${archivo.variable} font-sans bg-slate-50 text-slate-800 selection:bg-yellow-400 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}