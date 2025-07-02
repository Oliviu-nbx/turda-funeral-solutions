
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, FileText, Cross, Flame, Users, Flower } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-slate-700" />,
      title: "Transport Funerar AUTORIZAT",
      description: "Transport profesional și respectuos cu autorizațiile necesare pentru toate zonele deservite.",
      highlight: true
    },
    {
      icon: <FileText className="w-8 h-8 text-slate-700" />,
      title: "Asistență pentru Ajutorul de Înmormântare",
      description: "Vă ajutăm cu toate formalitățile pentru obținerea ajutorului de înmormântare."
    },
    {
      icon: <Cross className="w-8 h-8 text-slate-700" />,
      title: "Sicrie și Cruci de Lemn",
      description: "Gamă variată de sicrie și cruci de lemn de calitate superioară."
    },
    {
      icon: <Flame className="w-8 h-8 text-slate-700" />,
      title: "Accesorii Funerare",
      description: "Prosoape, necroloage, lumânări și toate accesoriile necesare ceremoniei."
    },
    {
      icon: <Users className="w-8 h-8 text-slate-700" />,
      title: "Catafalc și Manipulanți",
      description: "Servicii complete de catafalc și manipulanți profesioniști."
    },
    {
      icon: <Flower className="w-8 h-8 text-slate-700" />,
      title: "Servicii Complementare",
      description: "Colaborare cu gropari, servicii de panificație, catering și aranjamente florale."
    }
  ];

  return (
    <section id="servicii" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferim servicii funerare complete în Turda, Câmpia Turzii, Mihai Viteazu, Viișoara și Tureni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`h-full transition-all hover:shadow-lg ${service.highlight ? 'ring-2 ring-slate-800' : ''}`}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {service.title}
                  {service.highlight && (
                    <span className="block text-sm text-slate-600 font-normal mt-1">⭐ Serviciu Principal</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
