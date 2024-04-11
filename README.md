# Morning Perk Cafe

Morning Perk Cafe is a web application designed to showcase coffee recipes and nearby coffee shops. Users can browse through a variety of coffee recipes, view detailed instructions, and discover nearby coffee shops using integrated Google Maps functionality.

## Features

- Browse and search for coffee recipes based on different types.
- View detailed recipe information including ingredients, steps, and summary.
- Explore nearby coffee shops using Google Maps integration.
- Responsive design for seamless user experience on different devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Pug (templating engine)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Spoonacular API (for recipe data), Google Maps API (for maps functionality)
- **Deployment**: Heroku

## Setup

1. Clone the repository:

git clone https://github.com/Lovepreet-G/Morning-Perk-Cafe.git

2. Install dependencies:

npm install


3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```
     PORT=8888
     DB_URL=<your_mongodb_connection_string>
     API_KEY_SPOONACULAR=<your_spoonacular_api_key>
     API_KEY_GOOGLE_MAPS=<your_google_maps_api_key>
     ```

4. Run the application:

npm index.js

5. Access the application in your web browser:

http://localhost:8888


## Deployment

The application is deployed on Render and can be accessed [here](https://morning-perk-cafe.onrender.com).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

