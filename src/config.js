export const GOOGLE_KEY = "AIzaSyDlF1gU5xJN1F5Nm6auPdqqtzREy5lnCQ0";
export const API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=25&key=${GOOGLE_KEY}`;
export const API_URL25 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video&key=${GOOGLE_KEY}`;
export const tagsData = ["All", "Music", "Live", "JavaScript", "Computer", "Sales", "Comedy", "All1", "Music1", "Live1", "JavaScript1", "Computer1", "Sales1", "Comedy1"];
export const commentAPI = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=${GOOGLE_KEY}`
export const fakeData = ["Everything will be alright!", "I can do it, then all can do it", "Believe in youself", "You can do it🌟", "Best is yet to come😌", "Self love", "JS is love!💖"];
export const fakeName = ["Ajay", "Namrata", "Akshay", "Nitish", "Riya", "Kunal", "Jayant", "Sharmila", "Pranav", "Aditi", "Nikita", "Abhishek"];

export const comments = [
    {
        name: "Divya",
        comment: "Good things take time!"
    },
    {
        name: "Divya",
        comment: "Godfidence!",
        replies: [
            {
                name: "Aditi",
                comment: "What is Godfidence?"
            },
            {
                name: "Akshay",
                comment: "Please explain!",
                replies: [
                    {
                        name: "Sharmila",
                        comment: "when god has better plans for u!"
                    },
                    {
                        name: "Ajay",
                        comment: "Being “Godfident” means that we totally rely on God for everything."
                    },
                    {
                        name: "Disha",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu metus eget nisl sollicitudin tincidunt.",
                        replies: [
                            {
                                name: "Nikita",
                                comment: "Maecenas eu metus eget nisl sollicitudin tincidunt."
                            },
                            {
                                name: "Ajay",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                            }]
                    },
                ]
            },
            {
                name: "Namrata",
                comment: "Hieee everything will be alright!"
            },
        ]
    },
    {
        name: "Akshay",
        comment: "Learn JS before starting with REACT!"
    },
    {
        name: "Divya",
        comment: "Yes we already watched Namaste JS!"
    },

]

export const randomText = () => {
    return fakeData[Math.floor(Math.random() * fakeData.length)];
}

export const randomName = () => {
    return fakeName[Math.floor(Math.random() * fakeName.length)];
}