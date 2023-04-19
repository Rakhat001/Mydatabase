

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const promo = document.querySelectorAll('.promo__adv'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();


        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if(newFilm.length >21){
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            if(favorite){
                console.log('Добовляем в любимый филмь');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMoviesList(movieDB.movies, movieList);
        }



        event.target.reset();

    });



    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }



    const sortArr = (arr) => {
        arr.sort();
    }


    const makeChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    function createMoviesList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
        });


        document.querySelectorAll('.delete').forEach((btn,i) =>{
            btn.addEventListener('click', () =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMoviesList(movieDB.movies, movieList);
            });
        });

    }

    deleteAdv(promo);
    makeChanges();
    createMoviesList(movieDB.movies, movieList);
});










