var iframe = document.createElement("iframe");
iframe.setAttribute("src", "/");
iframe.setAttribute("id", 'watched');
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameBorder", "0");
iframe.setAttribute("OnLoad", "readViewPort()");
iframe.setAttribute("OnUnLoad", "");
iframe.style.border='0px';
iframe.style.left='0px';
iframe.style.top='0px';
iframe.style.width=(window.innerWidth - 20) + 'px';
iframe.style.height='2000px';
iframe.style.position='absolute';
iframe.style.visibility='visible';
iframe.style.zIndex='100000';
document.body.innerHTML = '';
document.body.appendChild(iframe);
console.log('oke')
