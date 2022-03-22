   const data = [
        {
            title: 'Create Account',
            subTitle: 'or use your email for registration',
            footer: '',
            button: 'Sign Up'
        },
        {
            title: 'Sign In',
            subTitle: 'or use your account',
            footer: 'Forgot your password?',
            button: 'Sign In',
        },
        {
            title: 'Welcome Back!',
            subTitle: 'To keep connected with us please login with your personal info',
            footer: '',
            button: 'Sign In',
        },
        {
            title: 'Hello, Friend!',
            subTitle: 'Enter your personal details and start journey with us',
            footer: '',
            button: 'Sign Up',

        }

    ]


   const button1 = document.querySelectorAll(`button`)
button1.forEach(ev=>{
    console.log(ev);
    ev.addEventListener(`click`,(e)=>{
      e.classList.toggle(`.active`)
      console.log(e);
  })
})


const [createAccount, infoLoginRight, infoLoginLeft, btn] = data
export {createAccount, infoLoginRight, infoLoginLeft, btn}


