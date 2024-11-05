# Project: Product Listing and Shopping Cart Application

This project is a comprehensive e-commerce solution that fulfills the requirements for a product listing page with advanced features such as category filtering, a shopping cart, animations, responsive design, and more. It leverages modern libraries and follows best practices for both frontend and backend development.

## Table of Contents
1. [Overview](#overview)
2. [Requirements and Implementation](#requirements-and-implementation)
   - [Product Listing Page](#product-listing-page)
   - [Filtering Products](#filtering-products)
   - [Shopping Cart](#shopping-cart)
   - [Transitions and Animations](#transitions-and-animations)
   - [Data Fetching with Suspense](#data-fetching-with-suspense)
   - [Responsive Design](#responsive-design)
   - [Search Functionality](#search-functionality)
   - [User Authentication (Optional)](#user-authentication-optional)
   - [Persistent Cart](#persistent-cart)
   - [Notifications](#notifications)
   - [Code Quality](#code-quality)
3. [Bonus Challenges](#bonus-challenges)
   - [Review System](#review-system)
   - [Admin Dashboard](#admin-dashboard)
4. [How to Run the Application](#how-to-run-the-application)
5. [Design Choices](#design-choices)
6. [Screenshots and Demo](#screenshots-and-demo)

## Overview

This project is a full-stack e-commerce application that allows users to browse and filter products, manage a shopping cart, and enjoy smooth transitions with responsive design. The backend serves product data, while the frontend presents it in a visually appealing and interactive manner.

## Requirements and Implementation

### 1. Product Listing Page
- **Fetch Products**: Products are fetched from a mock API (or local JSON file) using Axios. The API is accessed via `/api/products`.
- **Display Products**: Products are displayed in a responsive grid layout, showing:
  - Product image
  - Product name
  - Product price
  - "Add to Cart" button

### 2. Filtering Products
- **Category Filtering**: Users can filter products by categories (e.g., Electronics, Clothing, Home). React Query is used to handle category-specific data fetching and cache management.
- **State Management**: React Query manages server state, providing fast and efficient data updates for category filtering.

### 3. Shopping Cart
- **Cart Component**: A shopping cart component shows added products, product quantities, and the total price. Users can:
  - Adjust quantities of products
  - Remove items from the cart
- **State Management**: Recoil (or Zustand) is used for managing the cart's state. This allows global state management, enabling cart updates from any part of the application.

### 4. Transitions and Animations
- **Framer Motion**: Smooth animations for adding/removing items from the cart and other transitions are handled by Framer Motion.
- **React Spring**: React Spring is used for subtle animations such as hover effects and button interactions, making the user experience more engaging.

### 5. Data Fetching with Suspense
- **React 18 Suspense**: Axios data fetching is wrapped in React Suspense to handle loading states. While the products are being fetched, a loading spinner or placeholder is displayed, improving the overall user experience.

### 6. Responsive Design
- **Mobile-Friendly**: The application uses Tailwind CSS for building a responsive layout that adapts to all screen sizes, ensuring a smooth experience on mobile, tablet, and desktop devices.

### 7. Search Functionality
- **Search Bar**: A search feature allows users to filter products based on their input. The search functionality is optimized using `lodash.debounce` to improve performance by reducing unnecessary re-renders.
- **Performance Optimization**: Using `lodash.debounce` prevents frequent API calls during search input, ensuring smooth performance.

### 8. User Authentication (Optional)
- **Authentication Flow**: (Optional) A basic user authentication system is integrated using Firebase Authentication. This allows users to log in and maintain their cart data across sessions.

### 9. Persistent Cart
- **Local Storage**: Redux Persist (or another similar solution) is used to save the cart's state to local storage. This ensures that the shopping cart persists across sessions, so users can return to the app with their cart intact.

### 10. Notifications
- **User Feedback**: React Toastify is used for implementing notifications. Users receive immediate feedback (e.g., "Item added to cart") via toast notifications after actions such as adding/removing items.

### 11. Code Quality
- **Structure**: The project follows a modular structure, organizing code into reusable components. This improves maintainability and scalability.
- **Best Practices**: Best practices in React development are followed, including the use of hooks, state management patterns, and separation of concerns.

## Bonus Challenges

### 1. Review System
- **User Reviews**: A review system is implemented where users can leave ratings and comments on products. The backend serves review data, and it is displayed on each product's detail page.

### 2. Admin Dashboard
- **Admin Management**: An optional admin dashboard is available where administrators can manage products (add, edit, delete). Formik is used for handling forms, with validation in place to ensure smooth product management.

## How to Run the Application

### Prerequisites
- Node.js and npm installed
- MongoDB (optional for using dynamic product data)

## 📂 How to Get Started

1. **Clone a Repository**:
     git clone https://github.com/MaazJawaid/Store_Rapis_Supplies.git

2. **Install Dependencies**:
   - For the backend: `npm install`
   - For the frontend: `npm install`

3. **Run the Application**:
   - Backend: `npx nodemon index.js`
   - Frontend: `npm run dev`

Feel free to explore my repositories, contribute to the projects, or reach out for collaboration! 😊
