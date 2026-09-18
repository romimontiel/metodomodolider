import { redirect } from 'next/navigation';

export const metadata = {
  title: "CAMPUS MODO LIDER | Portal Exclusivo de Alumnas",
  description: "Portal exclusivo de alumnas del Programa Emprender de Cero a Impacto y Ventas con Romina Lorena Montiel.",
};

export default function CampusPage() {
  redirect('/campus_modo_lider.html');
}
