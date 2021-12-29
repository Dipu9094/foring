import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import RecentJobPost from "./Components/Dashboard/Pages/RecentJobPost";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="recentjob" element={<RecentJobPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
