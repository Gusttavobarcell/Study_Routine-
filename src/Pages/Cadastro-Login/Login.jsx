import React,{useState} from 'react';
import './Cadastro-Login.css'
import Logo from '../../assets/logo.ico'
function Taskpage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cadastro enviado:", formData);
      };
  const [showMessage, setShowMessage] = useState(false);
    
    return (

        <div className="register-container" >
            <div className='logo' ><img src={Logo} alt="" width={70}/></div>
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <div className="input-group">
            <label>User</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='@'
              autoComplete='off'
            />
          </div>
  
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Example@gmail.com'
              autoComplete='off'
            />
          </div>
  
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="input-group">
            <label>Confirmar Senha</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          {showMessage && (
        <p className="senhafalsa">
          ⚠ Senha sendo usada pelo usauario @DaviBritto
        </p>
      )}
          </div>
  
          <button onClick={()=> setShowMessage(! showMessage)} className="register-button">Cadastrar</button>
        </form>
      </div>
    );
  };
    

export default Taskpage