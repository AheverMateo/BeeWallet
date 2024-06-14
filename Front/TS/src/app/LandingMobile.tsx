import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LandingMobile = () => {
    
    const AbrirCuentaButton = () => {
      const navigate = useNavigate();
    
      const buttonStyle = {//boton login
        width: "170px",
        height: "30px",
        borderRadius: "20px",
        background: "#FCCF58",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        color: "#000",
        margin: "10px 0",
      };
    
      return (
        <Button onClick={() => navigate("/login")} style={buttonStyle}>
          Inicia sesión
        </Button>
      );
    };
    
    const ComenzarButton = () => {
      const navigate = useNavigate();
    
      const buttonStyle = { //boton registrar
        width: "170px",
        height: "30px",
        borderRadius: "20px",
        background: "#FCCF58",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        color: "#000",
        margin: "10px 0",
      };
    
      return (
        <Button onClick={() => navigate("/register")} style={buttonStyle}>
          Regístrate
        </Button>
      );
    };

    const ComenzarButton2 = () => {
      const navigate = useNavigate();
    
      const buttonStyle = { //boton registrar2
        width: "200px",
        height: "30px",
        borderRadius: "20px",
        background: "#FCCF58",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        color: "#000",
        margin: "0px 0",
      };
    
      return (
        <Button onClick={() => navigate("/register")} style={buttonStyle}>
          Comenzar
        </Button>
      );
    };

  const style: React.CSSProperties = {
    textAlign: "center",
    color: "#E2E2E2",
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "34px",
    letterSpacing: "0.4px",
    margin: "130px 0 -30px",
  };

  const beeWalletStyle: React.CSSProperties = {
    fontFamily: "Helvetica",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "normal",
    background: "linear-gradient(90deg, #FCCF58 0%, #967B34 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const beeWalletStyle2: React.CSSProperties = {
    fontFamily: "Helvetica",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "normal",
    background: "linear-gradient(90deg, #FCCF58 0%, #967B34 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "20px", // Ajuste del margen superior
  };

  const descriptionStyle: React.CSSProperties = {
    color: "#FCCF58",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "center",
    margin: "30px",
  };

  const descriptionStyle2: React.CSSProperties = {
    color: "#FCCF58",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "30px",
    textAlign: "center",
    margin: "-70px",
  };

  const colmenaStyle: React.CSSProperties = {
    color: "#E2E2E2",
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "normal",
    textAlign: "center",
    margin: "10px 0",
  };

  const imagenStyle: React.CSSProperties = { //Mobile
    width: "100%",
    height: "auto",
    margin: "20px 0",
  };
  
  const imagenStyle2: React.CSSProperties = { //Chico y B
    width: "100%",
    height: "auto",
    margin: "40px ",
    marginLeft: "-130px",
  };

  const imagenStyle3: React.CSSProperties = { //MobilefONDO
    width: "100%",
    height: "auto",
    margin: "100px 0",
    transform: "scale(1.1)",
   
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "10px 0",
  };

  const lineStyle: React.CSSProperties = {
    width: "216px",
    height: "1px",
    background: "#FCCF58",
    margin: "10px 0",
  };

  const additionalTextStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#E2E2E2",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "22px",
    margin: "10px 0",
  };

  const highlightedWordsStyle: React.CSSProperties = {
    color: "#FCCF58",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px",
  };

  const boxTextStyle: React.CSSProperties = {
    color: "#AFAFAF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "18px",
    margin: "10px", // Ajuste del margen
  };

  const boxStyle: React.CSSProperties = {
    border: "2px solid #FCCF58",
    padding: "15px",
    textAlign: "center",
    color: "#FCCF58",
  };
  

  return (
    
        <div
          style={{
            width: "360px",
            height: "4846px",
            background: "#0E0E0E",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto",
            position: "relative",
          }}
        >
          <h1 style={style}>
            ¡Bienvenidos a <span style={beeWalletStyle}>beeWallet!</span>
          </h1>
          <p style={descriptionStyle}>Tu colmena financiera. </p>
          <p style={colmenaStyle}>
            Descubre una nueva forma de gestionar tus finanzas inspirada en la
            naturaleza
          </p>
          <div style={buttonContainerStyle}>
            <AbrirCuentaButton />
            <ComenzarButton />
          </div>
          <img src="/icons/Component_3_mobile.png" alt="BeeWallet Image" style={imagenStyle} />
          <div>
            <p style={descriptionStyle2}>No somos un banco. </p>
            <p style={descriptionStyle2}>No somos una blockchain. </p>
            <p style={descriptionStyle2}>Somos una comunidad. </p>
          </div>
          <div style={lineStyle}></div>
          <p style={additionalTextStyle}>
            Descubre cómo podemos ayudarte a alcanzar tus <span style={highlightedWordsStyle}>metas financieras</span> de manera <span style={highlightedWordsStyle}>
              inteligente y eficiente</span>, al tiempo que contribuyes al bienestar de la comunidad.
          </p>
          <div style={lineStyle}></div>
    
          <h1 style={beeWalletStyle2}>
            Quienes Somos
          </h1>
          <p style={boxTextStyle}>
            En Beewallet nos inspiramos en el trabajo incansable y la eficiencia de las abejas para ofrecerte una experiencia única.
          </p>

          <img src="/public/icons/ChicoB.png" alt="ChicoB Image" style={imagenStyle2} />

          <p style={boxTextStyle}>
          Estamos comprometidos en brindarte un servicio bancario que sea rápido, seguro y beneficioso para la comunidad.
          </p>

          <h1 style={beeWalletStyle2}>
          Tipos de cuentas
          </h1>

          <img src="/public/icons/Cuentas.png" alt="Cuentas" style={imagenStyle} />
          <img src="/public/icons/Pasos.png" alt="Psos" style={imagenStyle} />
          

          <h1 style={beeWalletStyle2}>
          Por qué elegirnos
          </h1>

          <img src="/public/icons/innovacion.png" alt="innovacion" style={imagenStyle} />
          <img src="/public/icons/compromiso.png" alt="compromis" style={imagenStyle} />
          <img src="/public/icons/transparencia.png" alt="transparencia" style={imagenStyle} />
          <img src="/public/icons/MobilFondo.png" alt="MF" style={imagenStyle3} />
          
          <div style={{ margin: "20px 0" }}>
            <div style={boxStyle}>
              Regístrate ahora y comienza a disfrutar de una experiencia bancaria que está en sintonía con la naturaleza.
              <div style={buttonContainerStyle}>
                <ComenzarButton2 />
              </div>
            </div>
          </div>

        </div>
      );
  
}

export default LandingMobile;
