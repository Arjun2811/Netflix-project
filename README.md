Netflix Clone

Overview
This project is a Netflix clone that offers a comprehensive streaming experience with user authentication, subscription management, and a diverse movie catalog sourced from The Movie Database (TMDb) API. It features Stripe integration for secure payment processing and provides a user-friendly interface across multiple screens.

Features
1.User Authentication: Secure sign-up and login functionality.
2.Movie Catalog: Extensive movie collection sourced from TMDb API, including:
  -Trending movies and TV shows
  -Netflix Originals
  -Top-rated content
  -Genre-specific categories (Action, Comedy, Horror, Romance, Documentaries)
3.Subscription Management:
4.Integration with Stripe for secure payment processing
5.Multiple subscription plans
6.Storage of user subscription details (type, renewal date) in the database
7.User-friendly Interface:
  -7 main screens: Profile, Signup, Login, Home, ChatgptScreen, PlanScreen, Movie Description Screen
8.Personalized Experience: User profiles with subscription information

Technology Used
1.React.js for frontend development
2.Redux for state management
3.Firebase for backend and authentication
4.Stripe API for payment processing
5.TMDb API for movie data
6.HTML5 and CSS3 for structure and styling
7.JavaScript (ES6+) for functionality

Prerequisites
1.Node.js and npm installed on your machine
2.Stripe account for payment integration
3.TMDb API key
4.Firebase project set up

Setup Instructions
1.Clone the repository:
git clone https://github.com/your-username/netflix-clone-arjun.git
cd netflix-clone-arjun


2.Install dependencies:
 -npm install


3.Set up Firebase:
 -Create a Firebase project and add your configuration to the app

4.Set up Stripe:
  -Create a Stripe account and obtain your API keys
  -Configure Stripe in your backend to handle payments

5.Start the development server:
  -npm start

6.Open http://localhost:3000 in your browser to view the application

Usage
1.Users can sign up or log in to access the full features of the application
2.Browse through different categories of movies on the home screen
3.Select a subscription plan and complete the payment process using Stripe
4.Enjoy unlimited access to the movie catalog based on the chosen subscription
































