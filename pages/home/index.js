async function checkUSer() {
    const checkToken = localStorage.getItem('token')
    if (checkToken) {
        const jasonParse = JSON.parse(checkToken)

        const userResult = await fetch('http://localhost:3333/users/profile', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${jasonParse.token}`,
            },
        })

        if (userResult.status === 200) {
            const body = await userResult.json()
            localStorage.setItem('user', JSON.stringify(body))
        }

        const result = await fetch('http://localhost:3333/posts', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${jasonParse.token}`,
            },
        })
        if (result.status === 200) {
            const body = await result.json()
            body.forEach(item => {
                createPost(item)
            })
        } else {
            console.log(result.status)
        }
    } else {
        window.location = '../login/index.html'
    }
}
checkUSer()

const postButton = document.getElementById('createPostButton')
postButton.addEventListener('click', () => {
    createModal3()
})


function createPost(item) {
    const sectionPosts = document.getElementById('section-posts')

    const divPostContainer = document.createElement('div')
    divPostContainer.setAttribute('id', 'divPostContainer')
    divPostContainer.classList.add('container')

    const infoFeedMain = document.createElement('div')
    infoFeedMain.classList.add('infoFeed')

    const postInfoDivMain = document.createElement('div')
    postInfoDivMain.classList.add('postInfoDiv')

    const imgProfilePost = document.createElement('img')
    imgProfilePost.classList.add('profilePost')
    imgProfilePost.src = (item.user.avatar)

    const smallPostInfo = document.createElement('small')
    smallPostInfo.classList.add('smallPostInfo')

    const smallPostInfoStrong = document.createElement('strong')
    smallPostInfoStrong.innerText = (item.user.username)

    const datePosts = document.createElement('div')
    datePosts.classList.add('date')

    const smallDateMain = document.createElement('small')
    smallDateMain.setAttribute('id', 'smallDate')
    smallDateMain.innerText = (item.createdAt)

    const divEditDeleteMain = document.createElement('div')
    divEditDeleteMain.classList.add('divEditDelete')
    divEditDeleteMain.classList.add('container')

    const buttonEditMain = document.createElement('button')
    buttonEditMain.setAttribute('id', 'editButton')
    buttonEditMain.innerText = ('Editar')

    const buttonDeleteMain = document.createElement('button')
    buttonDeleteMain.setAttribute('id', 'deleteButton')
    buttonDeleteMain.innerText = ('Deletar')

    const h3TitlePostModal = document.createElement('h3')
    h3TitlePostModal.setAttribute('id', 'h3TitlePost')
    h3TitlePostModal.innerText = (item.title)

    const pContentPostMain = document.createElement('p')
    pContentPostMain.setAttribute('id', 'pContentPost')
    pContentPostMain.innerText = (item.content.substring(0, 145))

    const linkPost = document.createElement('a')
    linkPost.setAttribute('id', 'linkPost')

    const smallPostLink = document.createElement('small')
    smallPostLink.innerText = ('Acessar publicação')


    smallPostInfo.appendChild(smallPostInfoStrong)
    linkPost.appendChild(smallPostLink)
    postInfoDivMain.append(imgProfilePost, smallPostInfo)

    datePosts.appendChild(smallDateMain)

    const user = localStorage.getItem('user')
    const userJson = JSON.parse(user)

    if (userJson.email === item.user.email) {
        divEditDeleteMain.append(buttonEditMain, buttonDeleteMain)

        buttonDeleteMain.addEventListener('click', async () => {
            createModalDelete(item)
        })
    }

    infoFeedMain.append(postInfoDivMain, datePosts, divEditDeleteMain)

    divPostContainer.append(infoFeedMain, h3TitlePostModal, pContentPostMain, linkPost)

    sectionPosts.appendChild(divPostContainer)

}

const sectionModal1 = document.getElementById('modalHome')
const imgBlackOpacity = document.createElement('img')
imgBlackOpacity.src = ('../../assets/img/black_background.png')
imgBlackOpacity.setAttribute('id', 'blackImg')

function createModal1() {

    const modalDivContainer = document.createElement('div')
    modalDivContainer.classList.add('modalDiv')
    modalDivContainer.classList.add('container')

    const infoFeedDiv = document.createElement('div')
    infoFeedDiv.classList.add('infoFeed')

    const infoFeedDivPost = document.createElement('div')
    infoFeedDivPost.classList.add('postInfoDiv')

    const imgProfileModal = document.createElement('img')
    imgProfileModal.src = ('../../assets/img/Rectangle -1.png')

    const smallPostInfo = document.createElement('small')
    smallPostInfo.classList.add('smallPostInfo')

    const smallPostInfoStrong = document.createElement('strong')
    smallPostInfoStrong.innerText = ('Samuel Leão')

    const dateModal = document.createElement('div')
    dateModal.classList.add('date')

    const smallDate = document.createElement('small')
    smallDate.setAttribute('id', 'smallDate')
    smallDate.innerText = ('| Outubro de 2022')

    const editDeleteDiv = document.createElement('div')
    editDeleteDiv.classList.add('divEditDelete')

    const buttonDeleteEdit = document.createElement('button')
    buttonDeleteEdit.setAttribute('id', 'deleteButton')
    buttonDeleteEdit.innerText = ('x')

    const h3TitlePostModal = document.createElement('h3')
    h3TitlePostModal.setAttribute('id', 'h3TitlePostModal')
    h3TitlePostModal.innerText = ('Outubro Rosa: Detalhes sobre a importância da prevenção do câncer de mama em cadelas e gatas')

    const pContentPostModal = document.createElement('p')
    pContentPostModal.setAttribute('id', 'pContentPostModal')
    pContentPostModal.innerText = ('Assim como em humanos, cadelas e gatas também podem desenvolver câncer de mama. Ainda hoje, para ambas as espécies, o câncer de mama tem maior incidência. Mesmo com a evolução da medicina veterinária e da oncologia, o câncer de mama muitas vezes não tem cura, sendo o tratamento paliativo uma alternativa para dar conforto às fêmeas. Por isso, a conscientização sobre o tema é uma das ações de prevenção de maior importância, principalmente para a campo. eas. Por isso, a conscientização sobre o tema é uma das ações de prevenção de maior ')

    smallPostInfo.appendChild(smallPostInfoStrong)
    infoFeedDivPost.append(imgProfileModal, smallPostInfo)
    dateModal.appendChild(smallDate)
    editDeleteDiv.appendChild(buttonDeleteEdit)
    infoFeedDiv.append(infoFeedDivPost, dateModal, editDeleteDiv)
    modalDivContainer.append(infoFeedDiv, h3TitlePostModal, pContentPostModal)
    sectionModal1.append(imgBlackOpacity, modalDivContainer)
}
/* createModal1() */


function createModal2() {

    const modalDiv2 = document.createElement('div')
    modalDiv2.classList.add('modalDiv2')
    modalDiv2.classList.add('container')

    const infoFeed2 = document.createElement('div')
    infoFeed2.classList.add('infoFeed')

    const postInfoDiv2 = document.createElement('div')
    postInfoDiv2.classList.add('postInfoDiv')

    const h2PetEditModal = document.createElement('h2')
    h2PetEditModal.classList.add('h2PetEditModal')
    h2PetEditModal.innerText = ('Edição')

    const divEditDelete2 = document.createElement('div')
    divEditDelete2.classList.add('divEditDelete')

    const deleteButton2 = document.createElement('button')
    deleteButton2.setAttribute('id', 'deleteButton2')
    deleteButton2.innerText = ('x')

    const titlePostoModal = document.createElement('div')
    titlePostoModal.setAttribute('id', 'titlePostoModal')

    const postLabel = document.createElement('label')
    postLabel.innerText = ('Título do post')

    const inputmodalTitle = document.createElement('input')
    inputmodalTitle.setAttribute('id', 'inputTextModal')
    inputmodalTitle.classList.add('inputModalPost')
    inputmodalTitle.type = ('text')

    const pPostoModal = document.createElement('div')
    pPostoModal.setAttribute('id', 'pPostoModal')

    const articleLabel = document.createElement('label')
    articleLabel.innerText = ('Post')

    const articleLabelTexteArea = document.createElement('textarea')
    articleLabelTexteArea.setAttribute('id', 'textePostModal')
    articleLabelTexteArea.name = ('text')
    articleLabelTexteArea.cols = ('30')
    articleLabelTexteArea.rows = ('10')

    postInfoDiv2.appendChild(h2PetEditModal)
    divEditDelete2.appendChild(deleteButton2)
    infoFeed2.append(postInfoDiv2, divEditDelete2)
    titlePostoModal.append(postLabel, inputmodalTitle)
    pPostoModal.append(articleLabel, articleLabelTexteArea)
    modalDiv2.append(infoFeed2, titlePostoModal, pPostoModal)
    sectionModal1.append(imgBlackOpacity, modalDiv2)
}
/* createModal2() */


function createModal3() {
    const modalDiv3 = document.createElement('div')
    modalDiv3.classList.add('modalDiv3')
    modalDiv3.classList.add('container')

    const infoFeed3 = document.createElement('div')
    infoFeed3.classList.add('infoFeed')

    const postInfoDiv3 = document.createElement('div')
    postInfoDiv3.classList.add('postInfoDiv')

    const h2PetEditModal2 = document.createElement('h2')
    h2PetEditModal2.classList.add('h2PetEditModal')
    h2PetEditModal2.innerText = ('Criando novo post')

    const divEditDelete3 = document.createElement('div')
    divEditDelete3.classList.add('divEditDelete')

    const deleteButton3 = document.createElement('button')
    deleteButton3.setAttribute('id', 'deleteButton3')
    deleteButton3.innerText = ('x');

    const titlePostoModal2 = document.createElement('div')
    titlePostoModal2.setAttribute('id', 'titlePostModal2')

    const postLabel2 = document.createElement('label')
    postLabel2.innerText = ('Título do post')

    const inputmodalTitle2 = document.createElement('input')
    inputmodalTitle2.setAttribute('id', 'inputTextModal2')
    inputmodalTitle2.classList.add('inputModalPost')
    inputmodalTitle2.type = ('text')

    const pPostoModal2 = document.createElement('div')
    pPostoModal2.setAttribute('id', 'pPostoModal2')

    const articleLabel2 = document.createElement('label')
    articleLabel2.innerText = ('Post')

    const articleLabelTexteArea2 = document.createElement('textarea')
    articleLabelTexteArea2.setAttribute('id', 'textePostModal2')
    articleLabelTexteArea2.name = ('text')
    articleLabelTexteArea2.cols = ('30')
    articleLabelTexteArea2.rows = ('10')

    const divEditDeleteModalClass = document.createElement('div')
    divEditDeleteModalClass.classList.add('divEditDeleteModal')

    const cancelButtonId2 = document.createElement('button')
    cancelButtonId2.setAttribute('id', 'cancelButtonId2')
    cancelButtonId2.classList.add('cancelButton')
    cancelButtonId2.innerText = ('Cancelar');

    const publishButtonId = document.createElement('button')
    publishButtonId.setAttribute('id', 'publishButtonId')
    publishButtonId.classList.add('publishButton')
    publishButtonId.innerText = ('Publicar');
    publishButtonId.addEventListener('click', async () => {
        const post = {
            'title': inputmodalTitle2.value,
            'content': articleLabelTexteArea2.value
        }

        console.log(post)
        const tokenStorage = localStorage.getItem('token')
        const token = JSON.parse(tokenStorage)
        const result = await fetch(`http://localhost:3333/posts/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token.token}`,
            },
            body: JSON.stringify(post)
        })

        if (result.status === 200) {
            window.location = 'index.html'
        } else {
            console.log(result.status)
        }
    })

    postInfoDiv3.appendChild(h2PetEditModal2)
    divEditDelete3.appendChild(deleteButton3)
    infoFeed3.append(postInfoDiv3, divEditDelete3)
    titlePostoModal2.append(postLabel2, inputmodalTitle2)
    pPostoModal2.append(articleLabel2, articleLabelTexteArea2)
    divEditDeleteModalClass.append(cancelButtonId2, publishButtonId)
    modalDiv3.append(infoFeed3, titlePostoModal2, pPostoModal2, divEditDeleteModalClass)
    sectionModal1.append(imgBlackOpacity, modalDiv3)
}
/* createModal3() */


function createModalDelete(item) {
    const modalDiv4 = document.createElement('div')
    modalDiv4.classList.add('modalDiv4')
    modalDiv4.classList.add('container')

    const infoFeed4 = document.createElement('div')
    infoFeed4.classList.add('infoFeed')

    const postInfoDiv4 = document.createElement('div')
    postInfoDiv4.classList.add('postInfoDiv')

    const h2PetEditModal2 = document.createElement('h2')
    h2PetEditModal2.classList.add('h4ConfirmModal')
    h2PetEditModal2.innerText = ('Confirmação de exclusão')

    const divEditDelete4 = document.createElement('div')
    divEditDelete4.classList.add('divEditDelete')

    const deleteButton4 = document.createElement('button')
    deleteButton4.setAttribute('id', 'deleteButton4')
    deleteButton4.innerText = ('x');
    deleteButton4.addEventListener('click', () => {
        modalDiv4.remove()
        imgBlackOpacity.remove()
    })

    const h1ConfirmModal = document.createElement('h1')
    h1ConfirmModal.classList.add('h1ConfirmModal')
    h1ConfirmModal.innerText = ('Tem certeza de que deseja excluir esse post?')

    const pConfirmModal = document.createElement('p')
    pConfirmModal.classList.add('pConfirmModal')
    pConfirmModal.innerText = ('Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir')

    const divEditDeleteModal = document.createElement('div')
    divEditDeleteModal.classList.add('divEditDeleteModal')

    const cancelButton = document.createElement('button')
    cancelButton.setAttribute('id', 'cancelButtonId')
    cancelButton.classList.add('cancelButton')
    cancelButton.innerText = ('Cancelar');

    const confirmDeleteButton = document.createElement('button')
    confirmDeleteButton.setAttribute('id', 'confirmDeleteButtonId')
    confirmDeleteButton.innerText = ('Sim, eu quero deletar esse post');
    cancelButton.classList.add('confirmDeleteButton')
    cancelButton.addEventListener('click', () => {
        modalDiv4.remove()
        imgBlackOpacity.remove()
    })
    confirmDeleteButton.addEventListener('click', async () => {
        const tokenStorage = localStorage.getItem('token')
        const token = JSON.parse(tokenStorage)
        const deleteResult = await fetch(`http://localhost:3333/posts/${item.id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token.token}`,
            },
        })

        if (deleteResult.status === 200) {
            window.location = 'index.html'
        }
    })

    postInfoDiv4.appendChild(h2PetEditModal2)
    divEditDelete4.appendChild(deleteButton4)
    infoFeed4.append(postInfoDiv4, divEditDelete4)
    divEditDeleteModal.append(cancelButton, confirmDeleteButton)
    modalDiv4.append(infoFeed4, h1ConfirmModal, pConfirmModal, divEditDeleteModal)
    sectionModal1.append(imgBlackOpacity, modalDiv4)

}
/* createModal4() */