let infoButton;
let formButton;
let infoSection;
let formSection;
let linkContent;

let emptyDiv = '<div></div>';
let infoHTML = `
  <div class="info-content">
    <div class="hero-section">
      <div class="hero-content link-container">
        <div class="hero-text">
          <h1 class="hero-title">If you fundraise for us, we'll <font style="color:#34d399">pay you</font> 5% of the amount you raise!</h1>
          <h2 class="hero-subtitle">Anyone can fundraise, no accounts required, and it takes just 5 minutes to get started.</h2>
        </div>
        <div class="hero-image-container">
          <img class="link-image" alt="hero" src="https://benefact.co/static/media/hero.c163405c.svg"></img>
        </div>
      </div>
    </div>
    <div class="how-section">
      <div class="link-container">
        <h2 class="how-title">How It Works</h2>
        <div class="how-container">
          <div id="how-1" class="how-card">
            <img class="link-image how-image" alt="create-campaign" src="https://benefact.co/static/media/list.bee21740.svg"></img>
            <h3 class="how-heading">Create your campaign</h3>
            <p class="how-subtext">It only takes 1 minute. We've already created the campaign page for you, all you have to do is personalize it.</p>
          </div>
          <div id="how-2" class="how-card">
            <img class="link-image how-image" alt="spread-word" src="https://benefact.co/static/media/share.c6ae2980.svg"></img>
            <h3 class="how-heading">Spread the word</h3>
            <p class="how-subtext">After we email you your campaign link, tell everyone about your campaign. The more people donate, the more you'll earn.</p>
          </div>
          <div id="how-3" class="how-card">
            <img class="link-image how-image" alt="get-paid" src="https://benefact.co/static/media/pay.5b87ebb1.svg"></img>
            <h3 class="how-heading">Get paid</h3>
            <p class="how-subtext">We'll pay you 5% of the amount you raised and send you an Impact Report so that you can see and share the impact you made.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="question-section">
      <div class="question-content">
        <h2 class="question-title">Have questions?</h2>
        <button type="button" class="collapsible">
          <p class="collapsible-title">What can I do to fundraise?</p>
          <i class="bi-chevron-down collapsible-icon"></i>
        </button>
        <div class="content">
          <div class="collapsible-text">
            <ul style="padding-inline-start:1rem;">
              <li class="bullet">Tell your friends and family to donate</li>
              <li class="bullet">Dedicate your birthday to raise money</li>
              <li class="bullet">Hold a concert and collect donations</li>
              <li class="bullet">Do a wacky dare, such as shaving your head if you reach your donation goal</li>
            </ul>
            <p style="line-height:1.3rem;">Remember - these are suggestions, not rules! If you want more ideas like these, check out our <a href="https://benefact.co/ideas" target="_blank" style="color:#34d399;">Idea Bank</a>.</p>
          </div>
        </div>
        <div class="spacer"></div>
        <button type="button" class="collapsible">
          <p class="collapsible-title">Who's eligible to fundraise?</p>
          <i class="bi-chevron-down collapsible-icon"></i>
        </button>
        <div class="content">
          <div class="collapsible-text">
            <ul style="padding-inline-start:1rem;">
              <li class="bullet">You must have a valid US bank account (in order to accept your payment)</li>
              <li class="bullet">
                If you are an existing fundraiser for Sharing Excess or running an existing fundraiser (e.g., a college fundraiser at one of our college branches), then you are ineligible to fundraise here at this time. 
                However, if you graduate and want to run your own fundraiser here, you are eligible to do so. 
              </li>
            </ul>
          </div>
        </div>
        <div class="spacer"></div>
        <button type="button" class="collapsible">
          <p class="collapsible-title">I want to learn more!</p>
          <i class="bi-chevron-down collapsible-icon"></i>
        </button>
        <div class="content">
          <div class="collapsible-text">
            <p style="line-height:1.3rem;">
              Head to our partner’s website, <a href="https://benefact.co/nonprofits/sharingexcess" target="_blank" style="color:#34d399;">Benefact<a>, where you can learn all about this fundraise-to-earn initiative, sign up, and access tons of fundraising resources. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

let formHTML = `
  <div class="launch-form">
    <iframe title="advocate-form" class="launch-form" loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLSeCmX3skh2AuTsJ-PM2vqUbpWfNj5iwBliloDBpbJodOTt4wA/viewform?embedded=true" width="100%" height="1225" frameborder="0" margin-height="0" margin-width="0">Loading…</iframe>
  </div>
`; 

window.onload = function() {
  let soButton = document.getElementById("so-button");
  let modal = `
    <div class="modal modal-closed" id="so-modal">
      <div class="banner">
        <div class="close" onclick="closeModal()">&times;</div>
        <div class="buttons">
          <button id="info-button" class="link-button current info-button" onclick="openInfo()">
            Fundraise & Earn
           </button>
          <button id="form-button" class="link-button form-button" onclick="openForm()">
            Sign Up Now
          </button>
        </div>
      </div>
      <div id="link-content"></div>
     </div>
  `;
  soButton.insertAdjacentHTML('afterend', modal);
  soButton.addEventListener('click', openModal);
  infoButton = document.getElementById("info-button");
  formButton = document.getElementById("form-button");
  infoSection = document.getElementById("info-section");
  formSection = document.getElementById("form-section");
  linkContent = document.getElementById("link-content");
 
  linkContent.innerHTML = infoHTML;
  
  setupCollapsibles();
}

function openModal() {
  document.body.style.overflowY = 'hidden';
  let modal = document.getElementById("so-modal");
  modal.classList.remove('modal-closed');
}

function closeModal() {
  document.body.style.overflowY = 'scroll';
  let modal = document.getElementById("so-modal");
  modal.classList.add('modal-closed');
}

function openInfo() {
  formButton.classList.remove('current');
  infoButton.classList.add('current');
  linkContent.style.overflowY = 'auto';
  linkContent.innerHTML = infoHTML;
  setupCollapsibles();
}

function openForm() {
  formButton.classList.add('current');
  infoButton.classList.remove('current');
  linkContent.style.overflowY = 'hidden';
  linkContent.innerHTML = formHTML;
}

function setupCollapsibles() {
  let coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let icon = this.querySelector('.collapsible-icon');
      icon.classList.toggle("bi-chevron-down");
      icon.classList.toggle("bi-chevron-up");
      let content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}