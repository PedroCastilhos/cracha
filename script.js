function showMeSomething(teste) {
  return alert(links.instagram);
}

const links = {
  github: 'Pedrocastilhos',
  youtube: 'UCRyPWUDr73BJfKiemoAUZBA',
  facebook: 'pedrocastilhospdc',
  instagram: 'pedrocstlhs',
  twitter: 'pedrocstlhs',
};

// function changeSocialMediaLinks() {
//   for (let li of socialLinks.children) {
//     const social = li.getAttribute('class');
//     li.children[0].href = `https://www.${social}.com/${links[social]}`;
//     alert(li.children[0].href);
//   }
// }

//changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImg.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();

/* Arrow function

function nomeDaFuncao(){}

() => {}

*/
