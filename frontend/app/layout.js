import "./globals.css";
import {Poppins, Kode_Mono, Lekton, Climate_Crisis, Chakra_Petch, Quantico} from "next/font/google";

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400','500','600','700','800', '900'],
  variable: '--font-poppins',
});

const kode_mono_init = Kode_Mono({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-kode-mono',
});

const lekton_init = Lekton({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lekton',
});

const climate_crisis_init = Climate_Crisis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-climate-crisis',
});

const chakra_petch_init = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400','500','600','700'],
  variable: '--font-chakra-petch',
});

const quantico_init = Quantico({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-quantico',
});

export const metadata = {
  title: "Archiva",
  description: "Seamlessly Manage Smart Contracts with Security and Privacy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins_init.variable} ${kode_mono_init.variable} ${lekton_init.variable} ${climate_crisis_init.variable} ${chakra_petch_init.variable} ${quantico_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
