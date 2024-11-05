const productsData = [
    {
        id: 1,
        name: 'Smartphone',
        price: 699,
        image: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
        category: 'Electronics',
        description: 'A high-end smartphone with a stunning display, fast performance, and a powerful camera system.',
        stock: 10,
        specifications: [
            '6.5-inch OLED display',
            'Qualcomm Snapdragon 888 chipset',
            '128GB storage, 8GB RAM',
            '48MP rear camera, 16MP front camera',
            '4000mAh battery with fast charging',
            '5G support'
        ],
        reviews: [
            { date: '2024-10-01', comment: 'Great phone! The camera is amazing.', author: 'John Doe', rating: 5 },
            { date: '2024-09-20', comment: 'Battery life could be better.', author: 'Jane Smith', rating: 3 }
        ]
    },
    {
        id: 2,
        name: 'Laptop',
        price: 999,
        image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Electronics',
        description: 'A powerful laptop designed for both work and entertainment, featuring a sleek design and high performance.',
        stock: 10,
        specifications: [
            '15.6-inch Full HD display',
            'Intel Core i7 processor',
            '16GB RAM, 512GB SSD',
            'NVIDIA GeForce GTX 1650 graphics',
            'Long-lasting 10-hour battery life'
        ],
        reviews: [
            { date: '2024-10-05', comment: 'Solid performance, great value for money.', author: 'Alice Johnson', rating: 4 },
            { date: '2024-09-15', comment: 'Too heavy for my taste, but overall a good laptop.', author: 'Michael Brown', rating: 3 }
        ]
    },
    {
        id: 3,
        name: 'T-Shirt',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Clothing',
        description: 'A comfortable, classic t-shirt made from high-quality cotton.',
        stock: 10,
        specifications: [
            '100% cotton fabric',
            'Available in sizes S, M, L, XL',
            'Machine washable',
            'Available in multiple colors'
        ],
        reviews: [
            { date: '2024-08-22', comment: 'Comfortable and fits perfectly.', author: 'Eve White', rating: 5 }
        ]
    },
    {
        id: 4,
        name: 'Coffee Maker',
        price: 49.99,
        image: 'https://plus.unsplash.com/premium_photo-1661722983090-11783531c332?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Home',
        description: 'An easy-to-use coffee maker that brews a fresh cup of coffee in minutes.',
        stock: 10,
        specifications: [
            '12-cup capacity',
            'Brew strength control',
            'Removable filter basket',
            'Auto shut-off feature',
            'Dishwasher-safe parts'
        ],
        reviews: [
            { date: '2024-07-30', comment: 'Makes great coffee, very easy to use!', author: 'Chris Green', rating: 5 }
        ]
    },
    {
        id: 5,
        name: 'Headphones',
        price: 199.99,
        image: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Electronics',
        description: 'Premium wireless headphones with exceptional sound quality and comfort.',
        stock: 10,
        specifications: [
            'Active Noise Cancelling (ANC)',
            'Up to 30 hours of battery life',
            'Touch-sensitive controls',
            'Bluetooth 5.0',
            'Customizable sound settings'
        ],
        reviews: [
            { date: '2024-10-10', comment: 'Excellent sound quality, very comfortable.', author: 'Sophia Lee', rating: 5 }
        ]
    },
    {
        id: 6,
        name: 'Backpack',
        price: 59.99,
        image: 'https://plus.unsplash.com/premium_photo-1723649902734-60ec42167731?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Clothing',
        description: 'A versatile and spacious backpack ideal for daily use, school, or travel.',
        stock: 10,
        specifications: [
            'Durable polyester material',
            'Padded laptop compartment (up to 15-inch)',
            'Multiple zippered pockets',
            'Adjustable shoulder straps'
        ],
        reviews: [
            { date: '2024-09-10', comment: 'Great quality, very spacious!', author: 'Olivia Martin', rating: 4 }
        ]
    },
    {
        id: 7,
        name: 'Gaming Mouse',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1616071359129-9b03697771a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Electronics',
        description: 'A high-precision gaming mouse designed for competitive gaming.',
        stock: 10,
        specifications: [
            'RGB customizable lighting',
            '6 programmable buttons',
            '16,000 DPI sensor',
            'Ergonomic design for comfort'
        ],
        reviews: [
            { date: '2024-10-01', comment: 'Perfect for gaming! Highly responsive.', author: 'Liam Thompson', rating: 5 }
        ]
    },
    {
        id: 8,
        name: 'Smartwatch',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Electronics',
        description: 'A stylish smartwatch with health tracking, notifications, and more.',
        stock: 10,
        specifications: [
            '1.4-inch AMOLED display',
            'Heart rate and sleep tracking',
            'Up to 7 days of battery life',
            'Water-resistant up to 50 meters',
            'Customizable watch faces'
        ],
        reviews: []
    },
    {
        id: 9,
        name: 'Yoga Mat',
        price: 29.99,
        image: 'https://plus.unsplash.com/premium_photo-1716025656382-cc9dfe8714a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Fitness',
        description: 'A non-slip yoga mat perfect for your workout sessions.',
        stock: 10,
        specifications: [
            'Durable PVC material',
            '72 inches long, 24 inches wide',
            'Extra thick for comfort',
            'Eco-friendly and non-toxic'
        ],
        reviews: []
    },
    {
        id: 10,
        name: 'Water Bottle',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Home',
        description: 'A durable water bottle to keep your drinks cold or hot for hours.',
        stock: 10,
        specifications: [
            'Stainless steel double-wall insulation',
            '500ml capacity',
            'Leak-proof cap',
            'Dishwasher safe'
        ],
        reviews: [
            { date: '2024-09-15', comment: 'Keeps water cool for hours!', author: 'Noah Davis', rating: 5 }
        ]
    }
];

export default productsData;