const content = {
  login: {
    title: 'Login to account',
    email: {
      type: 'text',
      placeholder: 'Email',
    },
    password: {
      type: 'password',
      placeholder: 'Password',
    },
    button: {
      type: 'login',
      title: 'Login',
    },
    subButton: {
      title: `I don't have an account`,
      to: '/register',
    },
  },
  register: {
    title: 'Create account!',
    firstName: {
      type: 'text',
      placeholder: 'First name',
    },
    lastName: {
      type: 'text',
      placeholder: 'Last name',
    },
    email: {
      type: 'text',
      placeholder: 'Email',
    },
    password: {
      type: 'password',
      placeholder: 'Password',
    },
    button: {
      type: 'newAccount',
      title: 'Register',
    },
    subButton: {
      title: 'I have an account',
      to: '/login',
    },
  },
};

export default content;
