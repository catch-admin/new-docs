function createModal() {
  var modalContainer = document.createElement('div')
  modalContainer.className = 'relative z-[10000] hidden'
  modalContainer.setAttribute('aria-labelledby', 'modal-title')
  modalContainer.setAttribute('role', 'dialog')
  modalContainer.setAttribute('aria-modal', 'true')

  var backdrop = document.createElement('div')
  backdrop.className = 'fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75'

  var modalContentContainer = document.createElement('div')
  modalContentContainer.className = 'fixed inset-0 z-[10000] w-screen overflow-y-auto'

  var modalInnerContent = document.createElement('div')
  modalInnerContent.className = 'relative mx-auto overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-3xl'
  modalInnerContent.style = 'margin-top:300px;'
  var modalHeader = document.createElement('div')
  modalHeader.className = 'px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'

  var modalSection = document.createElement('section')
  modalSection.className = 'bg-white dark:bg-gray-900'

  var modalTextContent = document.createElement('div')
  modalTextContent.className = 'max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-4 lg:px-6'

  modalTextContent.innerHTML = `
        <h1 class="text-2xl">🚀 系统提示：访问文档失败</h1>
        <div class="mt-3 text-sm">很抱歉您遇到了访问文档的问题。为了项目提供更好的发展，我们设置了一些访问条件</div>
        <div class="mt-3 text-sm">文档可能仅对给项目点赞（Star）的用户开放。如果您喜欢我们的项目，请考虑给它点个赞吧！这将帮助我们继续改进和提供更好的内容</div>
        <div class="mt-3 text-sm">项目是完全开源的，个人和企业可以 100% 免费使用。如果您愿意支持我们，不仅可以获得更好的服务，还可以参与到这个令人兴奋的开源社区中。非常感谢您的支持和理解！🚀</div>
        <div class="mt-3">最后非常感谢您的支持🙏</div>
    `

  var modalFooter = document.createElement('div')
  modalFooter.className = 'px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6'

  var confirmButton = document.createElement('button')
  confirmButton.type = 'button'
  confirmButton.className =
    'inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm confirm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
  confirmButton.textContent = '👍 赏个 star 🌟'

  modalFooter.appendChild(confirmButton)
  modalHeader.appendChild(modalSection)
  modalSection.appendChild(modalTextContent)
  modalInnerContent.appendChild(modalHeader)
  modalInnerContent.appendChild(modalFooter)
  modalContentContainer.appendChild(modalInnerContent)
  modalContainer.appendChild(backdrop)
  modalContainer.appendChild(modalContentContainer)
  document.body.appendChild(modalContainer)

  return modalContainer
}

function getPath() {
  return window.location.pathname
}

// Create and display the modal
var modal = createModal()
// Add event listener to close the modal when clicking the backdrop
modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    // modal.classList.add('hidden')
  }
})

const redirectURI = 'https://catchadmin.com/docs/3.0/intro'
const clientID = 'd04e2c13091622432566fd6914548c1394605503a5252f1444e36683e25fef16'
const clientSecret = '6b8c1024e59672c0eaa732b9491db10ef4f82a46bf79a35ed9ff3ea1f8c3590f'

// Optional: Add event listener to close the modal when clicking the "确定" button
var confirmButton = document.querySelector('.confirm')
confirmButton.addEventListener('click', function () {
  const authURL = 'https://gitee.com/oauth/authorize?client_id=' + clientID + '&redirect_uri=' + redirectURI + '&response_type=code'
  window.location.href = authURL
})

const saveTokens = (accessToken, refreshToken) => {
  const now = Date.now()
  const sixHoursLater = now.valueOf() + 3600 * 6 * 1000

  localStorage.setItem('access_token', accessToken)
  localStorage.setItem('refresh_token', refreshToken)
  localStorage.setItem('refresh_at', sixHoursLater.toString())
}

const isCanRefresh = () => {
  const now = Date.now()
  const refreshAt = parseInt(localStorage.getItem('refresh_at'))

  return now >= refreshAt
}

const getAccessToken = async (code = null) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    if (isCanRefresh()) {
      await refreshToken()
      return localStorage.getItem('access_token')
    }
    return token
  } else {
    const response = await fetch('https://gitee.com/oauth/token', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: code,
        client_id: clientID,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: redirectURI
      })
    })

    const { access_token, refresh_token } = await response.json()
    saveTokens(access_token, refresh_token)
    return access_token
  }
}

const getAccessTokenFor = () => {
  getAccessToken()
  return localStorage.getItem('access_token')
}

const refreshToken = async () => {
  const response = await fetch('https://gitee.com/oauth/token?grant_type=refresh_token&refresh_token=' + localStorage.getItem('refresh_token'), {
    method: 'POST'
  })

  const { access_token, refresh_token } = await response.json()
  saveTokens(access_token, refresh_token)
  return access_token
}

const isStarred = async () => {
  if (sessionStorage.getItem('stared') === 'true') {
    return true
  }
  const url = 'https://gitee.com/api/v5/user/starred/JaguarJack/catchadmin?access_token=' + getAccessTokenFor()
  await fetch(url, { method: 'GET' })
    .then((r) => {
      if (r.status === 404) {
        modal.classList.remove('hidden')
      } else {
        location.href = '/docs/3.0/intro'
        sessionStorage.setItem('stared', 'true')
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

const auth = () => {
  const token = localStorage.getItem('access_token')
  sessionStorage.setItem('to', getPath())
  if (!token) {
    modal.classList.remove('hidden')
  } else {
    isStarred()
  }
}
// 如果回调了
const path = getPath()
function hasCode() {
  const search = location.search.replace('?', '')
  const code = search.split('=')[1]
  if (code !== undefined) {
    return code
  }

  return false
}
const code = hasCode()
if (path.includes('docs/3.0/intro') && code) {
  getAccessToken(code)
  setTimeout(() => {
    const url = 'https://gitee.com/api/v5/user/starred/catchadmin/catchAdmin?access_token=' + getAccessTokenFor()
    fetch(url, { method: 'PUT' })
      .then((r) => {
        //
        location.href = '/docs/3.0/intro'
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, 1000)
}

auth()
