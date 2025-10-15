import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  features: string[];
  images: string[];
  inStock: boolean;
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "D-Cut Carry Bags",
    price: 0,
    category: "Carry Bags",
    description: "High-quality D-cut carry bags perfect for shopping and retail. Strong, durable, and eco-friendly alternatives to traditional plastic bags.",
    features: ["Eco-Friendly Material", "Strong Handles", "Reusable", "Available in Multiple Sizes"],
    images: ["/D-Cut Carry bags.png"],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Garbage Bags",
    price: 0,
    category: "Waste Management",
    description: "Biodegradable garbage bags designed for efficient waste management. Strong and leak-proof for all your disposal needs.",
    features: ["Biodegradable", "Leak-Proof", "Heavy Duty", "Multiple Sizes Available"],
    images: ["/Garbage bags.png"],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Grocery Packing Covers",
    price: 0,
    category: "Packing Materials",
    description: "Versatile grocery packing covers ideal for food storage and retail packaging. Safe, hygienic, and environmentally conscious.",
    features: ["Food Safe", "Transparent Options", "Bulk Available", "Custom Printing"],
    images: ["/Grocery packing covers.png"],
    inStock: true,
    isNew: true,
  },
  {
    id: 4,
    name: "Nursery Bags",
    price: 0,
    category: "Agriculture",
    description: "Specialized nursery bags for plant growth and cultivation. Breathable, durable, and perfect for seedlings and saplings.",
    features: ["UV Resistant", "Breathable Material", "Multiple Sizes", "Drainage Holes"],
    images: ["/Nursery bags.png"],
    inStock: true,
  },
  {
    id: 5,
    name: "W-Cut Carry Bags",
    price: 0,
    category: "Carry Bags",
    description: "Premium W-cut carry bags with comfortable grip and excellent load capacity. Ideal for grocery stores and retail shops.",
    features: ["Comfortable Grip", "High Load Capacity", "Recyclable", "Customizable"],
    images: ["/W-Cut Carry Bags.png"],
    inStock: true,
    isFeatured: true,
  },
];

const Products = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      return true;
    });

    return filtered;
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          onClick={() => navigate('/')}
          size="lg"
          className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 rounded-full px-6 py-6 border-2 border-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base">Back to Home</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-glow/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-display">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Discover our complete range of biodegradable and eco-friendly bags designed for various applications.
            </p>
            <p className="text-lg text-muted-foreground">
              From carry bags to nursery solutions, each product is manufactured with care to reduce plastic waste and promote environmental sustainability.
            </p>
            <div className="mt-8 text-sm text-accent-foreground">
              <span className="font-semibold">{filteredAndSortedProducts.length}</span> {filteredAndSortedProducts.length === 1 ? 'Product' : 'Products'} Available
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">

          {/* Filter Bar */}
          <div className="mb-8">
            <div className="flex justify-center">
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[250px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">
                No products found matching your filters.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                }}
                variant="outline"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
