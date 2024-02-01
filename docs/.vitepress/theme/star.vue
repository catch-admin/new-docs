<template>
  <div>asdasd</div>
</template>
<script setup>
import Swal from 'sweetalert2'
import { useRoute } from 'vitepress'

const redirectURI = 'https://catchadmin.com/docs/3.0/intro'
const clientID = 'd04e2c13091622432566fd6914548c1394605503a5252f1444e36683e25fef16'
const clientSecret = '6b8c1024e59672c0eaa732b9491db10ef4f82a46bf79a35ed9ff3ea1f8c3590f'
const route = useRoute()

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
        Swal.fire({
          title: '🚀 系统提示：访问文档失败',
          html:
            '<div class="alert-content" style="text-align: center; padding-bottom: 10px;">' +
            '<p style="text-align: left">原因：开源不易！文档仅对 🌟Star 本项目的用户开放！</p>' +
            '<li style="text-align: left"><a href="https://gitee.com/catchadmin/catchAdmin" target="_blank">gitee 地址(主)</a></li>' +
            '<li style="text-align: left"><a href="https://github.com/JaguarJack/catch-admin" target="_blank">github 项目地址</a></li>' +
            '<p style="color: red;margin-top:10px">请多多支持一下我们！代码 100% 开源, 个人与企业可 100% 免费使用</p></div>',
          icon: 'warning',
          // showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          confirmButtonText: '👍赏个 star🌟'
        }).then((r) => {
          star()
        })
      } else {
        sessionStorage.setItem('stared', 'true')
      }
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

const star = () => {
  const url = 'https://gitee.com/api/v5/user/starred/JaguarJack/catchadmin?access_token=' + getAccessTokenFor()
  fetch(url, { method: 'PUT' })
    .then((r) => {
      Swal.fire({
        title: '系统提示',
        text: r.status === 404 ? 'start 项目失败，请重新操作' : 'star 项目成功，文档现已开放权限',
        icon: r.status === 404 ? 'warning' : 'success',
        // showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: '确认'
      })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

const auth = () => {
  if (route.path.startsWith('/docs')) {
    const token = localStorage.getItem('access_token')
    sessionStorage.setItem('to', route.path)
    if (!token) {
      Swal.fire({
        title: '🚀 系统提示：访问文档失败❓',
        html:
          '<div class="alert-content" style="text-align: center; padding-bottom: 10px;">' +
          '<p style="text-align: center">原因：开源不易！文档仅对授权用户并且 🌟Star 的用户开放！非常感谢🙏</p>' +
          '<li style="text-align: center;margin-top:5px;"><a href="https://gitee.com/catchadmin/catchAdmin" target="_blank">gitee 地址(主)</a></li>' +
          '<li style="text-align: center;margin-top:5px;"><a href="https://github.com/JaguarJack/catch-admin" target="_blank">github 项目地址</a></li>' +
          '<p style="color: red;margin-top:15px">请多多支持一下我们！代码 100% 开源, 个人与企业可 100% 免费使用</p></div>',
        icon: 'warning',
        // showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: '👉 Gitee 授权'
      }).then((r) => {
        const authURL = 'https://gitee.com/oauth/authorize?client_id=' + clientID + '&redirect_uri=' + redirectURI + '&response_type=code'
        window.location.href = authURL
      })
    } else {
      isStarred()
    }
  }

  // 首页
  if (route.path === '/') {
    const search = location.search.replace('?', '')
    const code = search.split('=')[1]
    if (code) {
      getAccessToken(code)
      setTimeout(() => {
        const url = 'https://gitee.com/api/v5/user/starred/JaguarJack/catchadmin?access_token=' + getAccessTokenFor()
        fetch(url, { method: 'PUT' })
          .then((r) => {
            if (sessionStorage.getItem('to')) {
              window.location.href = sessionStorage.getItem('to')
            }
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }, 1000)
    }
  }
}

// auth()
</script>
