'use strict'

console.log('Starting up');

$(onInit)



function onInit(){
    // addEventListeners()
    renderProjects()
}


// function addEventListeners(){
//     $('.btn .btn-info').click(onContactMe)
// }

function onContactMe(){
    const elEmail = document.querySelector('.email')
    const elSubject = document.querySelector('.subject')
    const elMessage = document.querySelector('.message')
    // console.log(elEmail.value);
    // console.log(elSubject.value);
    // console.log(elMessage.value);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${elEmail.value}&su=${elSubject.value}&body=${elMessage.value}`)
    elEmail.value = ''
    elSubject.value = ''
    elMessage.value = ''
}

function renderProjects() {
    var projects = getProjects()
    var strHTML = projects.map( project => {
        return `
            <div class="col-md-4 col-sm-6 portfolio-item">
                <a 
                    class="portfolio-link" 
                    data-toggle="modal" 
                    onclick="onReadProject('${project.id}')"
                    href="#portfolioModal1">
        
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
        
                    <img 
                        class="img-fluid"
                        src="${project.img}"
                    />
                </a>
                <div class="portfolio-caption">
                    <h4>${project.name}</h4>
                    <p class="text-muted">${project.title}</p>
                </div>
            </div>
        `
    } ) 

    $('.portfolio-items').html(strHTML)
}

function onReadProject(projectId){
    const project = getProjectById(projectId)
    var $elModalProject = $('.modal-body')
    $elModalProject.children('h2').text(project.name)
    $elModalProject.find('.item-intro').text(project.title)
    const $elImg = $('.modal .img-fluid')
    $elImg.attr("src", project.img)
    $elModalProject.find('.desc').text(project.desc)
    $elModalProject.find('.date').text(project.publishedAt)
    $elModalProject.find('.label').text(project.labels)
    document.querySelector('.link').href = project.site
}
