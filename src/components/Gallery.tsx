import { useState } from 'react';
import { Star, MessageSquare, Camera, X, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1752857015591-c1b85c01c461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRlY29yYXRpb258ZW58MXx8fHwxNzU5NDIwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      client: "María y Carlos",
      event: "Boda",
      testimonial: "L'Amore Durango hizo realidad nuestro sueño. Cada detalle fue perfecto, desde la decoración hasta la coordinación. ¡Fue mágico!",
      rating: 5
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1737224319158-570f67b1f038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhJUMzJUIxZXJhJTIwcGFydHklMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc1OTUxNjc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      client: "Sofia Hernández",
      event: "XV Años",
      testimonial: "Mi fiesta de XV años fue como un cuento de hadas. El equipo superó todas mis expectativas. ¡Recomiendo L'Amore al 100%!",
      rating: 5
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758606137571-79fb4dd7d5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbiUyMHBpbmt8ZW58MXx8fHwxNzU5NTE2NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      client: "Ana Rodríguez",
      event: "Baby Shower",
      testimonial: "El baby shower de mi bebé fue increíble. La atención al detalle y el cariño con el que trabajaron fue extraordinario.",
      rating: 5
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1614680889829-9b2d25a71be0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRlY29yYXRpb258ZW58MXx8fHwxNzU5NTE2NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      client: "Roberto y Luisa",
      event: "25° Aniversario",
      testimonial: "Celebrar nuestro aniversario con L'Amore fue la mejor decisión. Crearon un ambiente romántico y elegante que nunca olvidaremos.",
      rating: 5
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzU5NTE2NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      client: "Familia Morales",
      event: "Cumpleaños",
      testimonial: "El cumpleaños de mi hija fue espectacular. La creatividad y profesionalismo del equipo nos dejó sin palabras. ¡Gracias!",
      rating: 5
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1717944186818-c628ca7c2b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NTk0ODIxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      client: "Empresa Innovación SA",
      event: "Evento Corporativo",
      testimonial: "Nuestro evento corporativo fue un éxito total. La organización impecable y el resultado superó todas nuestras expectativas.",
      rating: 5
    }
  ]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const event = formData.get('event') as string;
    const testimonial = formData.get('testimonial') as string;
    
    if (name && event && testimonial) {
      const newReview = {
        id: reviews.length + 1,
        image: "https://images.unsplash.com/photo-1717944186818-c628ca7c2b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZXxlbnwxfHx8fDE3NTk0ODIxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        client: name,
        event: event,
        testimonial: testimonial,
        rating: 5
      };
      
      setReviews([newReview, ...reviews]);
      setIsReviewModalOpen(false);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <section id="galeria" className="py-24 bg-bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-burgundy mb-6 font-['Playfair_Display'] font-bold divider-gold">
            Galería y Reseñas
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6 font-['Poppins'] leading-relaxed">
              Descubre los momentos mágicos que hemos creado y conoce las experiencias de nuestros clientes.
            </p>
            
            {/* Add Review Button */}
            <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gold hover:bg-[#B8941F] text-black font-['Poppins'] font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Escribe tu Reseña
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-burgundy font-['Playfair_Display'] text-2xl text-center">
                    Comparte tu Experiencia
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Tu nombre
                    </label>
                    <Input 
                      name="name" 
                      placeholder="Nombre completo" 
                      required 
                      className="border-subtle focus:border-burgundy"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Tipo de evento
                    </label>
                    <Input 
                      name="event" 
                      placeholder="Ej: Boda, XV Años, Baby Shower" 
                      required 
                      className="border-subtle focus:border-burgundy"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Poppins']">
                      Tu testimonio
                    </label>
                    <Textarea 
                      name="testimonial" 
                      placeholder="Cuéntanos sobre tu experiencia con L'Amore Durango..."
                      rows={4}
                      required 
                      className="border-subtle focus:border-burgundy"
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setIsReviewModalOpen(false)}
                      className="flex-1 border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
                    >
                      Cancelar
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 bg-burgundy hover:bg-[#6B1028] text-white"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Enviar
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="group overflow-hidden bg-white shadow-elegant shadow-elegant-hover transition-all duration-500 hover:-translate-y-1 border border-subtle rounded-xl">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={review.image}
                  alt={`${review.event} - ${review.client}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gold text-black px-3 py-1 rounded-full text-sm font-['Poppins'] font-semibold shadow-lg">
                    {review.event}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 font-['Poppins'] italic leading-relaxed text-sm">
                  "{review.testimonial}"
                </p>
                
                <div className="border-t border-subtle pt-4">
                  <h4 className="text-burgundy font-['Playfair_Display'] font-semibold">
                    {review.client}
                  </h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-12 bg-white rounded-2xl shadow-elegant border border-subtle">
          <h3 className="text-3xl md:text-4xl text-burgundy mb-4 font-['Playfair_Display'] font-bold">
            ¿Listo para crear tu momento especial?
          </h3>
          <p className="text-gold text-lg mb-8 font-['Playfair_Display'] italic">
            Únete a nuestros clientes satisfechos y vive una experiencia inolvidable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5218714567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-[#B8941F] text-black px-8 py-3 rounded-full font-['Poppins'] font-semibold transition-all hover:scale-105 inline-block shadow-lg"
            >
              Contactar por WhatsApp
            </a>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white px-8 py-3 rounded-full font-['Poppins'] font-semibold transition-all hover:scale-105"
            >
              Ver Información de Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}