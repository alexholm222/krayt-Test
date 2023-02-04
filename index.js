//header
const geoButton = document.querySelector('.header__geo');
const popupHeader = geoButton.querySelector('.popup');
const city = document.querySelector('.city');
const popupItemHeader = popupHeader.querySelectorAll('.popup__item');
const iconArrow = document.querySelector('.icon__arrow');
const sliderNews = document.querySelector('.news__slider');
const categoriesSale = document.querySelectorAll('.sale__category');
const sliderSale = document.querySelector('.sale__slider');
const sliderPictures = document.querySelectorAll('.sale__pictures');
const sliderProduct = document.querySelector('.product__slider');
const slidesProduct = sliderProduct.querySelectorAll('.product__slide');
const sliderProductPictures = document.querySelectorAll('.product__slider_picture');
const buttonSale = document.querySelector('.sale__buttons');
const buttonProduct = document.querySelector('.product__buttons_slider')
const slides = sliderSale.querySelectorAll('.sale__slide');
const dropDown = document.querySelector('.menu__dropdown');
const buttonDrop = dropDown.querySelector('.icon');
const popupDown = dropDown.querySelector('.menu__popup');

//функция открытия попапа
function openPopup(popup) {
  popup.classList.toggle('popup__show');
}
//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup__show');
}

//функция выбора города   
function selectItem(e, popupItem, textBlock) {
   const target = e.target;
   const itemPop = target.closest('.popup__item');
   const itemText = itemPop.querySelector('.popup__text');
   if (target.classList.contains('popup__check')) {
    textBlock.textContent = itemText.textContent;
   } else {
    textBlock.textContent = itemText.textContent;
   } 
   checkin(popupItem, textBlock);
}

function checkin(popupItem, textBlock) {  
  popupItem.forEach(item => {
    const check = item.querySelector('.popup__check');
    const itemText = item.querySelector('.popup__text');
    if(textBlock.textContent === itemText.textContent) {
      check.classList.add('popup__check_true');
    } else {
      check.classList.remove('popup__check_true');
    }  
  });
}
checkin(popupItemHeader, city);

//исталяция слайдера
const slider1 = new Swiper(sliderNews, {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination_news',
    clickable: true,
  },
 
  breakpoints: {
		767: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
		}
	}
});

const slider2 = new Swiper(sliderSale, {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
		767: {
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
		}
	},
});

sliderPictures.forEach(picture => {
  new Swiper(picture, {
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true, 
   pagination: {
    el: picture.querySelector('.swiper-pagination_picture'),
    clickable: true,
    },
  });
});

const slider3 = new Swiper(sliderProduct, {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: buttonProduct.querySelector('.swiper-button-next'),
    prevEl: buttonProduct.querySelector('.swiper-button-prev'),
  },
});

sliderProductPictures.forEach(slide => {
  new Swiper(slide, {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: slide.querySelector('.swiper-button-next'),
      prevEl: slide.querySelector('.swiper-button-prev'),
    },
  });
})
 

//sale

//функция выбора категории
function selectCategory(e) {
  const target = e.target;
  categoriesSale.forEach(element => {
    element.classList.remove('sale__category_active');
  })
  if(!target.classList.contains('sale__category_active')) {
    target.closest('.sale__category').classList.add('sale__category_active');
  }
}

//функции раздела Sale (Roll, Popup )

//функция увеличения слайда
function gainSlide(slide) {
  const rolls = slide.querySelector('.sale__rolls');
  rolls.classList.add('sale__rolls_visible');
  sliderSale.classList.add('sale__slider_transform');
  slide.classList.add('slide-hover');
}

//функция уменьшения слайда
function reductionSlide(slide) {
  const rolls = slide.querySelector('.sale__rolls');
  rolls.classList.remove('sale__rolls_visible');
  sliderSale.classList.remove('sale__slider_transform');
  slide.classList.remove('slide-hover');
}

slides.forEach(slide => {
  slide.addEventListener('mouseover',() => gainSlide(slide))
})

slides.forEach(slide => {
  slide.addEventListener('mouseout',() => reductionSlide(slide))
})

slides.forEach(slide => {
  const rollMaterial = slide.querySelector('.sale__roll_material');
  const textMaterial = rollMaterial.querySelector('.sale__text_material');
  const popupMaterial = rollMaterial.querySelector('.sale__popup');
  const itemMaterial = popupMaterial.querySelectorAll('.popup__item');
  const rollSize = slide.querySelector('.sale__roll_size');
  const textSize = rollSize.querySelector('.sale__text_size');
  const popupSize = rollSize.querySelector('.sale__popup');
  const itemSize = popupSize.querySelectorAll('.popup__item');
  const like = slide.querySelector('.icons_like');
  
  checkin(itemMaterial, textMaterial);
  checkin(itemSize, textSize);
  
  rollMaterial.addEventListener('click', () => openPopup(popupMaterial));
  slide.addEventListener('mouseleave',() => closePopup(popupMaterial));

  rollSize.addEventListener('click', () => openPopup(popupSize));
  slide.addEventListener('mouseleave',() => closePopup(popupSize));

  popupMaterial.addEventListener('click', (e) => selectItem(e, itemMaterial, textMaterial));
  popupSize.addEventListener('click', (e) => selectItem(e, itemSize, textSize));
 
  like.addEventListener('click', ()=> like.classList.toggle('like_active'));

  document.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target.closest('.sale__roll_material')) {
      closePopup(popupMaterial);
    }}); 

  document.addEventListener('click', (evt) => {
    const target = evt.target;
    if (!target.closest('.sale__roll_size')) {
      closePopup(popupSize);
    }}); 
});

//функция выбора цвета в карточке товара 
function selectColor(e, color) {
  const target = e.target;
  color.forEach(element => {
    element.classList.remove('color__item_active');
  })
  if(!target.classList.contains('color__item_active')) {
    target.closest('.color__item').classList.add('color__item_active');
  }
}

//функция всплытия подсказки
function openHelp(iconHelp) {
  const popup = iconHelp.querySelector('.size__popup');
  popup.classList.add('size__popup_active');
}

function closeHelp(iconHelp) {
  const popup = iconHelp.querySelector('.size__popup');
  popup.classList.remove('size__popup_active');
}

//функция выбора размера
function selectSize(e, size) {
  const target = e.target;
  size.forEach(element => {
    element.classList.remove('size__item_active');
  })
  if(!target.classList.contains('size__item_active') && !target.classList.contains('size__item_disabled')) {
    target.closest('.size__item').classList.add('size__item_active');
  }
};

//слушатели popup-header
geoButton.addEventListener('click', () => {
  openPopup(popupHeader);
  iconArrow.classList.toggle('icon__arrow_transform');
});
document.addEventListener('click', (evt) => {
  const target = evt.target;
  if (!target.closest('.popup') && !target.closest('.header__geo')) {
    closePopup(popupHeader);
    iconArrow.classList.remove('icon__arrow_transform');
  }  
});
 
popupHeader.addEventListener('click', (e) => selectItem(e, popupItemHeader, city));

//слушатели sale
categoriesSale.forEach(element => {
  element.addEventListener('click', selectCategory)
});

//слушатели раздела товар дня
slidesProduct.forEach(slide => {
  const sizeList = slide.querySelector('.size__items');
  const colorList = slide.querySelector('.color__items');
  const sizeItems = sizeList.querySelectorAll('.size__item');
  const colorItems = colorList.querySelectorAll('.color__item');
  const iconHelp = slide.querySelector('.size__icon');
  const like = slide.querySelector('.button__other_like');
  const likeIcon = like.querySelector('.button__icon_like')

  colorList.addEventListener('click', (e) => selectColor(e, colorItems));
  iconHelp.addEventListener('mouseover',() => openHelp(iconHelp));
  iconHelp.addEventListener('mouseleave',() => closeHelp(iconHelp));
  sizeList.addEventListener('click', (e) => selectSize(e, sizeItems));
  like.addEventListener('click', ()=> likeIcon.classList.toggle('like_active'));
});

buttonDrop.addEventListener('click', () => {
  dropDown.classList.toggle('menu__dropdown_active');
  popupDown.classList.toggle('menu__popup_active');
});

document.addEventListener('click', (evt) => {
  const target = evt.target; 
  if (!target.closest('.menu__popup') && !target.closest('.menu__dropdown')) {
    dropDown.classList.remove('menu__dropdown_active');
    popupDown.classList.remove('menu__popup_active');
  }  
});
 
document.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.closest('.menu__item')) {
    dropDown.classList.remove('menu__dropdown_active');
    popupDown.classList.remove('menu__popup_active');
  }  
});

//Слушатели слайдеров для сенсорных экранов