// 随机生成范围数字
export const randomNumber = (min = 1111111111, max = 11) => {
    // min 和 max 都是包含在内的，即 [min, max]
    min = Math.ceil(min);
    max = Math.floor(max);

    // 获取随机数
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成 UUID V4
export const generateUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0; // 生成一个0-15之间的随机整数
        const v = c === 'x' ? r : (r & 0x3) | 0x8; // 如果是'y'，则保证前两位是10（即8, 9, A, B）
        return v.toString(16); // 将数字转换为16进制字符串
    });
}