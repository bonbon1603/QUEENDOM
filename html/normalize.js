function normalizeWord(w) {
    w = w.toLowerCase();

    // Xoá dấu câu
    w = w.replace(/[.,!?;:]/g, "");

    // Nếu dictionary có dạng đồng nghĩa → trả về từ chuẩn
    if (dictionary[w]) return dictionary[w];

    // Nếu không có → dùng chính nó (để tránh lỗi)
    return w;
}

function normalizeSentence(sentence) {
    return sentence
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(w => normalizeWord(w));
}
