import express from "express";
import cors from "cors";


const app = express();
app.use(cors()); 

app.get("/" , (req, res) => {
    const response = {
        email:  "eenijeshiku@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Hnn3y/HNG_BACKEND-STAGE-ZERO.git", 
    }; 
    res.json(response);
});  

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 