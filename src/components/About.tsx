
export const About = () => {
  const collaborators = [
    "Colaborare cu gropari profesioniști",
    "Servicii de panificație pentru evenimente",
    "Catering pentru evenimente comemorative",
    "Aranjamente florale personalizate",
    "Producători și executanți monumente funerare"
  ];

  return (
    <section id="despre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Despre SC RADU & CO FUNERALS SRL
            </h2>
            <p className="text-xl text-slate-600">
              Expertiză și compasiune în serviciile funerare din Turda și împrejurimi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Misiunea Noastră
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Prin servicii personalizate și grijă față de detalii, ne asigurăm că fiecare ceremonie 
                este un omagiu demn și respectuos adus celor dragi. Firma noastră este alături de 
                dumneavoastră pentru a vă oferi sprijin în orice moment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Cu empatie, profesionalism și discreție, oferim servicii funerare complete în 
                Turda și localitățile înveciniate: Câmpia Turzii, Mihai Viteazu, Viișoara și Tureni.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  Zone Deservite:
                </h4>
                <ul className="grid grid-cols-2 gap-2 text-slate-600">
                  <li>• Turda</li>
                  <li>• Câmpia Turzii</li>
                  <li>• Mihai Viteazu</li>
                  <li>• Viișoara</li>
                  <li>• Tureni</li>
                  <li>• Împrejurimi</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Colaboratorii Noștri
              </h3>
              <div className="space-y-4">
                {collaborators.map((collaborator, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{collaborator}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-slate-800 text-white rounded-lg">
                <h4 className="text-lg font-semibold mb-3">De Ce Să Ne Alegeți?</h4>
                <ul className="space-y-2 text-slate-200">
                  <li>✓ Transport funerar AUTORIZAT</li>
                  <li>✓ Disponibili 24/7</li>
                  <li>✓ Experiență și profesionalism</li>
                  <li>✓ Prețuri corecte și transparente</li>
                  <li>✓ Servicii complete și personalizate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
