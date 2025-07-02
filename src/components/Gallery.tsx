
export const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/13a5bb3b-b776-4104-95b3-01711eec2b41.png",
      alt: "Transport funerar profesional în fața bisericii din Turda",
      title: "Transport Funerar Autorizat"
    },
    {
      src: "/lovable-uploads/837547b6-4c24-488e-946f-e8529cb8fa74.png",
      alt: "Servicii funerare la biserica din Turda",
      title: "Servicii la Locația Ceremoniei"
    },
    {
      src: "/lovable-uploads/61b22415-9a87-49bb-a231-5cd6a196eb2a.png",
      alt: "Sicrie de calitate superioară disponibile",
      title: "Sicrie și Cruci de Lemn"
    },
    {
      src: "/lovable-uploads/20685426-c351-472b-8c87-92973a6ea33e.png",
      alt: "Varietate de sicrie pentru toate nevoile",
      title: "Gamă Variată de Sicrie"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Serviciile Noastre în Imagini
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Profesionalism și respect în fiecare detaliu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
