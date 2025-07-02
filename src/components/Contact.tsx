import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Suntem aici pentru dumneavoastră în orice moment. Nu ezitați să ne contactați.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Informații de Contact</h3>
            
            <div className="space-y-6">
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <Phone className="w-6 h-6 text-slate-300" />
                    <span>Telefon</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:0756689117" className="text-xl font-semibold text-slate-100 hover:text-white transition-colors">0756689117</a>
                  <p className="text-slate-300 mt-1">Disponibili 24/7 pentru urgențe</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <MapPin className="w-6 h-6 text-slate-300" />
                    <span>Adresa</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-100 font-semibold">Turda, Str. Fragariste</p>
                  <p className="text-slate-100">Bloc ASPER</p>
                  <p className="text-slate-300 mt-2">Județul Cluj, România</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <Clock className="w-6 h-6 text-slate-300" />
                    <span>Program</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-100 font-semibold">24/7 - Toate zilele</p>
                  <p className="text-slate-300">Servicii de urgență disponibile oricând</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-slate-700 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Zone Deservite</h4>
              <div className="grid grid-cols-2 gap-4 text-slate-200">
                <div>
                  <p className="font-medium text-white mb-2">Orașe principale:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Turda</li>
                    <li>• Câmpia Turzii</li>
                    <li>• Mihai Viteazu</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-white mb-2">Comune:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Viișoara</li>
                    <li>• Tureni</li>
                    <li>• Împrejurimile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Cum Ne Găsiți</h3>
            
            <div className="bg-slate-700 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-4">Google Maps</h4>
              <p className="text-slate-300 mb-4">
                Căutați "BLOC ASPER" pe Google Maps pentru a ne găsi exact.
              </p>
              <a href="https://maps.google.com/?q=Bloc+Asper+Turda" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-600 hover:bg-slate-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Vezi pe Google Maps
              </a>
            </div>

            <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Apel de Urgență</h4>
              <p className="text-slate-200 mb-4">
                Pentru situații de urgență, sunați direct la numărul nostru. 
                Răspundem imediat și venim în cel mai scurt timp posibil.
              </p>
              <a href="tel:0756689117" className="inline-block bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Apelați Acum: 0756/689117
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};