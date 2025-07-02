
export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SC RADU & CO FUNERALS SRL</h3>
            <p className="text-slate-300 mb-4">
              Servicii funerare profesionale în Turda și împrejurimi. 
              Respect, profesionalism și empatie în cele mai dificile momente.
            </p>
            <p className="text-slate-400 text-sm">
              © 2024 SC RADU & CO FUNERALS SRL. Toate drepturile rezervate.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii Principale</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Transport funerar autorizat</li>
              <li>• Sicrie și cruci de lemn</li>
              <li>• Asistență ajutor înmormântare</li>
              <li>• Catafalc și manipulanți</li>
              <li>• Aranjamente florale</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Rapid</h4>
            <div className="space-y-2 text-slate-300">
              <p>📞 <a href="tel:0756689117" className="hover:text-white transition-colors">0756/689117</a></p>
              <p>📍 Turda, Str. Fragariste, Bloc ASPER</p>
              <p>🕐 Disponibili 24/7</p>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Zone Deservite:</h5>
              <p className="text-sm text-slate-400">
                Turda • Câmpia Turzii • Mihai Viteazu • Viișoara • Tureni
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="flex flex-wrap justify-center space-x-6 text-sm text-slate-400">
            <span>Servicii Funerare Turda</span>
            <span>•</span>
            <span>Transport Funerar Autorizat</span>
            <span>•</span>
            <span>Pompe Funebre Cluj</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
