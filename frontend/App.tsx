
import Home from './Home'
import FirstPage from './Firstpage'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function HomeApp() {
  

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/firstpage" element={<FirstPage />} />
                    
                </Routes>
            </BrowserRouter>
        </>
    );
}

