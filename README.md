# **WeatherApp**

### **A bit about this WeatherApp**

This WeatherApp gets live information from OpenWeatherMapAPI and shows hourly, daily and weekly information based on the city that is searched. 

# Tech Stack

This weather app is built using modern web technologies to ensure a responsive and efficient user experience. Below is a breakdown of the key components used in the project: 

## **Frontend**

- **Next.js**: This React-based framework is used for building the app's frontend. Next.js provides powerful features such as server-side rendering (SSR) and static site generation (SSG), which help in optimising the app for better performance and SEO. The framework also makes it easier to handle routing and API integrations. 
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development. Tailwind CSS provides a wide range of pre-build classes, making it easier to style components without writing custom CSS. This leads to a more consistent design and a faster development process. 

## **Data Fetching** 

- **Axios**: A promise-based HTTP client used for making requests to external APIs. In this app, Axios is used to interact with the OpenWeatherMap API, fetching real-time weather based on user input. 

## **API Integration**

- **OpenWeatherMap API**: This third-party API is used to retrieve weather data, including current conditions, forecasts, and other information. The app sends requests to the API based on the user's search query, and the data is then displayed in a user-friendly format. 

## **Notifications**

- **React Toastify**: A React library used for displaying customizable toast notifications in the app. React Toastify is utilised to provide feedback to users, 