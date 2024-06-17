// const buttons = document.querySelectorAll('button');
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink));


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (
        (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100)
    ) {
        document.querySelector('.shadow').style.display = 'block';
    } else {
      document.querySelector('.shadow').style.display = 'none'
  }
}


// Get the root element
let t = document.querySelector('.topHeaderA')
var getRoot = document.querySelector(':root');
var getBody = document.querySelector('body')
const getMoon = document.querySelector('.moonget');
const getSun = document.querySelector('.sunget');
t.addEventListener('click', setcolor)
var flag = true;

function setcolor(e) {
    e.preventDefault();

    if (flag == false) {
        getMoon.style.display = 'none'
        getSun.style.display = 'block'
        flag = true

        getRoot.style.setProperty('--navbackcolor', '#222327');
        getRoot.style.setProperty('--yellow', 'rgb(255, 0, 0)');
        getRoot.style.setProperty('--azure', 'rgb(0, 0, 0)');
        getRoot.style.setProperty('--white', 'rgb(0, 0, 0)');
        getRoot.style.setProperty('--back', 'rgb(255, 255, 255)');
        getRoot.style.setProperty('--aliceblue', 'rgb(0, 0, 0)');
        getRoot.style.setProperty('--backColor', 'white');
        getRoot.style.setProperty('--textcolor', 'white');
        getRoot.style.setProperty('--blue', 'red');
        getRoot.style.setProperty('--red', '#0582ff');
        getRoot.style.setProperty('--shadowColor', 'rgba(255, 255, 255, 0.366)');

        getBody.style.backgroundImage = 'repeating-linear-gradient(45deg, rgb(255 255 255 / 90%) 0%, rgb(255 255 255 / 3%) 25%, transparent 25%, rgba(0, 0, 0, 0.10) 50%)'
        getBody.style.backgroundSize = '11rem'

    } else {
        getSun.style.display = 'none'
        getMoon.style.display = 'block'

        flag = false

        getRoot.style.setProperty('--yellow', 'yellow');
        getRoot.style.setProperty('--blue', '#0582ff');
        getRoot.style.setProperty('--azure', 'azure');
        getRoot.style.setProperty('--white', 'white');
        getRoot.style.setProperty('--back', 'black');
        getRoot.style.setProperty('--darkblue', 'darkblue');
        getRoot.style.setProperty('--aliceblue', 'aliceblue');
        getRoot.style.setProperty('--backColor', 'rgb(3, 2, 27)');
        getRoot.style.setProperty('--navbackcolor', '#fff');
        getRoot.style.setProperty('--textcolor', 'black');
        getRoot.style.setProperty('--shadowColor', 'rgba(0, 0, 0, 0.366)');

        getBody.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%)'
        getBody.style.backgroundSize = 'auto'

    }

}


// Slider

var getbtnclose = document.querySelector('.btn-close')

var getskillhtml = document.querySelector('.skillhtml');
var getskilljs = document.querySelector('.skilljs');
var getskillreact = document.querySelector('.skillreact')
var getskillnode = document.querySelector('.skillnode');

var change_title_name_skillmodel = document.getElementById('change-title-name-skillmodel')
var img_model_1 = document.getElementById('imgmodel1')
var img_model_2 = document.getElementById('imgmodel2')
var changelogo = document.getElementById('changelogo')


var a = document.querySelectorAll('.skillphoto');
var b = document.querySelectorAll('.dot');
var change_href = document.querySelector('.changeHref')


// For HTML PROJECT
getskillhtml.addEventListener('click', addmodel)
getskilljs.addEventListener('click',addmodel)
getbtnclose.addEventListener('click', closemodel)

// For REACT PROJECT
getskillreact.addEventListener('click',addmodel)
getskillnode.addEventListener('click',addmodel)




function addmodel(event) {
    // console.log(event.target)
    if(event.target.id == 'react-react' || event.target.id == 'nodejs-nodejs'){
        change_title_name_skillmodel.innerText = "Ecommerce App"
        change_href.setAttribute('href','https://mern-ecommerce-kappa-green.vercel.app/')
        img_model_1.src = '../img/ecommerceapp.webp'
        img_model_2.src = '../img/chatapp.webp'
        changelogo.innerHTML = `
                                <svg style='margin-right:1rem;' fill="#53C1DE" width="10rem" height="12rem" viewBox="0 0 32 32">
                    <path id="react-react"
                        d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z" />
                </svg>
                <svg
                width="10rem" height="12rem" viewBox="0 -99 512 512" preserveAspectRatio="xMidYMid">

                    <defs>

                        <linearGradient x1="68.188%" y1="17.487%" x2="27.823%" y2="89.755%" id="b">

                            <stop stop-color="#41873F" offset="0%" />

                            <stop stop-color="#418B3D" offset="32.88%" />

                            <stop stop-color="#419637" offset="63.52%" />

                            <stop stop-color="#3FA92D" offset="93.19%" />

                            <stop stop-color="#3FAE2A" offset="100%" />

                        </linearGradient>

                        <path id="a"
                            d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z" />

                        <linearGradient x1="43.277%" y1="55.169%" x2="159.245%" y2="-18.306%" id="d">

                            <stop stop-color="#41873F" offset="13.76%" />

                            <stop stop-color="#54A044" offset="40.32%" />

                            <stop stop-color="#66B848" offset="71.36%" />

                            <stop stop-color="#6CC04A" offset="90.81%" />

                        </linearGradient>

                        <linearGradient x1="-4413.77%" y1="13.43%" x2="5327.93%" y2="13.43%" id="e">

                            <stop stop-color="#6CC04A" offset="9.192%" />

                            <stop stop-color="#66B848" offset="28.64%" />

                            <stop stop-color="#54A044" offset="59.68%" />

                            <stop stop-color="#41873F" offset="86.24%" />

                        </linearGradient>

                        <linearGradient x1="-4.389%" y1="49.997%" x2="101.499%" y2="49.997%" id="f">

                            <stop stop-color="#6CC04A" offset="9.192%" />

                            <stop stop-color="#66B848" offset="28.64%" />

                            <stop stop-color="#54A044" offset="59.68%" />

                            <stop stop-color="#41873F" offset="86.24%" />

                        </linearGradient>

                        <linearGradient x1="-9713.77%" y1="36.21%" x2="27.93%" y2="36.21%" id="g">

                            <stop stop-color="#6CC04A" offset="9.192%" />

                            <stop stop-color="#66B848" offset="28.64%" />

                            <stop stop-color="#54A044" offset="59.68%" />

                            <stop stop-color="#41873F" offset="86.24%" />

                        </linearGradient>

                        <linearGradient x1="-103.861%" y1="50.275%" x2="100.797%" y2="50.275%" id="h">

                            <stop stop-color="#6CC04A" offset="9.192%" />

                            <stop stop-color="#66B848" offset="28.64%" />

                            <stop stop-color="#54A044" offset="59.68%" />

                            <stop stop-color="#41873F" offset="86.24%" />

                        </linearGradient>

                        <linearGradient x1="130.613%" y1="-211.069%" x2="4.393%" y2="201.605%" id="i">

                            <stop stop-color="#41873F" offset="0%" />

                            <stop stop-color="#418B3D" offset="32.88%" />

                            <stop stop-color="#419637" offset="63.52%" />

                            <stop stop-color="#3FA92D" offset="93.19%" />

                            <stop stop-color="#3FAE2A" offset="100%" />

                        </linearGradient>

                    </defs>

                    <g fill="none">

                        <path
                            d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965 3.12-1.04 3.698-1.272 6.934-3.12.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105 0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156.925 6.125 3.583 9.13 15.834 9.13 9.708 0 13.87-2.196 13.87-7.397 0-3.005-1.157-5.2-16.297-6.703-12.598-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.91 21.035-14.91 14.793 0 22.075 5.086 23 16.18 0 .348-.116.694-.347 1.041-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04-1.387-6.356-4.97-8.437-14.447-8.437-10.633 0-11.905 3.699-11.905 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.85 20.92 4.508 20.92 14.447-.116 10.171-8.437 15.95-23.116 15.95z"
                            fill="#539E43" />

                        <path
                            d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643c.925.578 2.08.578 3.005 0 .925-.463 1.503-1.503 1.503-2.543l-.116-75.817zM345.571.347c-.924-.463-2.08-.463-2.89 0-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417zM508.648 124.244c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543 0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 0 1 3.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542.925.578 2.08.578 3.005 0l29.125-16.99z"
                            fill="#333" />

                        <path
                            d="M456.293 121.586a1.05 1.05 0 0 1 1.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z"
                            fill="#539E43" />

                        <g transform="translate(134.068 70.501)">

                            <mask id="c" fill="#ffffff">

                                <use xlink:href="#a" />

                            </mask>

                            <use fill="url(#b)" xlink:href="#a" />

                            <g mask="url(#c)">

                                <path
                                    d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693zM56.632 125.053c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z" />

                                <path
                                    d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z"
                                    fill="url(#d)" />

                            </g>

                            <g mask="url(#c)">

                                <path
                                    d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z" />

                                <path fill="url(#e)" fill-rule="evenodd" d="M50.391.809l-.693.347h.924l-.231-.347z"
                                    transform="translate(0 -9.246)" />

                                <path
                                    d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2z"
                                    fill="url(#f)" fill-rule="evenodd" transform="translate(0 -9.246)" />

                                <path fill="url(#g)" fill-rule="evenodd" d="M111.3 104.712l-.347-.578v.809l.346-.231z"
                                    transform="translate(0 -9.246)" />

                                <path
                                    d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                                    fill="url(#h)" fill-rule="evenodd" transform="translate(0 -9.246)" />

                                <path
                                    d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                                    fill="url(#i)" fill-rule="evenodd" transform="translate(0 -9.246)" />

                            </g>

                        </g>

                    </g>

                </svg>
        
        `
        var e = document.getElementsByClassName('closemodel');
        e[0].style.display = 'flex'
    }else if(event.target.id == 'html-html' || event.target.id == 'js-js'){
        change_title_name_skillmodel.innerText = "Travel Website"
        change_href.setAttribute('href','https://bright-empanada-bf7284.netlify.app/')
        img_model_1.src = '../img/travelwebsite.webp'
        img_model_2.src = '../img/mcqswebsite.webp'
        changelogo.innerHTML = `
                                    <svg style="font-size:8rem; margin-right:2rem;" width="8rem" height="8rem" viewBox="-52.5 0 361 361" version="1.1" preserveAspectRatio="xMidYMid"><g><path d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z" fill="#E44D26"></path><path d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z" fill="#F16529"></path><path d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z" fill="#EBEBEB"></path><path d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z" fill="#EBEBEB"></path><path d="M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z" fill="#000000"></path><path d="M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z" fill="#000000"></path><path d="M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z" fill="#000000"></path><path d="M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z" fill="#000000"></path><path d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z" fill="#FFFFFF"></path><path d="M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z" fill="#FFFFFF"></path></g></svg>
                        <svg style="font-size:8rem; margin-right:2rem;" width="8rem" height="8rem" viewBox="-52.5 0 361 361" version="1.1" preserveAspectRatio="xMidYMid">
                    <g>
                        <path
                            d="M127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L127.843868,360.087912 Z"
                            fill="#264DE4">

                        </path>
                        <path
                            d="M212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L212.416703,314.546637 L212.416703,314.546637 Z"
                            fill="#2965F1">

                        </path>
                        <path
                            d="M53.6685714,188.636132 L56.530989,220.572835 L128,220.572835 L128,188.636132 L53.6685714,188.636132 L53.6685714,188.636132 Z"
                            fill="#EBEBEB">

                        </path>
                        <path
                            d="M47.917011,123.994725 L50.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L47.917011,123.994725 Z"
                            fill="#EBEBEB">

                        </path>
                        <path
                            d="M128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L128,271.580132 Z"
                            fill="#EBEBEB">

                        </path>
                        <path
                            d="M60.4835165,0 L99.1648352,0 L99.1648352,16.1758242 L76.6593407,16.1758242 L76.6593407,32.3516484 L99.1648352,32.3516484 L99.1648352,48.5274725 L60.4835165,48.5274725 L60.4835165,0 L60.4835165,0 Z"
                            fill="#000000">

                        </path>
                        <path
                            d="M106.901099,0 L145.582418,0 L145.582418,14.0659341 L123.076923,14.0659341 L123.076923,16.8791209 L145.582418,16.8791209 L145.582418,49.2307692 L106.901099,49.2307692 L106.901099,34.4615385 L129.406593,34.4615385 L129.406593,31.6483516 L106.901099,31.6483516 L106.901099,0 L106.901099,0 Z"
                            fill="#000000">

                        </path>
                        <path
                            d="M153.318681,0 L192,0 L192,14.0659341 L169.494505,14.0659341 L169.494505,16.8791209 L192,16.8791209 L192,49.2307692 L153.318681,49.2307692 L153.318681,34.4615385 L175.824176,34.4615385 L175.824176,31.6483516 L153.318681,31.6483516 L153.318681,0 L153.318681,0 Z"
                            fill="#000000">

                        </path>
                        <path
                            d="M202.126769,188.636132 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.932132 L172.892132,155.932132 L169.98611,188.636132 L127.889582,188.636132 L127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L202.126769,188.636132 Z"
                            fill="#FFFFFF">

                        </path>
                    </g>
                </svg>
                        <svg style="font-size:8rem; margin-right:2rem;" width="8rem" height="8rem" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid"><g><path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"></path><path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000"></path><path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000"></path></g></svg>
        `
        var e = document.getElementsByClassName('closemodel');
        e[0].style.display = 'flex'
    }
}

function closemodel() {
    var d = document.getElementsByClassName('closemodel');
    d[0].style.display = 'none'
    slider(0)
}

var index = 0
function add(n) {
    
    index = n
    slider(index)

    if((change_title_name_skillmodel.innerText == "Ecommerce App" || change_title_name_skillmodel.innerText == "Chat Application")){
        if(index==0){
         
            change_title_name_skillmodel.innerText = "Ecommerce App"
            change_href.setAttribute('href','https://mern-ecommerce-kappa-green.vercel.app/')
        }else {
           
            change_title_name_skillmodel.innerText = "Chat Application"
            change_href.setAttribute('href','https://mernchatfrontent.vercel.app/')
        }
    }else if(change_title_name_skillmodel.innerText == "Travel Website" || change_title_name_skillmodel.innerText == "Quiz App"){
        console.log(change_title_name_skillmodel.innerText)
        if(index==0){
            change_title_name_skillmodel.innerText = "Travel Website"
            change_href.setAttribute('href','https://bright-empanada-bf7284.netlify.app/')
        }else {
            change_title_name_skillmodel.innerText = "Quiz App"
            change_href.setAttribute('href','https://mcqsdemo.netlify.app/')
        }
    }

}
function slider(index) {
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = 'none'
        b[i].style.background = 'white'
    }

    a[index].style.display = 'block'
    b[index].style.background = 'red'

}
slider(index)
