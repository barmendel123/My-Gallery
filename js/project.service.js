'use strict'

function getProjects() {
    return gProjects
}


var gProjects = [
    {
        id: 'minesweeper',
        name: 'Mine-sweeper',
        title: 'Be careful from the mines',
        desc: 'The old and loved game',
        img: 'img/portfolio/game01.png',
        site: 'https://barmendel123.github.io/Mine-Sweeper/',
        publishedAt: 'Published: Juli 2022',
        labels: ['Category: Matrixes ', ' keyboard events '],
    },
    {
        id: 'bookshop',
        name: 'Book-shop',
        title: 'Pick a Book',
        desc: 'Rate your book',
        img: 'img/portfolio/book02.jpg',
        site: 'https://barmendel123.github.io/Book-Shop-App/',
        publishedAt: 'Published: Juli 2022',
        labels: ['Category: Book App'],
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'run away from the gohsts',
        desc: 'Eat as much as you can',
        img: 'img/portfolio/pak.png',
        site: 'https://barmendel123.github.io/Pacman-Game/',
        publishedAt: 'Published: Juli 2022',
        labels: ['Category: Matrixes ', ' keyboard events '],
    },


]


function getProjectById(projectId){
    const project = gProjects.find( project => project.id === projectId)
    return project
}

