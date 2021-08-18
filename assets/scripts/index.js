console.log('cum')

function rotateHtml (page) {
    iframe_target = document.getElementById('rotating-frame')

    if (page == 'home') {
        console.log('home')
        iframe_target.src = './pages/home.html'
    } else if (page == 'about') {
        console.log('about')
        iframe_target.src = './pages/about.html'
    } else if (page == 'links') {
        console.log('links')
        iframe_target.src = './pages/links.html'
    } else if (page == 'fun') {
        console.log('fun')
        iframe_target.src = './pages/fun.html'
    } else if (page == 'downloads') {
        console.log('downloads')
        iframe_target.src = './pages/downloads.html'
    }
};