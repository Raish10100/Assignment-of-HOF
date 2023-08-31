/*Build a feature for Store's inventory. */
/*Suppose a store has a list of items and their prices in US Dollars stored as an object create a javaScript program to convert
the prices to indian Rupees using an exchange rate of 1 USD to 80INR .THe program should use the map higher-order function to
create a new object with the converted prices in Rupees. */


const exchangeRate = 80;

const items = { laptop: 1000,phone: 500,headphones: 100,camera: 800};

const convertedPrices = Object.entries(items).map(
    ([items,price]) => ({items,priceUSD:price,priceINR:price * exchangeRate})
)

console.log(convertedPrices)