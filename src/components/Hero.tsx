export const Hero = () => {
  return <section id="acasa" className="relative bg-gradient-to-br from-slate-100 to-slate-200 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Servicii Funerare Turda
          </h2>
          <h3 className="text-2xl md:text-3xl text-slate-600 mb-8">
            Respect și Profesionalism în cele mai dificile momente
          </h3>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            O firmă funerară dedicată asigură sprijinul necesar în cele mai dificile momente ale vieții. 
            Cu empatie, profesionalism și discreție, oferim servicii funerare complete, preluând toate 
            responsabilitățile pentru a ușura povara familiei îndoliate.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="tel:0756689117" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <span>Apelați acum: 0756689117</span>
            </a>
            <a href="#servicii" className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Vezi Serviciile
            </a>
          </div>
        </div>
      </div>
    </section>;
};