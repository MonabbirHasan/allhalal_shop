const productCategories = [
  {
    store: "App Store",
    categories: [
      { name: "Mobile Apps" },
      { name: "Desktop Apps" },
      { name: "Games" },
      { name: "Productivity Tools" },
      { name: "Entertainment Apps" },
    ],
  },
  {
    store: "Clothing Store (Men, Women, Kids)",
    categories: [
      { name: "Men's Clothing" },
      { name: "Women's Clothing" },
      { name: "Kids' Clothing" },
      { name: "Accessories" },
      { name: "Footwear" },
    ],
  },
  {
    store: "Electronics Store",
    categories: [
      { name: "Mobile Phones" },
      { name: "Laptops" },
      { name: "Tablets" },
      { name: "Cameras" },
      { name: "Wearables" },
    ],
  },
  {
    store: "Furniture Store",
    categories: [
      { name: "Living Room Furniture" },
      { name: "Bedroom Furniture" },
      { name: "Dining Furniture" },
      { name: "Office Furniture" },
      { name: "Outdoor Furniture" },
    ],
  },
  {
    store: "Home Appliances Store",
    categories: [
      { name: "Kitchen Appliances" },
      { name: "Washing Machines" },
      { name: "Refrigerators" },
      { name: "Air Conditioners" },
      { name: "Vacuum Cleaners" },
    ],
  },
  {
    store: "Sports Goods Store",
    categories: [
      { name: "Fitness Equipment" },
      { name: "Outdoor Sports" },
      { name: "Indoor Sports" },
      { name: "Footwear" },
      { name: "Sportswear" },
    ],
  },
  {
    store: "Health & Beauty Store",
    categories: [
      { name: "Skincare" },
      { name: "Haircare" },
      { name: "Makeup" },
      { name: "Health Supplements" },
      { name: "Fitness" },
    ],
  },
  {
    store: "Jewelry Store",
    categories: [
      { name: "Gold Jewelry" },
      { name: "Silver Jewelry" },
      { name: "Diamonds" },
      { name: "Fashion Jewelry" },
      { name: "Watches" },
    ],
  },
  {
    store: "Footwear Store",
    categories: [
      { name: "Men's Footwear" },
      { name: "Women's Footwear" },
      { name: "Kids' Footwear" },
      { name: "Sports Footwear" },
      { name: "Formal Footwear" },
    ],
  },
  {
    store: "Toys & Games Store",
    categories: [
      { name: "Educational Toys" },
      { name: "Action Figures" },
      { name: "Board Games" },
      { name: "Outdoor Toys" },
      { name: "Video Games" },
    ],
  },
  {
    store: "Grocery Store",
    categories: [
      { name: "Beverages" },
      { name: "Snacks" },
      { name: "Packaged Foods" },
      { name: "Household Essentials" },
      { name: "Health & Wellness" },
    ],
  },
  {
    store: "Vegetable Store",
    categories: [
      { name: "Leafy Greens" },
      { name: "Root Vegetables" },
      { name: "Fruits & Berries" },
      { name: "Seasonal Vegetables" },
      { name: "Organic Vegetables" },
    ],
  },
  {
    store: "Fruit Store",
    categories: [
      { name: "Citrus Fruits" },
      { name: "Tropical Fruits" },
      { name: "Berries" },
      { name: "Stone Fruits" },
      { name: "Dried Fruits" },
    ],
  },
  {
    store: "Meat & Fish Store",
    categories: [
      { name: "Chicken" },
      { name: "Beef" },
      { name: "Lamb" },
      { name: "Seafood" },
      { name: "Poultry" },
    ],
  },
  {
    store: "Dairy Products Store",
    categories: [
      { name: "Milk" },
      { name: "Cheese" },
      { name: "Yogurt" },
      { name: "Butter" },
      { name: "Eggs" },
    ],
  },
  {
    store: "Bakery Store",
    categories: [
      { name: "Bread" },
      { name: "Cakes & Pastries" },
      { name: "Cookies" },
      { name: "Muffins" },
      { name: "Desserts" },
    ],
  },
  {
    store: "Organic Products Store",
    categories: [
      { name: "Organic Vegetables" },
      { name: "Organic Fruits" },
      { name: "Organic Dairy" },
      { name: "Organic Snacks" },
      { name: "Organic Beverages" },
    ],
  },
  {
    store: "Pet Supplies Store",
    categories: [
      { name: "Pet Food" },
      { name: "Pet Toys" },
      { name: "Pet Grooming" },
      { name: "Pet Health" },
      { name: "Pet Accessories" },
    ],
  },
  {
    store: "Pharmacy/Medicine Store",
    categories: [
      { name: "Prescription Medicines" },
      { name: "Over-the-counter Medicines" },
      { name: "Healthcare Devices" },
      { name: "Vitamins & Supplements" },
      { name: "Personal Care" },
    ],
  },
  {
    store: "Flower Store",
    categories: [
      { name: "Bouquets" },
      { name: "Indoor Plants" },
      { name: "Outdoor Plants" },
      { name: "Floral Arrangements" },
      { name: "Succulents" },
    ],
  },
  {
    store: "Art & Craft Store",
    categories: [
      { name: "Art Supplies" },
      { name: "Craft Kits" },
      { name: "DIY Materials" },
      { name: "Handmade Art" },
      { name: "Stationery" },
    ],
  },
  {
    store: "Stationery Store",
    categories: [
      { name: "Writing Supplies" },
      { name: "Notebooks" },
      { name: "Art Supplies" },
      { name: "Office Supplies" },
      { name: "School Supplies" },
    ],
  },
  {
    store: "Bookstore",
    categories: [
      { name: "Fiction" },
      { name: "Non-fiction" },
      { name: "Comics" },
      { name: "Textbooks" },
      { name: "Children's Books" },
    ],
  },
  {
    store: "On-Demand Services",
    categories: [
      { name: "Food Delivery" },
      { name: "Courier Services" },
      { name: "Household Cleaning" },
      { name: "Beauty Services" },
      { name: "Laundry Services" },
    ],
  },
  {
    store: "Fashion Accessories Store",
    categories: [
      { name: "Bags" },
      { name: "Belts" },
      { name: "Watches" },
      { name: "Hats" },
      { name: "Jewelry" },
    ],
  },
  {
    store: "Mobile & Gadgets Store",
    categories: [
      { name: "Smartphones" },
      { name: "Smartwatches" },
      { name: "Headphones" },
      { name: "Tablets" },
      { name: "Chargers & Cables" },
    ],
  },
  {
    store: "Home Decor Store",
    categories: [
      { name: "Lighting" },
      { name: "Wall Art" },
      { name: "Vases & Sculptures" },
      { name: "Rugs & Carpets" },
      { name: "Furniture Accents" },
    ],
  },
  {
    store: "Car Accessories Store",
    categories: [
      { name: "Car Audio" },
      { name: "Car Care" },
      { name: "Car Interior" },
      { name: "Car Exterior" },
      { name: "GPS & Navigation" },
    ],
  },
  {
    store: "Baby Products Store",
    categories: [
      { name: "Diapers" },
      { name: "Baby Clothes" },
      { name: "Baby Food" },
      { name: "Baby Toys" },
      { name: "Baby Strollers" },
    ],
  },
  {
    store: "Fitness Equipment Store",
    categories: [
      { name: "Treadmills" },
      { name: "Dumbbells" },
      { name: "Yoga Mats" },
      { name: "Resistance Bands" },
      { name: "Elliptical Trainers" },
    ],
  },
  {
    store: "Camping & Outdoor Gear Store",
    categories: [
      { name: "Tents" },
      { name: "Sleeping Bags" },
      { name: "Camping Furniture" },
      { name: "Camping Cookware" },
      { name: "Outdoor Clothing" },
    ],
  },
];
