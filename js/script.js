const channelOne = `
  <h1>Home</h1>
  <p>Hello! My name is Jean Rodriguez.</p>
  <p>This is my personal portfolio project for SDET.</p>
  <p>Check out all the channels!</p>
  <h6><a href="mailto:jcr75@njit.edu" target="_blank" title="Contact me!" style="text-decoration: none;">jcr75@njit.edu</a></h6>
`;
                    
const channelTwo = `
  <h1>About Me</h1>
  <p>I am a 17 year old boy born in the Dominican Republic.</p>
  <p>Two years after my birth, my family moved to Manhattan and we lived there for the majority of my life.</p>
  <p>After about 13 years, we settled down in New Jersey and we've been living here ever since.</p>
`;

const channelFive = `
  <h1>Education</h1>
  <p>I attended elementary and middle school at Washington Heights Academy in Inwood.</p>
  <p>For high school, I attended Urban Assembly Gateway School for Technology in Hell's Kitchen.</p>
  <p>When I moved to New Jersey, I attended and graduated from Dwight Morrow High School in Englewood, which is where I currently live.</p>
  <p>Now, I attend NJIT where I'm currently studying for a bachelor's degree in computing.</p>
`;

const channelSix = `
  <h1>Interests</h1>
  <h3>Programming</h3>
  <p>I have always been fascinated by computers. Ever since I was little, I was tinkering around on my computer discovering all of the cool things I could do, which eventually led to my passion of programming.</p>
  <h3>Exercising</h3>
  <p>I started hitting the gym when I was around thirteen years and I love going, whether it is to let off stress or just have fun.</p>
  <h3>Sports</h3>
  <p>I always loved playing sports such as badminton, football, volleyball, baseball, and more.</p>
  <h3>Hanging out with Friends</h3>
  <p>I love being around people, and I'm so grateful for the amazing people I have around me. Life is a lot more fun when you have people you can share good moments with, and I'll always appreciate those who live to enjoy and put a smile on other's faces.</p>
  <h3>Listening to Music</h3>
  <p>I have been around music all of my life, especially Latin music such as Bachata, Merengue, Salsa, and Reggaeton due to my years of living in New York. If you ever see me, chances are I'm listening to something.</p>
`;

const channelSeven = `
  <h1>Projects</h1>
  <h3>Robotics</h3>
  <p>I built LEGO robots for my high school robotics class. It involved programming the robots to do various tasks. These robots had wheels, arms, and had things such as light sensors and proximity sensors. The class was pretty fun, and to the annoyance of our teacher, me and my friend were usually goofing off instead of doing what we were supposed to do. We made them fight to the death and it turned out to be a tie.</p>
  <h3>Filmmaking</h3>
  <p>My after school program was really fun, it was nice to attend and I made a lot of friends there. One of the many activities we did was film, where they brought in a bunch of equipment like cameras and green screens and we let our creativity run wild. We had our own YouTube channel and created a bunch of silly videos.</p>
  <h3>Music Video</h3>
  <p>In high school, my spanish teacher had us group up and make music videos with our own songs. It was really fun to make, and everyone had done a really cool job. It was one of the many fun projects we did in that class.</p>
`;
                    
const channelNine = `
  <h1>Skills</h1>
  <h3>Programming</h3>
  <p>I program and have programmed in various programming languages such as C, Kotlin, Python, and more. And now, HTML/CSS/Javascript to make this!.</p>
  <h3>Problem Solving</h3>
  <p>As a side effect of the above, I have developed problem solving and critical thinking skills. It has also made me a more curious person.</p>
  <h3>Making People Laugh</h3>
  <p>I like to think I'm funny -- I'm often told I am. Assuming I haven't been lied to all my life, this is one of my favorite qualities of myself.</p>
`;

const channels = [null, channelOne, channelTwo, null, null, channelFive, channelSix, channelSeven, null, channelNine];
let currentChannel = 1;

window.onload = function() {
    changeChannel(currentChannel);
};

let screenToggle = false;
setInterval(() => {
  document.getElementById('tv').src = screenToggle ? '../assets/tv1.png' : '../assets/tv2.png';
  screenToggle = !screenToggle;
}, 100);

function changeChannel(channel) {
  currentChannel = channel;
  updateScreen()
}

function channelDown() {
  if (currentChannel > 0) {
  currentChannel--;
  updateScreen()
	}
}

function channelUp() {
  if (currentChannel < 9) {
  currentChannel++;
  updateScreen()
	}
}

function updateScreen() {
  const contentDiv = document.getElementById("content");
  const channelDiv = document.getElementById("channel");
  contentDiv.innerHTML = `<img src="../assets/static.gif" alt="tv static">`;
  channelDiv.src = `../assets/channels/channel${currentChannel}.png`;
  setTimeout(() => {
    if (channels[currentChannel] == null) {
      contentDiv.innerHTML = `<img src="../assets/static.gif" alt="tv static">`;
    }
    else {
      contentDiv.innerHTML = channels[currentChannel];
    }
  }, 300);
}

