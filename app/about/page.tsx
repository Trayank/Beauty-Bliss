import { Heart, Leaf, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold text-gray-900">About Beauty Bliss</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bringing premium beauty to everyone, one product at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Beauty Products"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Beauty Bliss was founded with a simple mission: to make premium beauty products
              accessible to everyone. We believe that beauty is not just about appearance, but
              about feeling confident and comfortable in your own skin.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our carefully curated collection features only the finest ingredients, sourced
              ethically and sustainably. Every product is cruelty-free, dermatologically tested,
              and designed to enhance your natural beauty without compromising your values.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Join thousands of satisfied customers who have discovered the Beauty Bliss difference.
              Experience the luxury of premium cosmetics and skincare that truly delivers results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Cruelty Free</h3>
            <p className="text-gray-600 text-sm">
              All our products are never tested on animals. Beauty with compassion.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Leaf className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Natural Ingredients</h3>
            <p className="text-gray-600 text-sm">
              Premium, ethically sourced ingredients for effective results.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Award Winning</h3>
            <p className="text-gray-600 text-sm">
              Recognized by beauty experts and loved by customers worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center space-y-4">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Community Driven</h3>
            <p className="text-gray-600 text-sm">
              Built by beauty lovers, for beauty lovers. Join our growing family.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Our Commitment</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We are committed to providing high-quality, sustainable beauty products that make you
            feel amazing. Every purchase supports ethical sourcing, fair trade practices, and
            environmental sustainability. Together, we can make beauty better for everyone.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-pink-500">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-pink-500">100%</div>
              <div className="text-sm text-gray-600">Cruelty Free</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-pink-500">5★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
