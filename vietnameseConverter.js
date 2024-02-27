const express = require('express');
const app = express();

app.get('/api/convertVietnamese', (req, res) => {
    const inputText = req.query.text;
    // Xử lý tiếng Việt có dấu thành không dấu ở đây
    res.send(convertVietnamese(inputText));
});

function convertVietnamese(inputText) {
    // Viết logic xử lý tiếng Việt có dấu thành không dấu ở đây
    // Ví dụ:
    return inputText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
