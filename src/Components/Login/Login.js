import React from 'react';

const Login = () => {
  return (
    <section className='section'>
      <div className="form-container">
        <form className='form'>
          <h2 className="form__title">Login</h2>

          <div className="form__group">
            <label htmlFor="email" className='form__email'>Email</label>
            <input type="email" name="email" id="email" className='form__input email' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;