import { Phone, MapPin, Clock } from 'lucide-react';
export const Header = () => {
  return <header className="bg-slate-900 text-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>0756689117</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Turda, Str. Fragariste, Bloc ASPER</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>Disponibili 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              SC RADU & CO FUNERALS SRL
            </h1>
            <p className="text-slate-300 mt-1">Servicii Funerare Turda - Respect și Profesionalism</p>
          </div>
          
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a href="#acasa" className="hover:text-slate-300 transition-colors">Acasă</a>
            <a href="#servicii" className="hover:text-slate-300 transition-colors">Servicii</a>
            <a href="#despre" className="hover:text-slate-300 transition-colors">Despre Noi</a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>;
};