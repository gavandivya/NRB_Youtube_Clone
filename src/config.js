export const GOOGLE_KEY = "AIzaSyDlF1gU5xJN1F5Nm6auPdqqtzREy5lnCQ0";
export const API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=25&key=${GOOGLE_KEY}`;
export const API_URL25 = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&forMine=true&maxResults=25&q=fun&type=video&key=${GOOGLE_KEY}`;
export const tagsData = ["All", "Music", "Live", "JavaScript", "Computer", "Sales", "Comedy", "All1", "Music1", "Live1", "JavaScript1", "Computer1", "Sales1", "Comedy1"];
export const commentAPI = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=${GOOGLE_KEY}`
export const comments = [
    {
        name: "Divya",
        comment: "Hieee everything will be alright!"
    },
    {
        name: "Divya",
        comment: "Hieee everything will be alright!",
        replies: [
            {
                name: "Nested",
                comment: "Hieee everything will be alright!"
            },
            {
                name: "Nested",
                comment: "Hieee everything will be alright!",
                replies: [
                    {
                        name: "Nested Nested",
                        comment: "Hieee everything will be alright!"
                    },
                    {
                        name: "Nested Nested",
                        comment: "Hieee everything will be alright!"
                    },
                ]
            },
            {
                name: "Nested",
                comment: "Hieee everything will be alright!"
            },
        ]
    },
    {
        name: "Divya",
        comment: "Hieee everything will be alright!"
    },
    {
        name: "Divya",
        comment: "Hieee everything will be alright!"
    },

]