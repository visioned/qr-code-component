import "./App.css";
import image from "./assets/image-qr-code.png";
function App() {
  return (
    <div className="App">
      <div className="p-4 h-[500px] w-[320px] bg-white rounded-2xl">
        <img src={image} alt="" className="rounded-xl"/>
        <h1 className="text-2xl font-bold text-black text-center pt-5 mx-4 tracking-tight">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-gray-500 text-center pt-4 leading-tight mx-4">
          Scan the QR code to Visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
