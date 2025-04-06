import {
  insertIntoPosts,
  isMember,
  insertIntoMembers,
  getPosts,
} from "../db/queries.js";

function formatTimeLabel(timeLabel) {
  const timeComponents = timeLabel.split(" ");
  let time = Number(timeComponents[0]);

  if (time === 1) {
    let measurement = timeComponents[1];
    measurement = measurement.slice(0, -1);
    timeComponents[1] = measurement;
  }

  return timeComponents.join(" ");
}

async function trackPostsTime(posts, isMember = false) {
  const postsTimeTracker = {};

  posts.forEach((post) => {
    let secondsPassed = Math.floor((Date.now() - post.time) / 1000);
    const yearSeconds = 60 * 60 * 24 * 365;
    const monthSeconds = 60 * 60 * 24 * 30;
    const daySeconds = 60 * 60 * 24;
    const hourSeconds = 3600;
    const minuteSeconds = 60;

    let timeLabel;

    if (Math.floor(secondsPassed / yearSeconds) > 0) {
      timeLabel = `${Math.floor(secondsPassed / yearSeconds)} years ago`;
    } else if (Math.floor(secondsPassed / monthSeconds) > 0) {
      timeLabel = `${Math.floor(secondsPassed / monthSeconds)} months ago`;
    } else if (Math.floor(secondsPassed / daySeconds) > 0) {
      timeLabel = `${Math.floor(secondsPassed / daySeconds)} days ago`;
    } else if (Math.floor(secondsPassed / hourSeconds) > 0) {
      timeLabel = `${Math.floor(secondsPassed / hourSeconds)} hours ago`;
    } else if (Math.floor(secondsPassed / minuteSeconds) > 0) {
      timeLabel = `${Math.floor(secondsPassed / minuteSeconds)} minutes ago`;
    } else {
      timeLabel = `${secondsPassed} seconds ago`;
    }

    timeLabel = formatTimeLabel(timeLabel);
    postsTimeTracker[post.postid] = timeLabel;
  });

  return postsTimeTracker;
}

async function handleHomeReqs(req, res) {
  const posts = await getPosts();
  const postsTimeTracker = await trackPostsTime(posts);
  await insertIntoMembers("Kabera", "Samuel", "kaberanshutisamuel@gmail.com");

  res.render("index", {
    user: req.user,
    posts: posts,
    isMember: await isMember(req.user.email),
    postsTimeTracker: postsTimeTracker,
  });
}

function newpostGetReqs(req, res) {
  res.render("newPost.ejs", {
    user: req.user,
  });
}

async function newpostPostReqs(req, res) {
  const time = Date.now();
  const { id: userid, profileimage: image, firstname, lastname } = req.user;
  const { title, content } = req.body;
  const username = firstname + " " + lastname;

  await insertIntoPosts(userid, username, time, title, content, image);
  res.redirect("/");
}

export { handleHomeReqs, newpostGetReqs, newpostPostReqs };
