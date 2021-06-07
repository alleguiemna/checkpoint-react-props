import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/Profile/Profile";
import Header from "./profile/Profile/header/Header";
import Footer from "./profile/Profile/footer/Footer";
import Bio from "./profile/Profile/Bio";


function App() {
  const fullName = "Allegui Emna";
  const bio = <Bio />;
  const profession = "Etudiante chez Go My Code";
  const handleName = (name) => {
    alert(`The name of the profile user is ${name}`);
  };
  return (
    <div className="">
      <Header />
      <div >
      <img
        src="https://celebrity.tn/wp-content/uploads/2019/02/noura-samet-1024x1024.jpg"
        alt="description"
        height="200"
        width="200"
        style={{ borderRadius: "50%",marginTop:"30px",marginLeft:"150px" }}
      ></img>
      
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        handleName={handleName}
      />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
