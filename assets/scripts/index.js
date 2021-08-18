const rotFrameElementId = 'rotating-frame'

function rotateHtml (page) {
    console.log(`Grabbing element: ${rotFrameElementId}`)

    iframe_target = document.getElementById(rotFrameElementId)

    console.log(`Attempting to get page: ${page}`)
    switch (page) {
        case 'home':
            iframe_target.src = './pages/home.html'
            console.log('Page grabbed and displayed!')
            break;
        case 'about':
            iframe_target.src = './pages/about.html'
            console.log('Page grabbed and displayed!')
            break;
        case 'links':
            iframe_target.src = './pages/links.html'
            console.log('Page grabbed and displayed!')
            break;
        case 'fun':
            iframe_target.src = './pages/fun.html'
            console.log('Page grabbed and displayed!')
            break;
        case 'downloads':
            iframe_target.src = './pages/downloads.html'
            console.log('Page grabbed and displayed!')
            break;
        default:
            console.error(`Page not found: ${page}`)
            break;
    }
};