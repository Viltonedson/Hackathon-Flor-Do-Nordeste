import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'João Silva',
    comment: 'Ótima experiência! Produtos de qualidade e entrega rápida.',
    rating: 5,
  },
  {
    name: 'Maria Oliveira',
    comment: 'Adorei o atendimento ao cliente, super atenciosos!',
    rating: 4,
  },
  {
    name: 'Carlos Souza',
    comment: 'Variedade incrível de produtos, recomendo a todos.',
    rating: 5,
  },
  
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-white py-8">
      <h2 className="text-2xl font-bold text-center mb-4" style={{ color: '#FA7921' }}>O que nossos clientes dizem</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <p className="text-lg font-semibold" style={{ color: '#007090' }}>{testimonial.name}</p>
              <p className="text-sm text-gray-600 mt-2">{testimonial.comment}</p>
              <div className="mt-4">
                {'★'.repeat(testimonial.rating).padEnd(5, '☆')}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;