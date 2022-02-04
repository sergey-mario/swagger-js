// const petService = require('./api/PetApi.js')

const petService = require('./api/PetApi.js')
// const petService = new PetApi();
const petService = new PetApi();
(async () => {
    const response = await petService.addPet({
        category: {
            name: "Pug"
        },
        name: "Alfie",
        photoUrls: [
            "https://previews.123rf.com/images/yannamelissa/yannamelissa2003/yannamelissa200300040/143335870-pug-dog-with-amedical-mask-and-sad-big-eyes-quarantine-and-isolation-duringcoronavirus.jpg"
        ],
        status: 'available'
    }, null)
// print result to console
    console.log(`Status: ${response.status}`)
    console.log(`Body: ${JSON.stringify(response.data, null, 2)}`)
})();
