function resolveAfter1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}


async function asyncCall() {
  'use strict';
  const result = await resolveAfter1Second();

  // Create the avatar icon and link
  const node = document.createElement("div");
    node.setAttribute("id", "blogicon");
    node.setAttribute("class", "RYkKH");
  node.setAttribute("data-map", "avatar");
  node.setAttribute("style", "position: absolute; left: -85px;");
    let html = '<div class="nZ9l5" role="figure" aria-label="avatar" data-map="avatarWrapper"><a href="#" title="serpcntes" role="link" class="BSUG4" tabindex="0" data-map="blogLink"><div class="j4akp" style="width: 64px; height: 64px;" data-map="avatar"><img class="RoN4R tPU70" src="serpcntes_snak.e_icon.png" alt="Avatar" style="width: 64px; height: 64px;" loading="eager" data-map="image visible"></div></a></div>';
  node.innerHTML = html;

  // Find the posting options bar and add in the icon
  const bar = document.getElementsByClassName("wttFd")[0];
  bar.appendChild(node);

  // Add click event listener to the link
  const link = node.querySelector("[data-map='blogLink']");
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    // Open the blog content as an overlay
    openOverlay("https://tumblr.com/serpcntes");
  });
}

// Function to open content as an overlay
function openOverlay(url) {
  console.log("Opening overlay for:", url);
}

asyncCall();
