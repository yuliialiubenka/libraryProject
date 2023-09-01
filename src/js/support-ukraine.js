// import Swiper from 'swiper';
import Swiper from 'swiper';

import found1 from '../images/foundation-1.png';
import found2 from '../images/foundation-2.png';
import found3 from '../images/foundation-3.png';
import found4 from '../images/foundation-4.png';
import found5 from '../images/foundation-5.png';
import found6 from '../images/foundation-6.png';
import found7 from '../images/foundation-7.png';
import found8 from '../images/foundation-8.png';
import found9 from '../images/foundation-9.png';

function createFundsMarkup(funds) {
  const markup = funds
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      const foundImage = fund.img;
      return `
        <div class="funds__carousel-item swiper-slide">
          <span class="funds__carousel-item-number">${foundIndex}</span>
          <a class='funds__carousel-item-link' href="${fund.url}" target="_blank" crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${fund.title}">
            <img class="funds__carousel-item-img" src="${foundImage}" alt="${fund.title}" loading="lazy">
          </a>
        </div>
      `;
    })
    .join('');
  return markup;
}

const funds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: found1,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: found2,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: found3,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: found4,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: found5,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: found6,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: found7,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: found8,
  },
  {
    title: 'Medicins Sans   Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: found9,
  },
];

const container = document.querySelector('#fundsList');
container.insertAdjacentHTML(
  'beforeend',
  createFundsMarkup(funds)
);

const fundsSwiper = new Swiper('.funds__carousel', {
  direction: 'vertical',
  loop: 'true',
  slidesPerView: 6,
  spaceBetween: 20,       
  speed: 1000,
  navigation: {
    nextEl: '.funds__carousel-button.next',
  },
});