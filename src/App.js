import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Footer from './components/Footer';
import Header from './components/Header';
import View from './components/View';

function App() {
  const [uploadResponse, setUploadResponse] = useState(false)
  return (
    <div>
      <Header/>
      <Add setUploadResponse={setUploadResponse}/>
      <View uploadResponse={uploadResponse} setUploadResponse={setUploadResponse} />
      <Footer/>
    </div>
  );
}

export default App;
