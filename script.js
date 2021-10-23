const links = {
  github: 'RafaelSotero-dev',
  youtube: 'channel/UC0RX8DRLYhimnqIN-0z0bjA',
  instagram: 'rafsotero',
  facebook: 'rafael.rafa.7359447',
  twitter: 'raffzxd'
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${links[social]}`
  }
  
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLinkGitHub.href = data.html_url
    userGitHub.textContent = data.login
    userAvatar.src = data.avatar_url
  })

}

getGitHubProfileInfos()