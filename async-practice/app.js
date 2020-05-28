//Async code example

console.log('Start');

function loginUser(email, password, callback) {
	setTimeout(() => {
		callback ({userEmail: email})
	}, 1500);
}

function getUserVideos(email, callback){
	setTimeout(() => {
		callback (["video1", "video2", "video3"]);
	}, 1000);
}

const user = loginUser('jamal@jamal.com', 123456, user => {
	console.log(user);
	getUserVideos(user.UserEmail, videos =>{
		console.log(videos)
	});
});
console.log('end');
