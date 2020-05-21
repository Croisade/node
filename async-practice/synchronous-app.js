//Sync code example

console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}
function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

async function displayUser() {
  try {
    const loggedUser = await loginUser("ed", "12485");
    const Videos = await getUserVideos(loggedUser.userEmail);
    const Details = await videoDetails(Videos[0]);
    console.log(Details);
  } catch (err) {
    console.log("We could not get the videos");
  }
}

displayUser();
console.log("end");
