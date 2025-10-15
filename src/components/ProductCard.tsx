import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ShoppingCart, Sparkles } from 'lucide-react';
import type { Product } from '@/pages/Products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback placeholder with gradient
  const PlaceholderImage = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-glow/20 to-primary/10">
      <div className="text-center">
        <ShoppingCart className="w-16 h-16 mx-auto text-primary-glow/50 mb-2" />
        <p className="text-sm text-muted-foreground">{product.name}</p>
      </div>
    </div>
  );

  return (
    <>
      <Card
        className="group overflow-hidden hover:shadow-elevated transition-all duration-300 border-border hover:border-primary-glow/30 flex flex-col h-full cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-surface">
          {!imageError ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={handleImageError}
            />
          ) : (
            <PlaceholderImage />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                New
              </Badge>
            )}
            {product.isFeatured && (
              <Badge className="bg-primary-glow text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="p-4 flex-grow">
          <Badge variant="outline" className="mb-2 text-xs">
            {product.category}
          </Badge>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary-glow transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
        </CardContent>
      </Card>

      {/* Product Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{product.name}</DialogTitle>
            <DialogDescription>
              <Badge variant="outline" className="mt-2">
                {product.category}
              </Badge>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-surface">
              {!imageError ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              ) : (
                <PlaceholderImage />
              )}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary-glow rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
