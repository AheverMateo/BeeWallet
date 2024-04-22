import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { text } from "stream/consumers";

const AbrirCuentaButton = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    display: "flex",
    width: "350px",
    height: "40px",
    padding: "12px 150px",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between",
    flexShrink: 0,
    borderRadius: "30px",
    background: "#FCCF58",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    color: "rgba(0, 0, 0, 1.25)",
  };

  return (
    <Button onClick={() => navigate("/register")} style={buttonStyle}>
      Abrir mi cuenta
    </Button>
  );
};

const ComenzarButton = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    display: "flex",
    width: "370px",
    height: "60px",
    padding: "20px 170px",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-between",
    flexShrink: 0,
    borderRadius: "40px",
    background: "#FCCF58",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    color: "rgba(0, 0, 0, 1.25)",
  };

  return (
    <Button onClick={() => navigate("/register")} style={buttonStyle}>
      Comenzar
    </Button>
  );
};

export default function LandingPage() {
  const navigate = useNavigate();

  const style = {
    // Bienvenidos a beeWallet
    position: "absolute",
    top: "204px",
    left: "692px",
    color: "#FCCF58",
    fontFamily: "Inter",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "50px",
    letterSpacing: "0.4px",
  };

  const beeWalletStyle = {
    // Bienvenidos a Beewallet
    fontFamily: "Helvetica",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.48px",
    background: "linear-gradient(90deg, #FCCF58 0%, #967B34 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const descriptionStyle = {
    // Tu colmena financiera...
    position: "absolute",
    top: "285px",
    left: "742px",
    width: "441px",
    color: "#FCCF58",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
    marginBottom: "10px",
  };

  const colmenaStyle = {
    // Descrubre una nueva forma de gestionar...
    position: "absolute",
    top: "370px",
    left: "600px",
    color: "#E2E2E2",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "-0.48px",
  };

  const imagenStyle = {
    // Imagen FrenteLapton
    position: "absolute",
    top: "500px",
    width: "80%",
    height: "auto",
  };

  const ImagenStyle2 = {
    // Imagen PibeBtexto
    position: "absolute",
    left: "5px",
    top: "1350px",
    width: "80%",
    height: "auto",
  };

  const ImagenStyle3 = {
    // Imagen TipoCuenta
    position: "absolute",
    top: "1950px",
    width: "50%",
    height: "auto",
  };

  const ImagenStyle4 = {
    // Imagen ComoFunciona
    position: "absolute",
    top: "2450px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50%",
    height: "auto",
  };

  const ImagenStyle5 = {
    // Imagen TresMobiles
    position: "absolute",
    top: "2700px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50%",
    height: "auto",
  };

  const ImagenStyle6 = {
    // Imagen PorqueElegirnos
    position: "absolute",
    top: "3200px",
    width: "100%",
    height: "auto",
  };

  const ImagenStyle7 = {
    // Imagen JoinUs
    position: "absolute",
    top: "4534px",
    width: "50%",
    height: "auto",
  };

  //const ImagenStyle8 = { // Imagen Banderas
  //position: 'absolute',
  //top: '4685px',
  //width: '50%',
  //height: 'auto'
  //};

  return (
    <div
      style={{
        width: "100%",
        height: "4846px",
        background: "#0E0E0E",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1024px",
          width: "100%",
          height: "2839px",
          boxSizing: "border-box",
          padding: "1440px 0",
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
      <div>
        <h1 className="text-center font-bold" style={style}>
          ¡Bienvenidos a <span style={beeWalletStyle}>beeWallet!</span>
        </h1>
        <p style={descriptionStyle}>Tu colmena financiera. </p>
        <p style={colmenaStyle}>
          Descubre una nueva forma de gestionar tus finanzas inspirada en la
          naturaleza
        </p>
      </div>
      <img
        src="/icons/FrenteTablet.png"
        alt="BeeWallet Image"
        style={imagenStyle}
      />
      <img
        src="/icons/PibeBtexto.png"
        alt="Second Image"
        style={ImagenStyle2}
      />
      <img
        src="/icons/TipoCuentas.png"
        alt="Second Image"
        style={ImagenStyle3}
      />
      <img
        src="/icons/ComoFunciona.png"
        alt="tercer Image"
        style={ImagenStyle4}
      />
      <img
        src="/icons/TresMobiles.png"
        alt="cuarta Image"
        style={ImagenStyle5}
      />
      <img
        src="/icons/PorqueElegirnos.png"
        alt="quinta Image"
        style={ImagenStyle6}
      />
      <img src="/icons/JoinUs.png" alt="sexto Image" style={ImagenStyle7} />

      <div
        style={{
          position: "absolute",
          left: "678px",
          top: "2371px",
          transform: "translateX(-50%)",
        }}
      >
        <AbrirCuentaButton />
      </div>
      <div
        style={{
          position: "absolute",
          left: "950px",
          top: "4434px",
          transform: "translateX(-50%)",
        }}
      >
        <ComenzarButton />
      </div>
    </div>
  );
}
