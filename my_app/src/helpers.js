
module.exports = {

    getRandomItemFromArray(array) {
        let index = array[Math.floor(Math.random() * array.length)];
        return index;
    },

}



