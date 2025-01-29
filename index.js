import express from "express";
const app = express();

app.get("/" , (req, res) => {
    res.json({
        email: "eenijeshiku@gmail.com",
        current_dateTime: new Date().toISOString(),
        github_url: "https://github.com/Hnn3y/HNG_BACKEND-STAGE-ZERO.git", 
    }); 
}); 