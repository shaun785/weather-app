export const fetchWeather = (query) => {
    return {
        main: {
            temp: 30
        }, 
        name: 'Sydney',
        sys: {
            country: 'Australia'
        },
        weather: [
            {
                icon: 'Cloudy',
                description: 'Cloudy'
            }
        ] 
    };
}
