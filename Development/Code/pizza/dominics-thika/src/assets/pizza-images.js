// Pizza images and data for Dominics Thika
export const pizzaImages = {
  margherita: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  pepperoni: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  bbqChicken: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  veggieSupreme: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  hawaiian: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  meatLovers: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  spinachFeta: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  buffaloChicken: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

export const pizzaData = [
  {
    id: 1,
    name: 'Margherita',
    price: 1200,
    description: 'Classic Italian pizza with fresh mozzarella and basil',
    ingredients: ['Mozzarella', 'Tomato Sauce', 'Basil'],
    category: 'classic',
    image: pizzaImages.margherita,
    popular: true
  },
  {
    id: 2,
    name: 'Pepperoni',
    price: 1400,
    description: 'Spicy pepperoni with melted mozzarella cheese',
    ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    category: 'classic',
    image: pizzaImages.pepperoni,
    popular: true
  },
  {
    id: 3,
    name: 'BBQ Chicken',
    price: 1600,
    description: 'Grilled chicken with tangy BBQ sauce and onions',
    ingredients: ['Chicken', 'BBQ Sauce', 'Onions', 'Mozzarella'],
    category: 'specialty',
    image: pizzaImages.bbqChicken,
    popular: true
  },
  {
    id: 4,
    name: 'Veggie Supreme',
    price: 1300,
    description: 'Fresh vegetables with mozzarella and tomato sauce',
    ingredients: ['Bell Peppers', 'Mushrooms', 'Onions', 'Olives', 'Mozzarella'],
    category: 'vegetarian',
    image: pizzaImages.veggieSupreme,
    popular: true
  },
  {
    id: 5,
    name: 'Hawaiian',
    price: 1500,
    description: 'Ham and pineapple for a sweet and savory taste',
    ingredients: ['Ham', 'Pineapple', 'Mozzarella', 'Tomato Sauce'],
    category: 'classic',
    image: pizzaImages.hawaiian
  },
  {
    id: 6,
    name: 'Meat Lovers',
    price: 1800,
    description: 'Loaded with pepperoni, sausage, bacon, and ham',
    ingredients: ['Pepperoni', 'Sausage', 'Bacon', 'Ham', 'Mozzarella'],
    category: 'specialty',
    image: pizzaImages.meatLovers
  },
  {
    id: 7,
    name: 'Spinach & Feta',
    price: 1400,
    description: 'Fresh spinach with creamy feta cheese',
    ingredients: ['Spinach', 'Feta Cheese', 'Mozzarella', 'Olive Oil'],
    category: 'vegetarian',
    image: pizzaImages.spinachFeta
  },
  {
    id: 8,
    name: 'Buffalo Chicken',
    price: 1700,
    description: 'Spicy buffalo chicken with ranch drizzle',
    ingredients: ['Chicken', 'Buffalo Sauce', 'Ranch', 'Mozzarella'],
    category: 'specialty',
    image: pizzaImages.buffaloChicken
  }
]; 