let infoButton;
let formButton;
let infoSection;
let formSection;
let linkContent;

let emptyDiv = '<div></div>';
let infoHTML = `
  <div class="bl-info-content">
    <div class="bl-hero-section">
      <div class="bl-hero-content bl-link-container">
        <div class="bl-hero-text">
          <h1 class="bl-hero-title">If you fundraise for us, we'll <font class="bl-title-font">pay you</font> 5% of the amount you raise!</h1>
          <h2 class="bl-hero-subtitle">Anyone can fundraise, no accounts required, and it takes just 5 minutes to get started.</h2>
        </div>
        <div class="bl-hero-image-container">
          <img class="bl-link-image" alt="hero" src="https://benefact.co/static/media/hero.c163405c.svg"></img>
        </div>
      </div>
    </div>
    <div class="bl-how-section">
      <div class="bl-link-container">
        <h2 class="bl-how-title">How It Works</h2>
        <div class="bl-how-container">
          <div id="how-1" class="bl-how-card">
            <img class="bl-link-image bl-how-image" alt="create-campaign" src="https://benefact.co/static/media/list.bee21740.svg"></img>
            <h3 class="bl-how-heading">Create your campaign</h3>
            <p class="bl-how-subtext">It only takes 1 minute. We've already created the campaign page for you, all you have to do is personalize it.</p>
          </div>
          <div id="how-2" class="bl-how-card">
            <img class="bl-link-image bl-how-image" alt="spread-word" src="https://benefact.co/static/media/share.c6ae2980.svg"></img>
            <h3 class="bl-how-heading">Spread the word</h3>
            <p class="bl-how-subtext">After we email you your campaign link, tell everyone about your campaign. The more people donate, the more you'll earn.</p>
          </div>
          <div id="how-3" class="bl-how-card">
            <img class="bl-link-image bl-how-image" alt="get-paid" src="https://benefact.co/static/media/pay.5b87ebb1.svg"></img>
            <h3 class="bl-how-heading">Get paid</h3>
            <p class="bl-how-subtext">We'll pay you 5% of the amount you raised and send you an Impact Report so that you can see and share the impact you made.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bl-question-section">
      <div class="bl-question-content">
        <h2 class="bl-question-title">Have questions?</h2>
        <button type="button" class="bl-collapsible">
          <p class="bl-collapsible-title">What can I do to fundraise?</p>
          <i class="bi-chevron-down bl-collapsible-icon"></i>
        </button>
        <div class="bl-content">
          <div class="bl-collapsible-text">
            <ul style="list-style-type:disc; padding-inline-start:1rem;">
              <li class="bl-bullet">Tell your friends and family to donate</li>
              <li class="bl-bullet">Dedicate your birthday to raise money</li>
              <li class="bl-bullet">Hold a concert and collect donations</li>
              <li class="bl-bullet">Do a wacky dare, such as shaving your head if you reach your donation goal</li>
            </ul>
            <p style="line-height:1.3rem;">Remember - these are suggestions, not rules! If you want more ideas like these, check out our <a href="https://benefact.co/ideas" target="_blank" style="color:#34d399;">Idea Bank</a>.</p>
          </div>
        </div>
        <div class="bl-spacer"></div>
        <button type="button" class="bl-collapsible">
          <p class="bl-collapsible-title">Who's eligible to fundraise?</p>
          <i class="bi-chevron-down bl-collapsible-icon"></i>
        </button>
        <div class="bl-content">
          <div class="bl-collapsible-text">
            <ul style="list-style-type:disc; padding-inline-start:1rem;">
              <li class="bl-bullet">You must have a valid US bank account (in order to accept your payment)</li>
              <li class="bl-bullet">
                If you are an existing fundraiser for Sharing Excess or running an existing fundraiser (e.g., a college fundraiser at one of our college branches), then you are ineligible to fundraise here at this time. 
                However, if you graduate and want to run your own fundraiser here, you are eligible to do so. 
              </li>
            </ul>
          </div>
        </div>
        <div class="bl-spacer"></div>
        <button type="button" class="bl-collapsible">
          <p class="bl-collapsible-title">I want to learn more!</p>
          <i class="bi-chevron-down bl-collapsible-icon"></i>
        </button>
        <div class="bl-content">
          <div class="bl-collapsible-text">
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
  <div class="bl-launch-form">
    <iframe title="advocate-form" class="bl-launch-form" loading="lazy" src="https://docs.google.com/forms/d/e/1FAIpQLSeCmX3skh2AuTsJ-PM2vqUbpWfNj5iwBliloDBpbJodOTt4wA/viewform?embedded=true" width="100%" height="1225" frameborder="0" margin-height="0" margin-width="0">Loading…</iframe>
  </div>
`; 

window.onload = function() {
  let blButton = document.getElementById("bl-button");
  let modal = `
    <div class="bl-modal bl-modal-closed" id="bl-modal">
      <div class="bl-banner">
        <div class="bl-close" onclick="closeModal()">&times;</div>
        <div class="bl-buttons">
          <button id="info-button" class="bl-link-button bl-current bl-info-button" onclick="openInfo()">
            Fundraise & Earn
           </button>
          <button id="form-button" class="bl-link-button bl-form-button" onclick="openForm()">
            Sign Up Now
          </button>
        </div>
      </div>
      <div id="link-content"></div>
     </div>
  `;
  blButton.insertAdjacentHTML('afterend', modal);
  blButton.addEventListener('click', openModal);
  
  let isDemo = blButton.getAttribute('data-multiple');
  if (isDemo === 'true') {
    let buttonArr = document.getElementsByClassName('bl-button');
    for (let i = 0; i < buttonArr.length; i++) {
      buttonArr[i].addEventListener("click", openModal);
    }
  }
  
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
  let modal = document.getElementById("bl-modal");
  modal.classList.remove('bl-modal-closed');
}

function closeModal() {
  document.body.style.overflowY = 'scroll';
  let modal = document.getElementById("bl-modal");
  modal.classList.add('bl-modal-closed');
}

function openInfo() {
  formButton.classList.remove('bl-current');
  infoButton.classList.add('bl-current');
  linkContent.style.overflowY = 'auto';
  linkContent.innerHTML = infoHTML;
  setupCollapsibles();
}

function openForm() {
  formButton.classList.add('bl-current');
  infoButton.classList.remove('bl-current');
  linkContent.style.overflowY = 'hidden';
  linkContent.innerHTML = formHTML;
}

function setupCollapsibles() {
  let coll = document.getElementsByClassName("bl-collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("bl-active");
      let icon = this.querySelector('.bl-collapsible-icon');
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