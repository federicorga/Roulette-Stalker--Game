import HealthBar from "../HealthBar/HealthBar";
import "./UserBoxInfo.css";

function UserBoxInfo({
  NameUser = "unknow",
  LifeUser = "-",
  factionUser = "Neutral",
  imgUser,
  invert = false,
  backgroundImage ="",
}) {
  return (
    <>
      {invert ? (
        <div className="content-all-UserBoxInfo-invert">
          <div className="UserBoxInfo-internal-invert"style={ {"--background-image": `url(${backgroundImage})`} }>
            <div className="info-content-UserBoxInfo-invert">
              <h2 className="nameUser-UserBoxInfo">{NameUser}</h2>
              <p className="factionUser-UserBoxInfo-invert">{factionUser}</p>
              <div className="userbox-contenthealtbar-invert">
              <HealthBar playerHealth={LifeUser}></HealthBar>
              </div>
            </div>
            {imgUser && (
              <div className="img-UserBoxInfo">
                <img src={imgUser} alt="imagen-usuario" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="content-all-UserBoxInfo">
        <div className="UserBoxInfo-internal "style={ {"--background-image": `url(${backgroundImage})`} }>
          <div className="info-content-UserBoxInfo">
            <h2 className="nameUser-UserBoxInfo">{NameUser}</h2>
            <p className="factionUser-UserBoxInfo">{factionUser}</p>
            <div >
            <HealthBar playerHealth={LifeUser}></HealthBar>
            </div>
          </div>
          {imgUser && (
            <div className="img-UserBoxInfo">
              <img src={imgUser} alt="imagen-usuario" />
            </div>
          )}
        </div>
      </div>
      )}
    </>
  );
}

export default UserBoxInfo;
