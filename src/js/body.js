import image1 from '../assets/desktop/image-woman-in-videocall.jpg';
import image2 from '../assets/desktop/image-women-videochatting.jpg';
import image3 from '../assets/desktop/image-men-in-meeting.jpg';
import image4 from '../assets/desktop/image-man-texting.jpg';

const mainContainer = (content) => {
  const main = document.createElement('main');
  main.innerHTML = `
  <div class="flex-container">
  <div class="card">
    <div>
      <img src="${image1}" alt="image-woman-in-videocall">
    </div>
    <div>
      <img src="${image2}" alt="image-women-videochatting">
    </div>
  </div>
  <div class="card">
    <div>
      <img src="${image3}" alt="image-men-in-meeting">
    </div>
    <div>
      <img src="${image4}" alt="image-man-texting">
    </div>
  </div>
</div>
<div id="image-text">
  <p>Built for modern use</p>
  <p>Smarter meetings, all in one place</p>
  <p>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can
    join with invite-only team access, data encryption, and data export.</p>
</div>
<div id="section-marker-2">
  <div class="line">
    <hr>
  </div>
  <div class="circle">02</div>
</div>
    `;
  content.appendChild(main);
};
export default mainContainer;
