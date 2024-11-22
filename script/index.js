// ================= HEADER =================
const header = document.createElement('header')
const header_top_block = document.createElement('div')
header_top_block.className = 'header_top_block'
const logo = document.createElement('img')
logo.src = './logo/logo.png'
logo.alt = 'logo'
const main_title = document.createElement('h1')
main_title.textContent = 'SLOGAN SLOGAN SLOGAN'
// =================================================


// ================= NAV =================
const nav = document.createElement('nav')
const ul_list = document.createElement('ul')
ul_list.className = 'menu'

const navArr = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты'];

navArr.forEach(el => {
    const list = document.createElement('li')
    const link = document.createElement('a')

    link.className = 'menu__item'
    link.textContent = el
    link.href = '#'

    ul_list.append(list)
    list.append(link)
});
// =================================================


// ================= MAIN =================
const main = document.createElement('main')

// ================= SECTION ONE =================
const sectionOne = document.createElement('section')
sectionOne.className = 'one'

const sectionOneArr = ['Часто ли Вы опаздываете на работу (учебу?)']

for (let i = 0; i < 3; i++) {
    const question_card = document.createElement('div')
    question_card.className = 'question_card'

    const question_card_img = document.createElement('img')
    question_card_img.src = './images/question.png'
    question_card_img.alt = 'question'

    const question_card_text = document.createElement('p')
    question_card_text.textContent = sectionOneArr[i]

    question_card.append(question_card_img, question_card_text)
    sectionOne.append(question_card)
}
// =================================================


// ================= SECTION TWO ===================
const sectionTwo = document.createElement('section')
sectionTwo.className = 'two'

const sectionTwoH2 = document.createElement('h2')
sectionTwoH2.textContent = 'О приложении'

const about_app = document.createElement('div')
about_app.className = 'about_app'

const app_img = document.createElement('img')
app_img.className = 'app_img'
app_img.src = './images/about.png'
app_img.alt = 'app_img'

const app_btn = document.createElement('img')
app_btn.className = 'app_btn'
app_btn.src = './logo/play-button.png'

// =================================================


// ================= SECTION THREE =================
const sectionThree = document.createElement('section')
sectionThree.className = 'three'

const gallery = document.createElement('div')
gallery.className = 'gallery'

const gallery__container = document.createElement('div')
gallery__container.className = 'gallery__container'

for (i = 0; i < 5; i++) {
    const gallery__container_img = document.createElement('img')
    gallery__container_img.src = './images/row.png'
    gallery__container_img.alt = 'row'
    gallery__container.append(gallery__container_img)
}
// =================================================


// ================= SECTION FOUR =================
const sectionFour = document.createElement('section')
sectionFour.className = 'four'

const sectionFourH2 = document.createElement('h2')
sectionFourH2.textContent = 'О проекте'

const about__project = document.createElement('div')
about__project.className = 'about__project'

const about__project_text = document.createElement('p')

about__project_text.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6недель. Опытные
                    бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развитияих
                    бизнеса: от разработки идеи до ее реализации.`;

// =================================================


// ================= SECTION FIVE =================
const sectionFive = document.createElement('section')
sectionFive.className = 'five'

const sectionFiveH2 = document.createElement('h2')
sectionFiveH2.textContent = 'Скачать'

const container = document.createElement('div')
container.className = 'container'

const android = document.createElement('div')
android.className = 'android'

const android_img = document.createElement('img')
android_img.src = './logo/android.png'
android_img.alt = 'android'

const qr = document.createElement('div')
qr.className = 'qr'

const qr_img = document.createElement('img')
qr_img.src = './logo/icon.png'
qr_img.alt = 'qr'

const sectionFive_text = document.createElement('p')
sectionFive_text.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные
                бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их
                бизнеса: от разработки идеи до ее реализации.`
// =================================================

// ================= FOOTER =================
const footer = document.createElement('footer')
const footerH2 = document.createElement('h2')
footerH2.textContent = 'SOME'
// === //
const footerSocials = document.createElement('div')
footerSocials.className = 'footer__socials'

const vk = document.createElement('div')
vk.className = 'vk'
const vkLogo = document.createElement('img')
vkLogo.src = './logo/vk.png'

const instagram = document.createElement('div')
instagram.className = 'instagram'
const instagramLogo = document.createElement('img')
instagramLogo.src = './logo/instagram (1).png'

const facebook = document.createElement('div')
facebook.className = 'facebook'
const facebookLogo = document.createElement('img')
facebookLogo.src = './logo/facebook.png'
// == //
const footerItems = document.createElement('div')
footerItems.className = 'footer__items'
// == //
const contacts = document.createElement('div')
contacts.className = 'contacts'

const contactsH3 = document.createElement('h3')
contactsH3.textContent = 'Контакты'

const phone = document.createElement('p')
phone.textContent = 'Tel.: +996 (996) 508680534 +'

const ext = document.createElement('p')
ext.textContent = 'Ext.'

const fax = document.createElement('p')
fax.textContent = 'Fax: +996 508680534'
// == //
const adress = document.createElement('div')
adress.className = 'adress'

const adressH3 = document.createElement('h3')
adressH3.textContent = 'Адреса'

const university = document.createElement('p')
university.textContent = 'American University of Central Asia'

const street = document.createElement('p')
street.textContent = '7/6 Aaly Tokombaev Street'

const city = document.createElement('p')
city.textContent = 'Bishkek, Kyrgyz Republic 720060'

const help = document.createElement('div')
help.className = 'help'

const helpH3 = document.createElement('h3')
helpH3.textContent = 'Помощь'
help.append(helpH3)

helpArr = ['Помощь', 'Помощь', 'Помощь']

helpArr.forEach(el => {
    const helpText = document.createElement('p')
    helpText.textContent = el
    help.append(helpText)
})

// Добавление в HTML
const body = document.body


// HEADER //
body.append(header)
header.append(header_top_block, nav)
header_top_block.append(logo, main_title)


// NAV //
nav.append(ul_list)


// MAIN //
body.append(main)
// main.append(sectionThree, sectionFour, sectionFive)


// SECTION ONE //
main.append(sectionOne)


// SECTION TWO //
main.append(sectionTwo)
sectionTwo.append(sectionTwoH2, about_app,)
about_app.append(app_img, app_btn)


// SECTION THREE //
main.append(sectionThree)
sectionThree.append(gallery)
gallery.append(gallery__container)


// SECTION FOUR //
main.append(sectionFour)
sectionFour.append(sectionFourH2, about__project)
about__project.append(about__project_text)


// SECTION FIVE //
main.append(sectionFive)
sectionFive.append(sectionFiveH2, container, sectionFive_text)
container.append(android, qr)
android.append(android_img)
qr.append(qr_img)


// FOOTER //
body.append(footer)
footer.append(footerH2, footerSocials, footerItems)
footerSocials.append(vk, instagram, facebook)
vk.append(vkLogo)
instagram.append(instagramLogo)
facebook.append(facebookLogo)

footerItems.append(contacts, adress, help)
contacts.append(contactsH3, phone, ext, fax)
adress.append(adressH3, university, street, city)
